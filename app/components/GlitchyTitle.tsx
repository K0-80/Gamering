import React from 'react'

interface GlitchyTitleProps {
  text: string
  subtitle: string
}

export default function GlitchyTitle({ text, subtitle }: GlitchyTitleProps) {
  return (
    <div className="text-center">
      <h1 className="text-8xl font-bold text-white mb-4 glitch" data-text={text}>
        {text}
      </h1>
      <h2 className="text-5xl font-semibold text-pink-500 fade-in-out">{subtitle}</h2>
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 1s linear infinite;
        }

        @keyframes glitch {
          2%,64%{
            transform: translate(2px,0) skew(0deg);
          }
          4%,60%{
            transform: translate(-2px,0) skew(0deg);
          }
          62%{
            transform: translate(0,0) skew(5deg); 
          }
        }

        .glitch:before,
        .glitch:after{
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch:before{
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch:after{
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim{
          0% {
            clip: rect(10px, 9999px, 31px, 0);
            transform: skew(0.6deg);
          }
          5% {
            clip: rect(70px, 9999px, 71px, 0);
            transform: skew(0.95deg);
          }
          10% {
            clip: rect(74px, 9999px, 17px, 0);
            transform: skew(0.11deg);
          }
          15% {
            clip: rect(89px, 9999px, 31px, 0);
            transform: skew(0.1deg);
          }
          20% {
            clip: rect(67px, 9999px, 17px, 0);
            transform: skew(0.51deg);
          }
          25%{
            clip:rect(80px,9999px,5px,0);
            transform:skew(0.6deg);
          }
          30%{
            clip:rect(87px,9999px,29px,0);
            transform:skew(0.16deg);
          }
          35%{
            clip:rect(75px,9999px,25px,0);
            transform:skew(0.6deg);
          }
          40%{
            clip:rect(73px,9999px,33px,0);
            transform:skew(0.98deg);
          }
          45%{
            clip:rect(79px,9999px,74px,0);
            transform:skew(0.36deg);
          }
          50%{
            clip:rect(26px,9999px,22px,0);
            transform:skew(0.46deg);
          }
          55%{
            clip:rect(24px,9999px,90px,0);
            transform:skew(0.77deg);
          }
          60%{
            clip:rect(88px,9999px,85px,0);
            transform:skew(0.68deg);
          }
          65%{
            clip:rect(34px,9999px,11px,0);
            transform:skew(0.68deg);
          }
          70%{
            clip:rect(67px,9999px,47px,0);
            transform:skew(0.72deg);
          }
          75%{
            clip:rect(69px,9999px,89px,0);
            transform:skew(0.96deg);
          }
          80%{
            clip:rect(9px,9999px,44px,0);
            transform:skew(0.2deg);
          }
          85%{
            clip:rect(23px,9999px,12px,0);
            transform:skew(0.41deg);
          }
          90%{
            clip:rect(90px,9999px,78px,0);
            transform:skew(0.65deg);
          }
          95%{
            clip:rect(66px,9999px,91px,0);
            transform:skew(0.76deg);
          }
          100%{
            clip:rect(23px,9999px,44px,0);
            transform:skew(0.37deg);
          }
        }

        @keyframes glitch-anim2{
          0% {
            clip: rect(65px, 9999px, 99px, 0);
            transform: skew(0.85deg);
          }
          5% {
            clip: rect(93px, 9999px, 29px, 0);
            transform: skew(0.17deg);
          }
          10% {
            clip: rect(37px, 9999px, 3px, 0);
            transform: skew(0.7deg);
          }
          15% {
            clip: rect(73px, 9999px, 54px, 0);
            transform: skew(0.05deg);
          }
          20% {
            clip: rect(84px, 9999px, 84px, 0);
            transform: skew(0.49deg);
          }
          25% {
            clip: rect(46px, 9999px, 56px, 0);
            transform: skew(0.44deg);
          }
          30% {
            clip: rect(1px, 9999px, 35px, 0);
            transform: skew(0.03deg);
          }
          35% {
            clip: rect(11px, 9999px, 46px, 0);
            transform: skew(0.21deg);
          }
          40% {
            clip: rect(25px, 9999px, 3px, 0);
            transform: skew(0.22deg);
          }
          45% {
            clip: rect(56px, 9999px, 5px, 0);
            transform: skew(0.98deg);
          }
          50% {
            clip: rect(95px, 9999px, 33px, 0);
            transform: skew(0.09deg);
          }
          55% {
            clip: rect(23px, 9999px, 35px, 0);
            transform: skew(0.05deg);
          }
          60% {
            clip: rect(9px, 9999px, 79px, 0);
            transform: skew(0.58deg);
          }
          65% {
            clip: rect(14px, 9999px, 21px, 0);
            transform: skew(0.17deg);
          }
          70% {
            clip: rect(99px, 9999px, 33px, 0);
            transform: skew(0.6deg);
          }
          75% {
            clip: rect(91px, 9999px, 46px, 0);
            transform: skew(0.89deg);
          }
          80% {
            clip: rect(85px, 9999px, 95px, 0);
            transform: skew(0.37deg);
          }
          85% {
            clip: rect(54px, 9999px, 22px, 0);
            transform: skew(0.07deg);
          }
          90% {
            clip: rect(56px, 9999px, 72px, 0);
            transform: skew(0.98deg);
          }
          95% {
            clip: rect(39px, 9999px, 88px, 0);
            transform: skew(0.94deg);
          }
          100% {
            clip: rect(59px, 9999px, 3px, 0);
            transform: skew(0.1deg);
          }
        }

        .fade-in-out {
          animation: fadeInOut 4s ease-in-out infinite;
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}