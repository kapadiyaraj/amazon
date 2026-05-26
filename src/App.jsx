// import Navbar from "./components/Navbar/Navbar";
// import MovieRow from "./components/MovieRow/MovieRow";
// import Footer from "./components/Footer/Footer";



import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSlider/HeroSlider";
// import MovieRow from "./components/Trending/TrendingSlider";

import "./App.css";

// ડેટા ઇમ્પોર્ટ કરો
import { moviesFromAsia, topKoreanShows,trendingData,plotTwistShows} from './data/mediaData';
import MediaSlider from './components/MediaSlider';
import Footer from "./components/Footer";
export default function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      {/* <MovieRow /> */}

    <div style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh', 
      color: '#ffffff',
      paddingBottom: '50px' 
    }}>
      
      {/* સેક્શન ૧: Trending on Amazon MXPlayer */}
      <MediaSlider 
        sectionTitle="Trending on Amazon MXPlayer" 
        dataList={trendingData} 
      />

      {/* સેક્શન ૨: Movies From Asia */}
      <MediaSlider 
        sectionTitle="Movies From Asia" 
        dataList={moviesFromAsia} 
      />

      {/* સેક્શન ૩: Top Korean Shows */}
      <MediaSlider 
        sectionTitle="Top Korean Shows" 
        dataList={topKoreanShows} 
      />

      {/* સેક્શન ૪: Plot Twist */}
      <MediaSlider 
        sectionTitle="Plot Twist" 
        dataList={plotTwistShows} 
      />

    </div>
      <Footer />
    </div>
  );
}