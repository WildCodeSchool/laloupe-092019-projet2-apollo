import React from 'react';
import './identity.css';


class Identity extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="identity mob-12 tab-12 dsk-12">
                <div className="head mob-12 tab-12 dsk-12">
                    <img className="imghead mob-3 tab-2 dsk-2" src="imgzodiacs/goldarmor/bélier.jpg" alt=""/>
                    <h1 className="title1 mob-6 tab-5 dsk-3 ">Constellation du bélier</h1>
                </div>
                <div className="indoor mob-12 tab-12 dsk-12">
                    <div className="theme mob-12 tab-12 dsk-12">
                        <div className="stone mob-4 tab-4 dsk-4">
                            <img className="imgstone" src="imgzodiacs/pierres/hématite.jpeg" alt=""/>
                            <h2 className="title2">Hématite</h2>
                        </div>
                        <div className="planet mob-4 tab-4 dsk-4">
                            <img className="imgplanet" src="imgzodiacs/planets/mars.jpg" alt=""/>
                            <h2 className="title2">Mars</h2>
                        </div>
                        <div className="element mob-4 tab-4 dsk-4">
                            <img className="imgelement" src="imgzodiacs/elements/phoenix.jpg" alt=""/>
                            <h2 className="title2">Feu</h2>
                        </div>
                    </div>

                        <hr />

                    <div className="about mob-12 tab-12 dsk-12">
                        <h3 className="sign mob-offset-1 mob-3 tab-offset-3 tab-6 dsk-offset-5 dsk-2">Bélier</h3>
                        <p className="mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">* Vous êtes une personne dynamique qui a sans cesse besoin de bouger. De nature impétueuse, vous avancez tambour battant, sans même vous retourner… mais vous faites rapidement machine arrière dès qu’un obstacle se présente et vous préférez tenter votre chance ailleurs. Indépendant et impulsif, vous avez bien du mal à contrôler vos emportements.Vous êtes une personne entière et passionnée qui adore être conquise mais qui préfère conquérir !</p>
                        <h3 className="planet2 mob-offset-1 mob-6 tab-offset-3 tab-6 dsk-offset-5 dsk-2">Votre planète</h3>
                        <p className=" mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">* Votre planète est Mars !
                            Mars vit dans l’instant, il expérimente ! 
                            Il adore la confrontation avec le monde, il se cogne souvent contre un mur, une chaise, ses gestes sont rapides, brusques, emportés. 
                            C’est un être direct, spontané qui n’a pas sa langue dans sa poche. 
                            Il sait très vite ce qu’il veut et il démarre au quart de tour, quitte à piquer une grosse colère si on se frotte à lui d’un peu trop près.</p>
                        <h3 className="stone2 mob-offset-1 mob-9 tab-offset-3 tab-6 dsk-offset-5 dsk-2">Votre pierre zodiacal</h3>
                        <p className=" mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">* De tempérament impulsif et sanguin, le signe du bélier est représenté par l’Hématite, encore appelée « pierre de sang » car celle-ci prend la couleur rouge lorsqu’elle est réduite en poudre. En effet, broyée finement puis mélangée à de l’eau, l’Hématite peut servir de pigment rouge, notamment utilisée dans l’art rupestre par nos ancêtres Homo Sapiens.
                                Il est d’ailleurs fortement conseillé de la préserver de l’humidité vos bijoux sertis d’Hématites, sous peine de les voir rougir. Cette pierre fascinante qui peut passer de la couleur gris acier au rouge sang nous rappelle le caractère imprévisible des natifs de ce signe. Créatif et plein d'imagination, le bélier est aussi influencé par la planète Mars, planète sur laquelle on aurait trouvé de l’Hématite ! .</p>
                        <h3 className="element2 mob-offset-1 mob-9 tab-offset-3 tab-6 dsk-offset-5 dsk-2">Votre élèment zodiacal</h3>        
                        <p className=" mob-offset-1 mob-10 tab-offset-1 tab-10 dsk-offset-1 dsk-10">* Les signes de Feu sont enthousiastes et francs. Cet élément donne aux natifs une fougue et une passion qui peut parfois devenir colère, violence, voire agressivité. Il convient donc de savoir maîtriser le feu, qui s'il est incontrôlable, peut devenir dangereux, mais donne aussi à ces signes, courage, volonté, ambition confiance en soi et désir de conquête. Comme le feu est l'élément de la purification, cette conquête peut aussi être une quête spirituelle, une élévation de l'âme.</p>
                    </div>
                </div>
            </div>
        )
    }
};


export default Identity;


// const ident = {
//     background: 'mettre l API de la nasa',

//     front:{
//         armor: 'armorbélier',
//         police: 'mettre la police d écriture des constellations'
//     },
//     bandoattrib:{
//         imgstone: 'hématite',
//         imgplanet: 'mars',
//         imgelement: 'phoenix',
//     },
//     sign:{
//         name:'Bélier',
//         text:'* Vous êtes une personne dynamique qui a sans cesse besoin de bouger. De nature impétueuse, vous avancez tambour battant, sans même vous retourner… mais vous faites rapidement machine arrière dès qu’un obstacle se présente et vous préférez tenter votre chance ailleurs. Indépendant et impulsif, vous avez bien du mal à contrôler vos emportements.Vous êtes une personne entière et passionnée qui adore être conquise mais qui préfère conquérir !'
//     },
//     planet:{
//         name:'Votre Planète',
//         text:'* Votre planète est Mars ! Mars vit dans l’instant, il expérimente ! Il adore la confrontation avec le monde, il se cogne souvent contre un mur, une chaise, ses gestes sont rapides, brusques, emportés. C’est un être direct, spontané qui n’a pas sa langue dans sa poche. Il sait très vite ce qu’il veut et il démarre au quart de tour, quitte à piquer une grosse colère si on se frotte à lui d’un peu trop près.'
//     },
//     stone: {
//         name:'Votre pierre zodiacal',
//         text:'* De tempérament impulsif et sanguin, le signe du bélier est représenté par l’Hématite, encore appelée « pierre de sang » car celle-ci prend la couleur rouge lorsqu’elle est réduite en poudre. En effet, broyée finement puis mélangée à de l’eau, l’Hématite peut servir de pigment rouge, notamment utilisée dans l’art rupestre par nos ancêtres Homo Sapiens. Il est d’ailleurs fortement conseillé de la préserver de l’humidité vos bijoux sertis d’Hématites, sous peine de les voir rougir. Cette pierre fascinante qui peut passer de la couleur gris acier au rouge sang nous rappelle le caractère imprévisible des natifs de ce signe. Créatif et plein d imagination, le bélier est aussi influencé par la planète Mars, planète sur laquelle on aurait trouvé de l’Hématite ! .'
//     },
//     element: {
//         name: 'Votre élèment zodiacal',
//         text: '* Les signes de Feu sont enthousiastes et francs. Cet élément donne aux natifs une fougue et une passion qui peut parfois devenir colère, violence, voire agressivité. Il convient donc de savoir maîtriser le feu, qui si il est incontrôlable, peut devenir dangereux, mais donne aussi à ces signes, courage, volonté, ambition confiance en soi et désir de conquête. Comme le feu est l élément de la purification, cette conquête peut aussi être une quête spirituelle, une élévation de l âme.'
//     },
// }