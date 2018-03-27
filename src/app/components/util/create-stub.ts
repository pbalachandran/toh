import * as sinon from 'sinon';

export function createStub<T>(klass: { new(...args: any[]): T; }): T {
  return <T> (<any> sinon.createStubInstance(klass));
}
