const WHATSAPP_NUMBER = '918825648043';

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Thaiyal India! I'd love to turn some of my clothes into a memory keepsake. Could you help me get started?";
