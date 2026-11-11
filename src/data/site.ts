// Toutes les informations pratiques du site sont ici : les modifier à cet endroit les change partout.
export const site = {
  nom: 'Uataa',
  baseline: 'Yoga & Arts du Soin',
  enseignante: 'Aurélie',
  lieu: {
    nom: 'Centre AMA',
    rue: '9 rue du Commandant Gilbert',
    ville: 'Papeete',
    pays: 'PF',
    plan: 'https://www.google.com/maps/search/?api=1&query=9+rue+du+Commandant+Gilbert+Papeete',
    carte: 'https://www.google.com/maps?q=9+rue+du+Commandant+Gilbert,+Papeete&output=embed',
  },
  cours: { jour: 'lundi', debut: '17:30', fin: '18:45', libelle: 'Tous les lundis, de 17h30 à 18h45' },
  tarifs: [
    { nom: 'Première séance', prix: 'Offerte', xpf: 0 },
    { nom: 'Carte de 10 cours', prix: '17 185 XPF', xpf: 17185 },
    { nom: 'Trimestre', prix: '16 700 XPF', xpf: 16700 },
  ],
  whatsapp: 'https://wa.me/68987282805',
  telephone: '87 28 28 05',
  tel: 'tel:+68987282805',
  // Réservation en ligne (Cal.com) ; WhatsApp reste en secours
  cal: 'uataa/cours-de-kundalini-yoga-tahiti',
  reserverCal: 'https://cal.com/uataa/cours-de-kundalini-yoga-tahiti',
  reserverWhatsapp:
    'https://wa.me/68987282805?text=' +
    encodeURIComponent('Bonjour Aurélie, je souhaite réserver ma séance offerte de Kundalini Yoga un lundi à 17h30.'),
  facebook: 'https://www.facebook.com/profile.php?id=61587230950559',
  ecole: 'https://www.ecoledutantra.fr/',
  association: 'https://www.diwali-yoga.fr/',
  inscription: 'https://yoga.reactifpro.fr/inscription/tahiti',
};

export const menu = [
  { href: '', label: 'Accueil' },
  { href: 'kundalini-yoga/', label: 'Kundalini Yoga' },
  { href: 'planning-tarifs/', label: 'Planning et tarifs' },
  { href: 'blog/', label: 'Blog' },
  { href: 'contact/', label: 'Contact' },
];

/** Construit un lien interne qui respecte le sous-dossier de publication. */
export function lien(chemin = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${chemin}`;
}
