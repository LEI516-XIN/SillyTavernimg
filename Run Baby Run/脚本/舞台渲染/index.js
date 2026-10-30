(function () {
  const presets = {
    北方基地: {
      name: '北方基地',
      time: '末世第十九年，夜晚',
      weather: '寒风，警戒灯闪烁，贡献点大厅灯火通明',
      areas: [
        ['大门与防线', '军方哨兵严密巡逻', true, 2],
        ['一环核心区', '屠日小队驻地与基地管理会所在区域', true, 1],
        ['二环生活区', '交易市场、医疗站与物资供给站', true, 1],
        ['三环外围区', '劳工营与新入幸存者安置区', true, 3],
      ],
    },
    南方废城: {
      name: '南方废城集群',
      time: '末世第十九年，清晨',
      weather: '毒雾未散，高楼间回荡变异体嘶鸣',
      areas: [
        ['断裂街区', '废弃车辆与坍塌广告牌封锁的街道', true, 3],
        ['病毒实验室', '疑似病毒泄漏的废弃研究设施', false, 5],
        ['废弃高速网', '断裂桥梁与武装商队交易点', true, 3],
        ['地下通道', '低阶变异体频繁出没的狭窄通道', false, 4],
      ],
    },
    荒野据点: {
      name: '荒野独立据点',
      time: '末世第十九年，黄昏',
      weather: '沙尘漫天，警报系统随时失灵',
      areas: [
        ['铁丝防线', '废铁与沙袋筑起的简陋入口', true, 3],
        ['幸存者营地', '帐篷与集装箱组成的临时营地', true, 2],
        ['资源仓库', '食水与弹药的有限储备', true, 3],
        ['智化体遗址', '高阶变异体曾经留下的全灭废墟', false, 5],
      ],
    },
    异能者黑市: {
      name: '异能者黑市',
      time: '末世第十九年，深夜',
      weather: '地下站停电，只有油灯与霓虹招牌',
      areas: [
        ['地下入口', '需要暗号或人脉才能进入', true, 3],
        ['装备交易区', '能量枪、护甲与变异体器官交易区', true, 2],
        ['雇佣任务区', '悬赏猎杀变异体与争夺资源的任务板', true, 3],
        ['异能者出租区', '身份登记模糊，交易风险极高', false, 4],
      ],
    },
  };

  function writeStage(name) {
    const preset = presets[name] || presets.北方基地;
    const areas = {};

    preset.areas.forEach(area => {
      areas[area[0]] = {
        描述: area[1],
        可通行: area[2],
        威胁等级: area[3],
        已探索: area[0] === preset.areas[0][0],
        变异体密度: area[3] >= 4 ? '极高' : area[3] >= 3 ? '高' : area[3] >= 1 ? '中' : '低',
      };
    });

    try {
      updateVariablesWith(value => {
        _.set(value, 'stat_data.末世区域.currentArea', preset.name);
        _.set(value, 'stat_data.末世区域.当前区域', preset.name);
        _.set(value, 'stat_data.末世区域.区域类型', preset.name.includes('废城') ? '废城' : preset.name.includes('黑市') ? '黑市' : preset.name.includes('荒野') ? '荒野' : preset.name.includes('基地') ? '基地' : '据点');
        _.set(value, 'stat_data.末世区域.时间', preset.time);
        _.set(value, 'stat_data.末世区域.天气与环境', preset.weather);
        _.set(value, 'stat_data.末世区域.区域状态', areas);
        _.set(value, 'stat_data.末世氛围.异常现象', preset.weather);
        _.set(value, 'stat_data.末世氛围.危险等级', _.max(preset.areas.map(area => area[3])) || 2);
      }, { type: 'message', message_id: 'latest' });
      toastr.success(preset.name + '舞台已加载', '末世舞台配置');
    } catch (error) {
      console.error('[末世舞台] 写入变量失败:', error);
      toastr.error('舞台配置写入失败');
    }
  }

  function renderPlaceholders() {
    document.querySelectorAll('.rbr-stage-placeholder, #rbr-stage-placeholder').forEach(marker => {
      if (marker.dataset.endworldRendered) return;
      marker.dataset.endworldRendered = 'true';
      marker.className = 'rbr-stage-placeholder endworld-stage-placeholder';

      const options = Object.keys(presets).map(name => `<option>${name}</option>`).join('');
      marker.innerHTML = `
        <div style="border:1px solid rgba(212,175,55,.35);border-radius:10px;padding:14px;background:#151916;color:#ddd5c4;font-family:system-ui">
          <div style="font-size:16px;color:#d4af37;font-weight:700;margin-bottom:10px">末世舞台配置</div>
          <label>舞台预设</label>
          <select data-preset style="width:100%;margin:6px 0 12px;padding:8px;background:#0d100e;color:#ddd5c4">${options}</select>
          <button data-load style="width:100%;padding:9px;border:1px solid #9a8546;background:transparent;color:#d4af37;cursor:pointer">加载舞台</button>
        </div>`;
      marker.querySelector('[data-load]').onclick = () => {
        writeStage(marker.querySelector('[data-preset]').value);
      };
    });
  }

  $(() => {
    console.info('[末世舞台] 渲染脚本已加载');
    renderPlaceholders();
    const observer = new MutationObserver(renderPlaceholders);
    observer.observe(document.body, { childList: true, subtree: true });
    $(window).on('pagehide', () => observer.disconnect());
  });
})();
