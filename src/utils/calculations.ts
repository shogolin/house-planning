import { Room } from '../types';

/**
 * 描画スケール定数
 * ミリメートルをピクセルに変換する際の倍率
 */
export const SCALE = 0.04; // 1mm = 0.04px

/**
 * 1畳の面積（平米）
 */
const ONE_JO_IN_SQM = 1.6562;

/**
 * 1坪の面積（平米）
 */
const ONE_TSUBO_IN_SQM = 3.30579;

/**
 * ミリメートルをピクセルに変換
 */
export function mmToPx(mm: number): number {
  return mm * SCALE;
}

/**
 * 部屋の面積を平米で計算
 */
export function calculateRoomArea(room: Room): number {
  // mm² を m² に変換（1m = 1000mm なので、1mm² = 0.000001m²）
  return (room.width * room.height) / 1000000;
}

/**
 * 部屋の畳数を計算
 */
export function calculateJo(room: Room): number {
  const areaSqm = calculateRoomArea(room);
  return areaSqm / ONE_JO_IN_SQM;
}

/**
 * 複数の部屋の延床面積を平米で計算
 */
export function calculateTotalFloorArea(rooms: Room[]): number {
  return rooms.reduce((total, room) => total + calculateRoomArea(room), 0);
}

/**
 * 平米を坪に変換
 */
export function sqmToTsubo(sqm: number): number {
  return sqm / ONE_TSUBO_IN_SQM;
}

/**
 * 数値を指定された小数点以下桁数で丸める
 */
export function roundToDecimal(value: number, decimals: number = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

