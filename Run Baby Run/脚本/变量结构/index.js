import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

const EndWorldData = z.z.object({
  末世区域: z.z.preprocess(
    value => value ?? {},
    z.z.object({
      当前区域: z.z.string().prefault('北方基地'),
      区域类型: z.z.enum(['基地', '废城', '荒野', '据点', '黑市']).prefault('基地'),
      时间: z.z.string().prefault('末世第十九年，夜晚'),
      天气与环境: z.z.string().prefault('寒风，警戒灯闪烁'),
      区域状态: z.z.record(
        z.z.string().describe('区域名'),
        z.z.object({
          描述: z.z.string().prefault(''),
          可通行: z.z.boolean().prefault(true),
          威胁等级: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 5)).prefault(0),
          已探索: z.z.boolean().prefault(false),
          变异体密度: z.z.enum(['无', '低', '中', '高', '极高']).prefault('低'),
        }),
      ).prefault({}),
      生存任务: z.z.record(
        z.z.string().describe('任务名'),
        z.z.object({
          描述: z.z.string().prefault(''),
          是否达成: z.z.boolean().prefault(false),
          贡献点奖励: z.z.coerce.number().prefault(0),
        }),
      ).prefault({}),
    }),
  ).prefault({}),

  角色: z.z.record(
    z.z.string().describe('角色名'),
    z.z.object({
      _性别: z.z.enum(['女', '男', '未知']).prefault('未知'),
      _外貌: z.z.string().prefault(''),
      _性格: z.z.string().prefault('警觉而隐忍'),
      _弱点: z.z.string().prefault(''),
      阵营: z.z.enum(['军方', '屠日小队', '普通幸存者', '流动商队', '独立据点', '黑市势力']).prefault('普通幸存者'),
      身份: z.z.string().prefault('幸存者'),
      异能系: z.z.enum(['无', '冰', '火', '水', '雷', '风', '木', '力量', '金属', '精神', '空间', '未知']).prefault('无'),
      异能等级: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 5)).prefault(0),
      状态: z.z.enum(['存活', '重伤', '濒死', '死亡', '失踪']).prefault('存活'),
      当前位置: z.z.string().prefault('北方基地'),
      着装: z.z.string().prefault('军用外套与防护装备'),
      恐惧: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 100)).prefault(10),
      理智: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 100)).prefault(80),
      体力: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 100)).prefault(100),
      对user的信任: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), -100, 100)).prefault(0),
      贡献点: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 999999)).prefault(0),
      当前行为: z.z.string().prefault('警戒观察'),
      内心状态: z.z.string().prefault('保持戒备'),
      伤势: z.z.string().prefault('无'),
      持有物品: z.z.record(z.z.string().describe('物品名'), z.z.string()).prefault({}),
    }),
  ).prefault({}),

  变异威胁: z.z.preprocess(
    value => value ?? {},
    z.z.object({
      当前位置: z.z.string().prefault('南方废城集群'),
      威胁等级: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 5)).prefault(1),
      威胁类型: z.z.enum(['腐烂体', '暴走体', '异变体', '智化体', '特殊型', '未知']).prefault('腐烂体'),
      暴露程度: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 100)).prefault(0),
      威胁特征: z.z.record(
        z.z.string().describe('特征名'),
        z.z.object({
          描述: z.z.string().prefault(''),
          类型: z.z.enum(['物理', '感知', '环境', '精神']).prefault('物理'),
        }),
      ).prefault({}),
      已造成效果: z.z.string().prefault('尚未行动'),
    }),
  ).prefault({}),

  事件: z.z.preprocess(
    value => value ?? {},
    z.z.object({
      阶段: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 1, 5)).prefault(1),
      阶段描述: z.z.string().prefault('基地求生'),
      死亡记录: z.z.record(
        z.z.string().describe('角色名'),
        z.z.object({
          死因: z.z.string().prefault(''),
          场景: z.z.string().prefault(''),
        }),
      ).prefault({}),
      关键事件: z.z.record(
        z.z.string().describe('事件名'),
        z.z.object({
          描述: z.z.string().prefault(''),
          楼层: z.z.coerce.number().prefault(0),
        }),
      ).prefault({}),
    }),
  ).prefault({}),

  末世氛围: z.z.preprocess(
    value => value ?? {},
    z.z.object({
      危险等级: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 1, 10)).prefault(2),
      异常现象: z.z.string().prefault('警戒灯在雾中忽明忽暗'),
      线索碎片: z.z.record(
        z.z.string().describe('线索名'),
        z.z.object({
          内容: z.z.string().prefault(''),
          发现者: z.z.string().prefault(''),
        }),
      ).prefault({}),
      贡献点总量: z.z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 999999)).prefault(0),
    }),
  ).prefault({}),
});

$(() => {
  registerMvuSchema(EndWorldData);
});
