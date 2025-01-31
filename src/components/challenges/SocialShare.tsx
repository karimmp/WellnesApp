import { Share2, Facebook, Instagram } from 'lucide-react';

interface ShareProps {
  challenge: {
    id: string;
    title: string;
    description: string;
  };
}

export default function SocialShare({ challenge }: ShareProps) {
  const shareUrl = `https://wellness-app.com/challenges/${challenge.id}`;
  const shareText = `¡Me uní al reto "${challenge.title}"! ${challenge.description}`;

  const handleShare = (platform: 'facebook' | 'instagram') => {
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'instagram':
        // En un entorno real, usaríamos la API de Instagram
        alert('Compartiendo en Instagram...');
        break;
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <Share2 className="w-4 h-4 text-gray-500" />
      <button
        onClick={() => handleShare('facebook')}
        className="p-2 hover:bg-blue-50 rounded-full"
      >
        <Facebook className="w-5 h-5 text-blue-600" />
      </button>
      <button
        onClick={() => handleShare('instagram')}
        className="p-2 hover:bg-pink-50 rounded-full"
      >
        <Instagram className="w-5 h-5 text-pink-600" />
      </button>
    </div>
  );
}