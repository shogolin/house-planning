import { Room } from '../types';
import {
  calculateTotalFloorArea,
  calculateRoomArea,
  calculateJo,
  sqmToTsubo,
  roundToDecimal
} from '../utils/calculations';

interface PlanInfoProps {
  rooms: Room[];
  planName: string;
}

/**
 * プランの情報（延床面積、坪数、畳数）を表示するコンポーネント
 */
export function PlanInfo({ rooms, planName }: PlanInfoProps) {
  const totalAreaSqm = calculateTotalFloorArea(rooms);
  const totalAreaTsubo = sqmToTsubo(totalAreaSqm);
  
  // 各部屋の情報を計算
  const roomInfo = rooms.map(room => ({
    name: room.name,
    areaSqm: calculateRoomArea(room),
    jo: calculateJo(room)
  }));
  
  return (
    <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <h2 style={{ marginTop: 0 }}>{planName}</h2>
      
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>全体情報</h3>
        <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
          <div>延床面積: {roundToDecimal(totalAreaSqm, 2)} ㎡</div>
          <div>延床面積: {roundToDecimal(totalAreaTsubo, 2)} 坪</div>
        </div>
      </div>
      
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>各部屋</h3>
        <div style={{ fontSize: '12px', lineHeight: '1.8' }}>
          {roomInfo.map((info, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{info.name}:</span>
              <span>
                {roundToDecimal(info.areaSqm, 2)} ㎡ / {roundToDecimal(info.jo, 2)} 畳
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

