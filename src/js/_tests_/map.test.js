// прописать import все файлы JS
import Settings from '../map';
// начать тесты
test('Проверка на вывод ошибки', () => {
  expect(() => new Settings('pfksldf')).toThrow();
});

test('Проверка на вывод стандарта', () => {
  const set = new Settings();
  const res = [
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ];
  expect(set.getSet()).toEqual(res);
});

test('Проверка на вывод только theme', () => {
  const set = new Settings('light');
  const res = [
    ['theme', 'light'],
  ];
  expect(set.getSet()).toEqual(res);
});

test('Проверка на вывод только music', () => {
  const set = new Settings('off');
  const res = [
    ['music', 'off'],
  ];
  expect(set.getSet()).toEqual(res);
});

test('Проверка на вывод только difficulty', () => {
  const set = new Settings('hard');
  const res = [
    ['difficulty', 'hard'],
  ];
  expect(set.getSet()).toEqual(res);
});
