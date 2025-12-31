import { Plan, Room } from '../types';
import { Grid } from './Grid';
import { Room as RoomComponent } from './Room';
import { mmToPx } from '../utils/calculations';

interface FloorPlanProps {
  plan: Plan;
}

/**
 * 間取り図全体を描画するメインコンポーネント
 */
export function FloorPlan({ plan }: FloorPlanProps) {
  // すべての部屋を含む領域のサイズを計算
  const bounds = calculateBounds(plan.rooms);
  const viewBoxWidth = mmToPx(bounds.width);
  const viewBoxHeight = mmToPx(bounds.height);
  
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', overflow: 'auto' }}>
      <svg
        width="100%"
        height="600"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        style={{ backgroundColor: '#fff' }}
      >
        {/* グリッド背景 */}
        <Grid width={bounds.width} height={bounds.height} />
        
        {/* 部屋を描画 */}
        {plan.rooms.map(room => (
          <RoomComponent key={room.id} room={room} />
        ))}
      </svg>
    </div>
  );
}

/**
 * 部屋の配置から全体の境界を計算
 */
function calculateBounds(rooms: Room[]): { width: number; height: number } {
  if (rooms.length === 0) {
    return { width: 10000, height: 10000 }; // デフォルトサイズ
  }
  
  let maxX = 0;
  let maxY = 0;
  
  rooms.forEach(room => {
    const roomRight = room.x + room.width;
    const roomBottom = room.y + room.height;
    
    if (roomRight > maxX) maxX = roomRight;
    if (roomBottom > maxY) maxY = roomBottom;
  });
  
  // 余白を追加（10%）
  return {
    width: maxX * 1.1,
    height: maxY * 1.1
  };
}


