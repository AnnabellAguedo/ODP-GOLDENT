import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const VideoPlayerModal = ({ videoUrl, onClose }) => {
  const isOpen = !!videoUrl;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-black border-gold/20 p-0 w-full max-w-3xl aspect-video overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 z-50 text-white bg-black/50 rounded-full p-1 hover:bg-black/80 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        {isOpen && (
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0
                }
              }
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerModal;