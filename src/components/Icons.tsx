import Image from 'next/image';
import logoImage from '../assets/logo.png';

export function ThaiyalLogo({ className }: { className?: string }) {
  return <Image src={logoImage} alt="Thaiyal India" className={className} />;
}
