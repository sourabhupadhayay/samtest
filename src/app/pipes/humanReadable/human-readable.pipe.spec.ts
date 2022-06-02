import { HumanReadablePipe } from "./human-readable.pipe";

describe("HumanReadablePipe", () => {
  it("create an instance", () => {
    const pipe = new HumanReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
