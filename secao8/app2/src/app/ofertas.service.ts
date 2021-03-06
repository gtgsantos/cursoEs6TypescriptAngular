import { Oferta } from './shared/oferta.model';

export class OfertasService {

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: 'restaurante',
            titulo: 'Super Burger',
            descricaoOferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
            anunciante: 'Original Burger',
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: '/assets/ofertas/1/img1.jpg'},
                {url: '/assets/ofertas/1/img2.jpg'},
                {url: '/assets/ofertas/1/img3.jpg'},
                {url: '/assets/ofertas/1/img4.jpg'}
            ]
        },
        {
            id: 2,
            categoria: 'restaurante',
            titulo: 'Cozinha Mexicana',
            descricaoOferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
            anunciante: 'Mexicana',
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: '/assets/ofertas/2/img1.jpg'},
                {url: '/assets/ofertas/2/img2.jpg'},
                {url: '/assets/ofertas/2/img3.jpg'},
                {url: '/assets/ofertas/2/img4.jpg'}
            ]
        
        },
        {
            id: 4,
            categoria: 'diversao',
            titulo: 'Estância das águas',
            descricaoOferta: 'Diversão garantida com piscinas, trilhas e muito mais.',
            anunciante: 'Estância das águas',
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: '/assets/ofertas/3/img1.jpg'},
                {url: '/assets/ofertas/3/img2.jpg'},
                {url: '/assets/ofertas/3/img3.jpg'},
                {url: '/assets/ofertas/3/img4.jpg'},
                {url: '/assets/ofertas/3/img5.jpg'},
                {url: '/assets/ofertas/3/img6.jpg'}
            ]
        }
    ];

    public getOfertas(): Oferta[] {
        return this.ofertas;
    }

    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            // algum processamento, que no final chama a funcao resolve ou reject, dependendo da situacao;
            let deuCerto = true;
            if (deuCerto) {
                //setTimeout(() => resolve( this.ofertas ), 3000);
                setTimeout(() => {
                    resolve( this.ofertas );

                }, 3000);

            } else {
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado.'});
            }
        })
        .then(( ofertas: Oferta[]) => {
            console.log('primeiro then');
            return ofertas;
        })
        .then(( ofertas: Oferta[]) => {
            console.log('segundo then');
            return new Promise((resolve2, reject2) => {
                setTimeout(() => { resolve2(ofertas)}, 3000);
            });
        })
        .then(( ofertas: Oferta[]) => {
            console.log('terceiro then');
            return ofertas;
        });
    }

}