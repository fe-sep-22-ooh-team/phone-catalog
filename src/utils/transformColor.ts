export const transformColor = (color: string) => {
  switch (color) {
    case 'green': return '#BCE7D4';
    case 'yellow': return '#FFE88A';
    case 'purple': return '#D4D1DC';
    case 'red': return '#970013';
    case 'midnightgreen': return '#2E3933';
    case 'spacegray': return '#302E2F';
    case 'silver': return '#E3E3DB';
    case 'gold': return '#D4AF37';
    case 'black': return '#1E201F';
    case 'white': return '#F7F7F7';
    case 'coral': return '#F9614C';
    case 'starlight': return '#F8F9EC';
    case 'deep-purple': return '#570861';
    case 'space-black': return '#333334';
    case 'midnight': return '#000E34';
    case 'blue': return '#8DB6CD';
    case 'rosegold': return '#E0BFB8';
    default: return '#fff';
  }
};
