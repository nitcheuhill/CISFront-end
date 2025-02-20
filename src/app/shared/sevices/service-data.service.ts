import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  private infoservices = [
    {
      title: 'Climatisation, Ventilation, Désenfumage',
      icon: '/icons/Calque_1 (1).png',
      introText: `
       Notre expertise en CVCD assure un confort optimal, sain et sécurisé grâce à des solutions adaptées,
        conformes aux normes de confort thermique et de qualité de l’air..
      `,
      imageUrl: '/images/worker-testing-condenser-blower-fan.webp',
      subServices: [
        {
          title: 'Conditionnement d’air résidentiel et commercial',
          description1: [
            `Nous proposons des solutions fiables et innovantes, allant de la conception à l'installation, en passant par la maintenance. Nous nous appuyions sur une expertise technique solide et 
            une équipe qualifiée pour garantir un confort thermique optimal et une efficacité énergétique adaptée aux besoins de nos clients`,
            `•	Études techniques personnalisées : Analyse des besoins spécifiques et conception de solutions sur mesure pour chaque projet.`,
          ],
          description: [
            `•	Installation de systèmes performants : Mise en place d'équipements modernes et efficaces pour garantir un confort thermique optimal.`,
            `•	Maintenance et entretien : Services de maintenance préventive et corrective pour assurer la durabilité et le bon fonctionnement des installations.`,
            `CIS Cameroun s'appuie sur une équipe d'experts qualifiés et un savoir-faire éprouvé pour répondre aux besoins variés des clients, qu’il s’agisse de logements, de bureaux ou de commerces.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block1/thumbnail.jpeg',
            url: 'images/vidéos/Video.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block1/Frame 94 (1).png',
              alt: 'Image 1',
            },
            {
              src: 'images/assetsDétailsServices/Block1/Frame 95 (1).png',
              alt: 'Image 2',
            },
            {
              src: 'images/assetsDétailsServices/Block1/Frame 92 (1).png',
              alt: 'Image 3',
            },
            {
              src: 'images/assetsDétailsServices/Block1/Frame 95 (1).png',
              alt: 'Image 2',
            },
            {
              src: 'images/assetsDétailsServices/Block1/Frame 92 (1).png',
              alt: 'Image 3',
            },
          ],
        },
        {
          title: 'Conditionnement d’air des centres de données (data center)',
          description1: [
            `Nous excellons dans le conditionnement d'air des data centers, offrant des solutions sur mesure pour garantir un refroidissement précis, une régulation optimale de
             l'humidité et une performance continue. Grâce à notre expertise technique avancée, nous assurons la fiabilité,
              l'efficacité énergétique et la protection des infrastructures critiques des data centers.`,
            `Ses compétences incluent :`,
            `•	Étude et conception sur mesure : Analyse approfondie des besoins en refroidissement pour garantir la stabilité thermique des serveurs et équipements.`,
          ],
          description: [
            `•	Installation de systèmes de haute précision : Mise en place de solutions avancées (comme les systèmes de refroidissement par allées confinées ou à débit variable) pour un contrôle thermique efficace.`,
            `•	Maintenance proactive : Services de maintenance préventive et corrective pour garantir une disponibilité continue et éviter tout risque de panne critique.`,
            `Grâce à notre expertise technique et notre savoir-faire, nous assurons un refroidissement fiable, efficace et durable, indispensable à la performance des data centers.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block2/Frame 97.png',
              alt: 'Technician working on AC',
            },
            {
              src: 'images/assetsDétailsServices/Block2/Frame 99.png',
              alt: 'Close-up of AC system',
            },
            {
              src: 'images/assetsDétailsServices/Block2/Frame100.png',
              alt: 'Installed AC unit',
            },
            {
              src: 'images/assetsDétailsServices/Block2/Frame100.png',
              alt: 'Installed AC unit',
            },
          ],
        },
        {
          title: 'Refroidissement des process industriels',
          description1: [
            `Nous maîtrisons le refroidissement des procédés industriels en offrant des solutions sur mesure, garantissant un contrôle thermique précis, une efficacité énergétique optimale et une productivité accrue.`,
            `Ses compétences incluent :`,
            `•	Études techniques sur mesure : Analyse détaillée des besoins thermiques de chaque processus industriel pour concevoir des systèmes adaptés.`,
            `•	Installation de technologies avancées : Mise en place de systèmes de refroidissement (tours de refroidissement, échangeurs thermiques, chillers, etc.) assurant un contrôle précis des températures.:`,
          ],
          description: [
            `•	Maintenance et suivi : Services de maintenance régulière et préventive pour garantir la continuité opérationnelle et minimiser les risques de panne.`,
            `•	Adaptabilité à divers secteurs : Compétences couvrant différents domaines industriels, tels que l’agroalimentaire, la chimie, la production manufacturière, et plus encore.`,
            `Avec notre expertise et nos équipes qualifiées, nous garantissons des systèmes de refroidissement performants qui soutiennent la productivité, réduisent les coûts opérationnels et préservent la qualité des procédés industriels.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block2/Frame 97.png',
              alt: 'Technician working on AC',
            },
            {
              src: 'images/assetsDétailsServices/Block2/Frame 99.png',
              alt: 'Close-up of AC system',
            },
            {
              src: 'images/assetsDétailsServices/Block2/Frame100.png',
              alt: 'Installed AC unit',
            },
            {
              src: 'images/assetsDétailsServices/Block2/Frame100.png',
              alt: 'Installed AC unit',
            },
          ],
        },
      ],
    },
    {
      title: 'Energie Electrique',
      icon: '/icons/IconsServicesGrid/Calque_1 (12).png',
      introText: `
     Chez CIS Cameroun, nous proposons des solutions énergétiques fiables et durables, adaptées aux besoins industriels, commerciaux et résidentiels.
      `,
      imageUrl: '/images/portrait-firefighter-standing-front-fire-engine.jpg',
      subServices: [
        {
          title: 'Courant fort (basse, moyenne et haute tension)',
          description1: [
            `La CIS Cameroun, spécialisée en maintenance, fourniture, étude et réalisation de projets électriques, fournit des solutions fiables et adaptées, soutenant le développement énergétique et économique du pays.`,
          ],
          description: [
            `•	Installations électriques générales : Conception et mise en œuvre des réseaux électriques pour bâtiments résidentiels, tertiaires ou industriels.`,
            `•	Groupes électrogènes et onduleurs : Mise en place de solutions d’alimentation de secours pour assurer une continuité de service en cas de panne`,
            `•	Équipements industriels : Distribution d’énergie pour machines, lignes de production et éclairages spécifiques.`,
          ],
          video: {
            thumbnail: '/images/electricien.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title:
            "Traitement d'énergie électrique (stabilisation, stockage, et filtrage)",
          description1: [
            `CIS Cameroun se distingue par son expertise dans le traitement de l'énergie électrique, notamment dans les domaines de la stabilisation, 
            du stockage et du filtrage.`,
            `Grâce à des solutions adaptées, l'entreprise garantit une alimentation électrique fiable et de qualité, répondant aux besoins critiques des particuliers, des entreprises et des infrastructures.`,
          ],
          description: [
            `La stabilisation permet d'assurer une tension stable et constante, protégeant les équipements sensibles contre les fluctuations. 
            Le stockage, à travers des systèmes modernes tels que les batteries et onduleurs, garantit une alimentation continue en cas de coupures.
            Enfin, le filtrage élimine les perturbations électriques, optimisant ainsi la performance des installations.`,
            `En combinant innovation technologique et expertise locale, CIS Cameroun propose des solutions sur mesure pour relever les défis de qualité et de fiabilité énergétique.`,
          ],
          video: {
            thumbnail:
              '/images/servicedetailsAsset/close-up-photography-light-bulb.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title:
            "Courant faible (sécurité incendie, alarme d'intrusion, sonorisation et télécommunication)",
          description1: [
            `• Réseaux de communication : Installation de câblage structuré pour réseaux informatiques, téléphonie IP et transmission de données.`,
            `• Sécurité et surveillance : Systèmes de vidéosurveillance, alarmes incendie et anti-intrusion.`,
          ],
          description: [
            `• Domotique et automatisation : Gestion intelligente des bâtiments : contrôle des éclairages, des accès, de la ventilation ou des climatisations.`,
            `• Systèmes audiovisuels : Précâblage Voix-Données-Image & Réception TV.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/fire-alarm-switch.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: 'Energie Renouvelable',
      icon: '/icons/IconsServicesGrid/Calque_1 (13).png',
      introText: `
        Le Cameroun, riche en ressources énergétiques, peine à garantir l’accès à l’électricité, 
        surtout en zones rurales. Les énergies renouvelables, comme le solaire, l'éolien et l’hydraulique,
         offrent des solutions adaptées.
      `,
      imageUrl: '/images/energique.png',
      subServices: [
        {
          title: 'Production photovoltaïque',
          description1: [``, ``],
          description: [
            `•	Installation de centrales photovoltaïques : Conception et mise en place de systèmes photovoltaïques adaptés à toutes tailles d’installations, allant des solutions résidentielles aux grandes centrales solaires industrielles.`,
            `•	Maintenance et optimisation : Nous assurons la maintenance continue et l’optimisation des installations solaires pour garantir leur performance maximale sur le long terme.`,
            `•	Solutions de stockage d’énergie : Intégration de systèmes de stockage permettant de maximiser l’autoconsommation et d’assurer une alimentation énergétique stable.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/renouvelable.jpg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Production éolienne',
          description1: [``, ``],
          description: [
            `•	Installation de parcs éoliens adaptés aux besoins spécifiques des sites et aux conditions climatiques locales.`,
            `•	Études de faisabilité, gestion de projet et intégration des technologies éoliennes pour une production efficace.`,
            `•	Gestion des infrastructures : Mise en place de solutions de gestion optimisée des installations hydrauliques, avec un suivi en temps réel des performances et une maintenance préventive.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/aili.webp',
            url: '/images/servicedetailsAsset/ail.webp',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Énergie hydraulique, géothermique et biomasse',
          description1: [``, ``],
          description: [
            `• Valorisation des déchets organiques : Transformation de déchets agricoles, industriels et urbains en énergie via des centrales de biomasse et des unités de production de biogaz.`,
            `• Solutions de production locale d'énergie : Conception de systèmes intégrés pour la production de chaleur et d’électricité à partir de matières organiques renouvelables.`,
            `• Micro-hydraulique et petites centrales : Installation de centrales hydrauliques pour les zones rurales ou éloignées, avec une faible empreinte écologique.`,
            `• Gestion des infrastructures : Mise en place de solutions de gestion optimisée des installations hydrauliques, avec un suivi en temps réel des performances et une maintenance préventive.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/geo.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: 'Infrastructure de plomberie',
      icon: '/icons/IconsServicesGrid/Calque_1 (14).png',
      introText: `
       CIS Cameroun est une entreprise spécialisée dans la plomberie, offrant des services d'installation,
        de maintenance et de vente de matériaux 
       de qualité pour répondre aux besoins des particuliers et entreprises.
      `,
      imageUrl: '/images/servicedetailsAsset/plomberie.webp',
      subServices: [
        {
          title: "Systèmes d'installations sanitaires domestique et industriel",
          description1: [
            ``,
            `•	Réseaux d’eau potable : Installation de conduites d’eau pour une distribution optimale dans 
            les foyers, bâtiments industriels, les usines et les sites commerciaux garantissant la sécurité et la conformité aux normes sanitaires.`,
            `•	Sanitaires et équipements : Installation de salles de bain, toilettes, lavabos, baignoires, douches et équipements de haute qualité, adaptés à chaque espace.`,
          ],
          description: [
            `•	Systèmes de drainage : Mise en place de réseaux d’évacuation des eaux usées pour assurer un écoulement fluide et sans risque de blocages.`,
            `•	Récupération d'eau de pluie : Installation de systèmes pour la collecte et l’utilisation de l’eau de pluie, contribuant à une gestion durable de l’eau domestique.`,
            `•	Systèmes de traitement des eaux usées : Installation de solutions de traitement des eaux usées industrielles, telles que des stations de traitement ou des fosses septiques, pour garantir la conformité environnementale.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/toillet.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Systèmes de distribution de gaz résidentiel et collectif',
          description1: [
            ``,
            `•	Installation de réseaux de gaz résidentiel et collectif : Conception et installation de réseaux de distribution de gaz
             pour les foyers, les immeubles collectifs, les hôtels, les complexes résidentiels ou tout autre bâtiment nécessitant un approvisionnement en gaz à grande échelle.`,
            `•	Raccordement et branchement : Raccordement des équipements domestiques (chauffe-eau, cuisinières, chaudières) au réseau de gaz de manière sécurisée et optimisée.`,
            `•	Équipements de sécurité : Mise en place de dispositifs de sécurité tels que des détecteurs de fuites de gaz, des vannes d’arrêt automatiques,
             afin de garantir un environnement sûr pour les occupants.`,
          ],
          description: [
            `•	Réglage et optimisation des installations : Nous assurons un réglage optimal des systèmes de gaz pour une performance maximale et une consommation d'énergie maîtrisée.`,
            `•	Maintenance et contrôle : Nous assurons la maintenance préventive et corrective des installations de gaz collectives, en garantissant leur sécurité et leur performance à long terme.`,
            `•	Mise en conformité avec les normes : Nous veillons à ce que toutes les installations soient conformes aux normes locales et internationales en matière de sécurité et de protection de l'environnement.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/conden.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: "Systèmes de production et distribution d'air comprimé",
          description1: [
            ``,
            `• Compresseurs industriels : Installation de compresseurs d’air haute performance adaptés aux besoins spécifiques de votre entreprise, 
            qu’il s’agisse de compresseurs à vis, à piston ou à hélice.`,
            `• Systèmes de traitement de l'air : Mise en place de systèmes de filtration, de séchage et de régulation de l'air comprimé pour garantir 
            une qualité d'air optimale et éviter toute contamination des équipements sensibles.`,
            `• Systèmes de contrôle et de gestion : Intégration de technologies avancées pour le contrôle, la gestion et l’optimisation de la production d’air comprimé, 
            afin d’assurer une performance stable et une consommation d’énergie maîtrisée.`,
          ],
          description: [
            `•	Réseaux de distribution d'air comprimé : Conception et installation de réseaux de canalisations pour une distribution efficace de l’air comprimé, en prenant en compte les spécifications de chaque site (bâtiments industriels, ateliers, etc.).`,
            `•	Régulation de la pression : Installation de dispositifs de régulation de pression pour garantir un débit d’air constant et adapté à chaque zone d’utilisation.`,
            `•	Systèmes de stockage d'air comprimé : Mise en place de réservoirs de stockage pour maintenir un approvisionnement en air comprimé de manière continue, avec une gestion optimisée pour éviter toute perte de performance.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/purifier.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Systèmes de distribution des fluides industriel',
          description1: [
            ``,
            `• Conception et Installation de Systèmes de Distribution
Nous offrons des solutions clés en main pour la conception et l’installation de réseaux de distribution des fluides industriels (eau, gaz, air comprimé, huiles, etc.).
`,
             ],
          description: [
            `• Maintenance Préventive et Corrective
            Nous intervenons sur l’ensemble des équipements, qu’il s’agisse de pompes, vannes, tuyauteries ou de compresseurs, pour éviter les pannes imprévues et minimiser les coûts opérationnels.
            `,
                
            `•	Gestion de la Performance des Réseaux
Grâce à des technologies de pointe, nous optimisons le débit, la pression et l’efficience énergétique, permettant à nos clients de réduire leur consommation d’énergie et de garantir la fiabilité de leurs installations industrielles.
`,
            `•	Etudes et Audits Techniques
Nos experts réalisent des études et audits techniques approfondis pour analyser et optimiser les systèmes existants. 
`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/mainten.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: "Production d'énergie électrique",
      icon: '/icons/IconsServicesGrid/Calque_1 (15).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService1.png',
      subServices: [
        {
          title: 'Groupe électrogène à combustion (essence, gasoil et gaz)',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: "Infrastructure de lutte contre l'incendie",
      icon: '/icons/IconsServicesGrid/Calque_1 (16).png',
      introText: `
       Nous sommes spécialisés dans l’installation, la maintenance et la gestion d’infrastructures de lutte contre l’incendie,
        garantissant ainsi une protection maximale pour vos bâtiments, 
        vos employés et vos équipements.
      `,
      imageUrl: '/images/servicedetailsAsset/33.jpg',
      subServices: [
        {
          title: 'Désenfumage',
          description1: [
            ``,
            `•	Conception et étude de faisabilité : Élaboration de systèmes de désenfumage 
            personnalisés en fonction de l'architecture de vos bâtiments, pour une sécurité maximale.`,
          ],
          description: [
            `•	Installation de systèmes de désenfumage : Mise en place de dispositifs performants d'extraction de fumées et de 
            ventilation, conformes aux normes de sécurité incendie en vigueur.`,
            `•	Maintenance et contrôle : Entretien régulier des équipements de désenfumage pour garantir leur 
            bon fonctionnement et leur conformité aux normes légales.`,
            `•	Audits et diagnostics : Évaluation des installations existantes pour identifier les améliorations possibles et optimiser l’efficacité des systèmes de désenfumage. Plaques polycarbonates)`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/desenfumage.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Auto-extinction de feu',
          description1: [
            ``,
            `•	Installation de dispositifs d'auto-extinction : Mise en place de systèmes innovants comme les extincteurs 
            automatiques à eau, les systèmes à mousse, ou les dispositifs à gaz, pour contrôler les risques d’incendie sans intervention humaine.`,
          ],
          description: [
            `•	Maintenance et contrôle : Entretien régulier des systèmes d’auto-extinction pour assurer leur efficacité et leur conformité avec les normes de sécurité en vigueur.`,
            `•	Audit et évaluation des risques : Analyse des installations pour recommander des solutions d’auto-extinction adaptées, afin de minimiser les risques d'incendie dans les zones sensibles.`,
            `•	Formation et sensibilisation : Formation du personnel à l'utilisation et à l'entretien des systèmes d'auto-extinction, ainsi qu'à la gestion des risques incendie.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/auto.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Extinction manuelle de feu',
          description1: [
            ``,
            `•	Fourniture et installation de matériels d'extinction manuelle : Nous installons une gamme complète d’équipements d'extinction, tels que des extincteurs, des boyaux et des systèmes 
            d'alarme, pour permettre une réponse rapide en cas d'incendie.`,
          ],
          description: [
            `•	Maintenance et vérification : Entretien et contrôle réguliers de vos équipements d'extinction pour garantir leur
             bon fonctionnement et leur conformité avec les normes de sécurité incendie.`,
            ``,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/extin.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: 'Équipement mécanique de transport et de levage',
      icon: '/icons/IconsServicesGrid/Calque_1 (19).png',
      introText: `
       Spécialistes en équipements mécaniques et de transport, nous offrons des solutions sur mesure : 
       fourniture, installation et maintenance. Fiabilité, performance et service réactif sont au cœur 
       de notre engagement.
      `,
      imageUrl: 'images/portrait-firefighter-standing-front-fire-engine.jpg',
      subServices: [
        {
          title: 'Ascenseur',
          description1: [
            ``,
            `•	Fourniture d’équipements : Sélection et livraison d'ascenseurs adaptés à vos besoins.`,
            `•	Installation professionnelle : Mise en place d'ascenseurs dans le respect des normes de sécurité et de qualité.`,
          ],
          description: [
            `•	Maintenance et réparation : Entretien régulier, interventions rapides et solutions pour maximiser la durabilité et la performance de vos équipements.`,
            `•	Conformité réglementaire : Expertise en normes de sécurité pour garantir des installations fiables et certifiées.`,
            `•	Service client réactif : Accompagnement personnalisé et disponibilité pour répondre à vos attentes.`,
          ],
          video: {
            thumbnail: '/images/servicedetailsAsset/ascenseur-maison-privatif.webp',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Monte-charge',
          description1: [
            ``,
            `•	Fourniture de monte-charges : Sélection et proposition de solutions
             robustes et adaptées aux besoins spécifiques de chaque client.`,
          ],
          description: [
            `•	Installation sur mesure : Mise en place de monte-charges, 
            optimisés pour une utilisation sûre et efficace, dans le respect des normes en vigueur.`,
            `•	Maintenance préventive et corrective : Entretien régulier et interventions rapides pour
             garantir la fiabilité et la longévité de vos équipements.`,
            `•	Service après-vente performant : Assistance réactive et suivi 
            rigoureux pour minimiser les interruptions et maximiser la performance des équipements.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: "Production et traitement de l'eau",
      icon: '/icons/IconsServicesGrid/Calque_1 (17).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus..
      `,
      imageUrl: 'images/portrait-firefighter-standing-front-fire-engine.jpg',
      subServices: [
        {
          title: 'Captage, pompage, filtrage et stockage',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Epuration et dépollution',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    {
      title: 'Equipements spécifiques',
      icon: '/icons/IconsServicesGrid/Calque_1 (18).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. .
      `,
      imageUrl: 'images/portrait-firefighter-standing-front-fire-engine.jpg',
      subServices: [
        {
          title: 'Systèmes de conservation par le froid',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Systèmes de production de la vapeur',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
        {
          title: 'Systèmes de production, traitement et  stockage d’eau chaude',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            {
              src: 'images/assetsDétailsServices/Block3/Frame 101.png',
              alt: 'Power grid',
            },
            {
              src: 'images/assetsDétailsServices/Block3/Frame 102.png',
              alt: 'Electric system',
            },
          ],
        },
      ],
    },
    // Ajoutez ici les autres services et sous-services
  ];

  // this.services
  getServices() {
    return this.infoservices;
  }
}
