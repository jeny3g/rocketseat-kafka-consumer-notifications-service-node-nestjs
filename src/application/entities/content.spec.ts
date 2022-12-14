import { Content } from './content';

it('should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma solicitação de amizade.');

  expect(content.value).toBeTruthy();
});

it('should not be able to create a notification content with less than 5 characters', () => {
  expect(() => new Content('abc')).toThrow();
});

it('should not be able to create a notification content with more than 240 characters', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
