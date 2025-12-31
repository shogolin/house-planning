import { Plan, Room } from '../types';

/**
 * Plan A: ベース案
 * すべての座標・サイズはミリメートル（mm）単位
 */
const planARooms: Room[] = [
  {
    id: 'living',
    name: 'LDK',
    width: 3640,  // mm
    height: 5460, // mm
    x: 1820,      // mm
    y: 0,         // mm
    color: '#FFE5B4'
  },
  {
    id: 'bedroom1',
    name: '主寝室',
    width: 3640,
    height: 3640,
    x: 0,
    y: 0,
    color: '#E6E6FA'
  },
  {
    id: 'bedroom2',
    name: '子供部屋1',
    width: 2730,
    height: 3640,
    x: 5460,
    y: 0,
    color: '#E6E6FA'
  },
  {
    id: 'bedroom3',
    name: '子供部屋2',
    width: 2730,
    height: 3640,
    x: 5460,
    y: 3640,
    color: '#E6E6FA'
  },
  {
    id: 'bath',
    name: '浴室',
    width: 1820,
    height: 1820,
    x: 3640,
    y: 5460,
    color: '#B0E0E6'
  },
  {
    id: 'toilet',
    name: 'トイレ',
    width: 1820,
    height: 1820,
    x: 1820,
    y: 5460,
    color: '#B0E0E6'
  },
  {
    id: 'entrance',
    name: '玄関',
    width: 1820,
    height: 1820,
    x: 0,
    y: 5460,
    color: '#D3D3D3'
  }
];

/**
 * Plan B: Plan Aの派生案
 * Plan Aのコピーを作成し、リビングを500mm広げる
 */
function createPlanB(): Room[] {
  // Plan Aのコピーを作成
  const planBRooms = planARooms.map(room => ({ ...room }));
  
  // リビングの幅を500mm広げる
  const livingRoom = planBRooms.find(room => room.id === 'living');
  if (livingRoom) {
    livingRoom.width += 500; // 3640 → 4140
    // 右側の部屋を500mm右に移動
    planBRooms.forEach(room => {
      if (room.x >= 5460) {
        room.x += 500;
      }
    });
  }
  
  return planBRooms;
}

/**
 * プランの定義
 */
export const plans: Plan[] = [
  {
    id: 'plan-a',
    name: 'Plan A',
    rooms: planARooms
  },
  {
    id: 'plan-b',
    name: 'Plan B',
    rooms: createPlanB(),
    basePlanId: 'plan-a'
  }
];

/**
 * プランIDからプランを取得
 */
export function getPlanById(planId: string): Plan | undefined {
  return plans.find(plan => plan.id === planId);
}

