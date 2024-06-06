import { useState } from 'react';

const Carousel = () => {
  const items = [
    {
      type: 'image',
      src: 'https://scontent.ftun20-1.fna.fbcdn.net/v/t39.30808-6/445427775_848539043975872_5825329595181805119_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0Ne1H61IkkMQ7kNvgGHltFC&_nc_ht=scontent.ftun20-1.fna&oh=00_AYBLeA6OL_t9IHgA0c7KFe8laAO0dDpBURElFMJBtQgy6Q&oe=6664B0A8',
      alt: 'Image 1'
    },
    {
      type: 'image',
      src: 'https://scontent.ftun20-1.fna.fbcdn.net/v/t39.30808-6/369650350_681445870685191_4369105999120000880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1dmjR7M-ZIAQ7kNvgEe9F3w&_nc_ht=scontent.ftun20-1.fna&oh=00_AYDRdYjPgqliihajEmNSHoMkhNRXceNOC_QCuX05gobnLw&oe=6664CB75',
      alt: 'Image 2'
    },
    {
      type: 'video',
      src: '"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZEN.Tunisie%2Fvideos%2F340803862369381%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true">'
    },
    {
      type: 'news',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative overflow-hidden bg-white w-full">
      <div className="width: '800px'">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'} w-full`}>
            {item.type === 'image' && (
              <img src={item.src} alt={item.alt} className="w-full h-auto" />
            )}
            {item.type === 'video' && (
              <video controls className="w-full h-auto">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {item.type === 'news' && (
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Latest News</h2>
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={prevItem} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-3 py-2 rounded-r-lg">Prev</button>
      <button onClick={nextItem} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-3 py-2 rounded-r-lg">Next</button>

      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'black', padding: '10px', overflowX: 'auto' }}>
        <marquee behavior="scroll" direction="left">
          <span style={{ marginRight: '50px' }}>Découvrez votre style avec nos recommandations personnalisées.</span>
          <span style={{ marginRight: '50px' }}> <span style={{ color: '#fdba74' }}>Dress_Up</span></span>
          <span style={{ marginRight: '50px' }}>Découvrez votre style avec nos recommandations personnalisées.</span>
          <span style={{ marginRight: '50px' }}> <span style={{ color: '#fdba74' }}>Dress_Up</span></span>
          <span style={{ marginRight: '50px' }}>Découvrez votre style avec nos recommandations personnalisées.</span>
          <span style={{ marginRight: '50px' }}> <span style={{ color: '#fdba74' }}>Dress_Up</span></span>
          <span style={{ marginRight: '50px' }}>Découvrez votre style avec nos recommandations personnalisées.</span>
          <span style={{ marginRight: '50px' }}> <span style={{ color: '#fdba74' }}>Dress_Up</span></span>
          <span style={{ marginRight: '50px' }}>Découvrez votre style avec nos recommandations personnalisées.</span>
          <span style={{ marginRight: '50px' }}> <span style={{ color: '#fdba74' }}>Dress_Up</span></span>
          <span style={{ marginRight: '50px' }}>Découvrez votre style avec nos recommandations personnalisées.</span>
          <span style={{ marginRight: '50px' }}> <span style={{ color: '#fdba74' }}>Dress_Up</span></span>
        
          {/* Ajoutez autant de nouvelles que nécessaire */}
        </marquee>
      </div>
    </div>
  );
};

export default Carousel;
