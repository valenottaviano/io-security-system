import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    const body = await req.json();
    const token = body.token;
    const type = body.type;

    if (token) {
        const response = await axios.get('http://alumnos.unsta.edu.ar/index.php/public/validarCredencial', {
            params: {
                token: token,
                type: type,
            },
            headers: {
                Host: 'alumnos.unsta.edu.ar',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                Cookie: '_ga=GA1.3.1497172816.1691586181; _ga_6EWCFP26HX=GS1.1.1698336250.3.0.1698336254.0.0.0; _ga_CKL0L6G0E9=GS1.1.1698336257.2.1.1698336314.0.0.0; _gcl_au=1.1.1830554171.1698336250; symfony=p87upcilkmtcsbgeg0374oqnc5',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'cross-site',
            },
        });
        return NextResponse.json({ 'status': String(!JSON.stringify(response.data).includes('¡OOPS!')) })
    } else {
        return NextResponse.json({ 'status': 'false' })
    }
}