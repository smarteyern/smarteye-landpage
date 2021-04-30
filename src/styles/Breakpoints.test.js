import { breakAt, BreadkpointsSize } from "./Breadkpoints";

test.each([
  [BreadkpointsSize.sm],
  [BreadkpointsSize.md],
  [BreadkpointsSize.lg],
  [BreadkpointsSize.xl],
  [BreadkpointsSize.xxl],
])("Break at %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
