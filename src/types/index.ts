/**
 * 部屋のデータ構造
 * すべての座標・サイズはミリメートル（mm）単位で管理
 */
export interface Room {
  id: string;
  name: string;
  width: number;  // mm
  height: number; // mm
  x: number;      // mm
  y: number;      // mm
  color: string;
}

/**
 * プランのデータ構造
 */
export interface Plan {
  id: string;
  name: string;
  rooms: Room[];
  basePlanId?: string; // 継承元のプランID（オプション）
}

/**
 * 土地の境界線データ（オプション）
 */
export interface LandBoundary {
  points: Array<{ x: number; y: number }>; // mm
  color?: string;
}

