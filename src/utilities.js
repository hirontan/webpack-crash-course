export function NiJou(num) { // 他のファイルでも利用するためにexportを記述
  return num ** 2;
}

export const NAME = 'Ham'

export default class Lion { // デフォルトクラス
  static say() {
    return 'Roar'
  }
}
