import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

const EndWorldSchema = z.object({
  末世地图: z.preprocess(
    value => value ?? {},
    z.object({
      $当前地图ID: z.enum([
        'map_mvvdhspx',
        'map_mvvdxwcuel',
        'map_mvvelng9xr',
        'map_mvvep7oigp',
        'map_mvvesuwm2u',
      ]).prefault('map_mvvdhspx'),
      已访问地图: z.record(
        z.string(),
        z.object({
          名称: z.string().prefault(''),
          访问次数: z.coerce.number().prefault(0),
          最近访问楼层: z.coerce.number().prefault(0),
        }),
      ).prefault({}),
      已发现地标: z.record(
        z.string(),
        z.object({
          名称: z.string(),
          描述: z.string().prefault(''),
          类型: z.enum(['location', 'building', 'portal']).prefault('location'),
          所属地图: z.string().prefault(''),
          已访问: z.boolean().prefault(false),
        }),
      ).prefault({}),
      已解锁区域: z.array(
        z.enum([
          'map_mvvdhspx',
          'map_mvvdxwcuel',
          'map_mvvelng9xr',
          'map_mvvep7oigp',
          'map_mvvesuwm2u',
        ]),
      ).prefault(['map_mvvdhspx']),
    }),
  ).prefault({}),
  角色状态: z.preprocess(
    value => value ?? {},
    z.object({
      当前位置: z.string().prefault('大地图'),
      最后交互地标: z.string().prefault(''),
      探索进度: z.coerce.number().transform(value => _.clamp(Math.floor(value), 0, 100)).prefault(0),
      当前主线: z.string().prefault('末世探索'),
    }),
  ).prefault({}),
});

$(() => {
  registerMvuSchema(EndWorldSchema);
});
