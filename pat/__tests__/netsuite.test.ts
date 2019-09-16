import netsuite from '../response_adapters/netsuite';

test('netsuite should update data', () => {
    expect(netsuite('{"data": [{"itemid": "name", "cost":"cost", "internalid":"1"}]}')[0]).toHaveProperty('id');
});