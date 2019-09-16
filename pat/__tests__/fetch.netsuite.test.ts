import {fetchItems} from '../networking/fetchItems';
import {oauth1} from '../authentication/oauth1';
import netsuite from '../response_adapters/netsuite';

test('fetch data should be ok', () => {
    const request_data = {
        url: 'https://tstdrv710253.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=302&deploy=1',
        method: 'GET'
    };

    const authorization: string = oauth1({
        consumer: { 
            key: 'e72a3a3949e711e580633c78f8afcb274088861a5f9ed75da8429a82556c30ef', 
            secret: '45703c7930f154b52806a0ea6a1414e9974b4fb9019014d3db1e260d0fcf419b' 
        },
        realm: 'TSTDRV710253',
        token: {
            key: '5d261e6320cbd792924d03a689d480aca792bf7e0a8a1f03f0b404d1f6086879',
            secret: '4a9706919f06e8143e18b70d50678cef888e67adc96a25dfeeb58ad4f4224c21'
        },
        request_data: request_data
    })

    const reqHeaders = {
        'Content-Type': 'application/json',
        'Authorization': authorization + ', realm="TSTDRV710253"'
    };

    return fetchItems({
        url: request_data.url,
        options: {
          headers: reqHeaders,
          method: request_data.method
        },
        response_adapters: netsuite
    }).then(data => {
        expect(data).toHaveLength(15);
    })
})