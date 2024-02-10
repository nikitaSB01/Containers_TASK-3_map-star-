class Settings {
  constructor(...value) {
    this.defaultMap = new Map();
    if (value.length !== 0) {
      const allThemeOptions = ['dark', 'light', 'gray'];
      const allMusicOptions = ['trance', 'pop', 'rock', 'chillout', 'off'];
      const allDifficultyOptions = ['easy', 'normal', 'hard', 'nightmare'];
      value.forEach((item) => {
        if (allThemeOptions.includes(item)) {
          this.defaultMap.set('theme', item);
        } else if (allMusicOptions.includes(item)) {
          this.defaultMap.set('music', item);
        } else if (allDifficultyOptions.includes(item)) {
          this.defaultMap.set('difficulty', item);
        } else {
          throw new Error(`Одно из введённых Вами значений не соответсвует доступным настройкам. 
          Доступные настройки: 
          theme: ['light', 'gray'] 
          music: ['pop', 'rock', 'chillout', 'off']
          difficulty: ['normal', 'hard', 'nightmare']
          Настройки по умолчанию:
          theme: ['dark'] 
          music: ['trance']
          difficulty: ['easy']
          `);
        }
      });
    } else {
      this.defaultMap.set('theme', 'dark');
      this.defaultMap.set('music', 'trance');
      this.defaultMap.set('difficulty', 'easy');
    }
  }

  getSet() {
    return this.defaultMap;
  }
}

const settin = new Settings('pop');
console.log(settin.getSet());

//  export default Settings;
