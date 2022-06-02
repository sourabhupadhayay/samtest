import { TestBed } from "@angular/core/testing";

import { NetwokService } from "./network.service";

describe("NetwokService", () => {
  let service: NetwokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetwokService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
