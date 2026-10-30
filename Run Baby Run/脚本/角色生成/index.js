(function () {
  const factions = ['军方', '屠日小队', '普通幸存者', '流动商队', '独立据点', '黑市势力'];
  const abilities = ['无', '冰', '火', '水', '雷', '风', '木', '力量', '金属', '精神', '空间'];
  const names = ['林澈', '沈砚', '叶岚', '苏川', '谢北', '顾玄', '白雾', '屠日·许峥', '屠日·晴川'];
  const appearances = ['灰白短发、深色战术服、右臂旧日烧伤', '黑长直、军用风衣、眼神警惕', '栗色马尾、防割手套、腰间挂着能量匕首', '银灰短发、破旧雨衣、左眼有电子护具'];
  const personalities = ['冷静多疑', '沉默寡言但观测力极强', '责任感强但不轻易示弱', '偏执谨慎', '乐观实用主义', '同情心被末世磨得很淡'];
  const weaknesses = ['旧伤影响奔跑', '高强度异能后失控', '害怕闭锁空间', '雷雨天气异能不稳定', '无法承受精神干扰', '过度保护队友'];

  function pick(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function createCharacter() {
    const faction = pick(factions);
    return {
      name: pick(names) + Math.floor(Math.random() * 100),
      gender: Math.random() < 0.5 ? '女' : '男',
      faction,
      identity: faction === '屠日小队' ? '顶尖异能者' : faction + '成员',
      ability: pick(abilities),
      abilityLevel: 1 + Math.floor(Math.random() * 5),
      appearance: pick(appearances),
      personality: pick(personalities),
      weakness: pick(weaknesses),
    };
  }

  function showModal() {
    if (document.getElementById('endworld-char-modal')) return;
    const character = createCharacter();
    const modal = document.createElement('div');
    modal.id = 'endworld-char-modal';

    const factionOptions = factions.map(value => `<option${value === character.faction ? ' selected' : ''}>${value}</option>`).join('');
    const abilityOptions = abilities.map(value => `<option${value === character.ability ? ' selected' : ''}>${value}</option>`).join('');
    modal.innerHTML = `
      <div style="position:fixed;inset:0;z-index:99999;background:rgba(4,7,6,.82);display:flex;align-items:center;justify-content:center">
        <div style="width:min(520px,92vw);max-height:90vh;overflow:auto;background:#171b19;color:#ddd6c4;border:1px solid rgba(212,175,55,.45);border-radius:12px;padding:18px;font-family:system-ui">
          <h3 style="margin:0 0 14px;color:#d4af37;letter-spacing:3px;text-align:center">末世角色生成</h3>
          <label>姓名<br><input id="ew-name" value="${character.name}" style="width:100%;margin:5px 0 8px;padding:8px"></label>
          <label>阵营<br><select id="ew-faction" style="width:100%;margin:5px 0 8px;padding:8px">${factionOptions}</select></label>
          <label>异能系<br><select id="ew-ability" style="width:100%;margin:5px 0 8px;padding:8px">${abilityOptions}</select></label>
          <label>异能等级<br><input id="ew-level" type="number" min="0" max="5" value="${character.abilityLevel}" style="width:100%;margin:5px 0 8px;padding:8px"></label>
          <label>外貌与装备<br><textarea id="ew-appearance" rows="3" style="width:100%;margin:5px 0 8px;padding:8px">${character.appearance}</textarea></label>
          <label>性格<br><input id="ew-personality" value="${character.personality}" style="width:100%;margin:5px 0 8px;padding:8px"></label>
          <label>弱点<br><input id="ew-weakness" value="${character.weakness}" style="width:100%;margin:5px 0 12px;padding:8px"></label>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button id="ew-random">重新随机</button>
            <button id="ew-add">加入末世档案</button>
            <button id="ew-close">取消</button>
          </div>
        </div>
      </div>`;

    document.body.appendChild(modal);
    modal.querySelector('#ew-close').onclick = () => modal.remove();
    modal.querySelector('#ew-random').onclick = () => {
      modal.remove();
      showModal();
    };
    modal.querySelector('#ew-add').onclick = () => {
      const name = modal.querySelector('#ew-name').value.trim() || character.name;
      const faction = modal.querySelector('#ew-faction').value;
      const identity = faction === '屠日小队' ? '顶尖异能者' : faction + '成员';

      try {
        updateVariablesWith(value => _.set(value, `stat_data.角色.${name}`, {
          _性别: character.gender,
          _外貌: modal.querySelector('#ew-appearance').value,
          _性格: modal.querySelector('#ew-personality').value,
          _弱点: modal.querySelector('#ew-weakness').value,
          阵营: faction,
          身份: identity,
          异能系: modal.querySelector('#ew-ability').value,
          异能等级: Number(modal.querySelector('#ew-level').value) || 0,
          状态: '存活',
          当前位置: '北方基地',
          着装: modal.querySelector('#ew-appearance').value,
          恐惧: 10,
          理智: 80,
          体力: 100,
          对user的信任: 0,
          贡献点: 0,
          当前行为: '警戒观察',
          内心状态: '保持戒备',
          伤势: '无',
          持有物品: {},
        }), { type: 'message', message_id: 'latest' });
        toastr.success('角色已加入末世档案', name);
      } catch (error) {
        console.error('[末世角色生成] 写入失败:', error);
        toastr.error('角色写入失败');
      }
      modal.remove();
    };
  }

  $(() => {
    console.info('[末世角色生成] 脚本已加载');
    document.addEventListener('rbr-open-char-creator', showModal);
  });
  $(window).on('pagehide', () => {
    document.removeEventListener('rbr-open-char-creator', showModal);
  });
})();
