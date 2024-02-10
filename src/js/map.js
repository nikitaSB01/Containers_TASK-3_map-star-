class Settings {
  constructor(...value) {
    this.allThemeOptions = ['dark', 'light', 'gray'];
    this.allMusicOptions = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.allDifficultyOptions = ['easy', 'normal', 'hard', 'nightmare'];
    this.defaultMap = new Map();
    if (value) {
      value.forEach((item) => {
        if (this.allThemeOptions.includes(item)) {
          this.defaultMap.set('theme', item);
        } else if (this.allMusicOptions.includes(item)) {
          this.defaultMap.set('music', item);
        } else if (this.allDifficultyOptions.includes(item)) {
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
      this.defaultMap.set(['theme', 'dark']);
      this.defaultMap.set(['music', 'trance']);
      this.defaultMap.set(['difficulty', 'easy']);
    }
  }

  getSet() {
    return this.defaultMap;
  }
}

const settin = new Settings('dark', 'rock');
console.log(settin.getSet());

//  export default Settings;
