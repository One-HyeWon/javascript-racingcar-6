import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}

  async getCarName() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차의 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    if (!carNames) {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    }
    const names = carNames.split("");
    for (const name of names) {
      if (name.length === 0 || name.length >= 6) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      }
    }
    return carNames;
  }

  performRace(cars) {
    cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.position++;
      }
    });
  }
}

export default App;
