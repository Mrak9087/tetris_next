export const VIEW_WIDTH = 12;
export const VIEW_HEIGHT = 20;

export const createStage = (): number[][] => {
  return Array.from(Array(VIEW_HEIGHT), () => {
    return new Array(VIEW_WIDTH).fill(0);
  });
};
