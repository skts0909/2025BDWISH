import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          its a special day for u so as for me..even though we are so far we haven't even met kbhi bhi still ive made a special connection w u..smtg that ik is gonna last forever..
          ik everything will change even we're also gonna change w time..but your importance in my life is never going to change...everything about u is special..idk how much u trust my words 
          coz u never express anything but i mean everything i say...well ye sb to humesa bolta hu syd...turning 18 hmmmm...great,now my madam jii has officialy became an adult hehe...excitedd???
          ..best of luck Shreya for everything..for the next year..I'll always hope for your best...there'll be both highs and lows in ur life and ill be w you in both of them...thats a 
          promise and a commitment..love you...
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          WISH YOU THE HAPPIEST BIRTHDAY 
        </p>
      </motion.div>
    </div>
  );
};

export default Message;




