import { ToTimerPipe } from './to-timer.pipe';

describe('ToTimerPipe', () => {
  it('create an instance', () => {
    const pipe = new ToTimerPipe();
    expect(pipe).toBeTruthy();
  });
});
