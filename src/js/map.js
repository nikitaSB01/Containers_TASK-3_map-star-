class Settings {
  constructor(...value) {
    this.allThemeOptions = ['light', 'gray'];
    this.allMusicOptions = ['pop', 'rock', 'chillout', 'off'];
    this.allDifficultyOptions = ['normal', 'hard', 'nightmare'];
    this.defaultMap = new Map();
    if (value) {
      value.forEach((item) => {
        if (this.allThemeOptions.includes(item)) {
          this.defaultMap.set('theme', item);
        } else if (this.allMusicOptions.includes(item)) {
          this.defaultMap.set('music', item);
        } else if (this.allDifficultyOptions.includes(item)) {
          this.defaultMap.set('difficulty', item);
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

const settin = new Settings('fefdsf', 'rock');
console.log(settin.getSet());

//  export default Settings;
