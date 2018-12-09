import io from '@/inout'
import fixture from '@/tests/fixtures'

describe('readLine()', () => {
  let file

  describe('when the parameter is not an instance of File', () => {
    const callback = () => {
      throw 'Should not be called'
    }

    it('should not to try read the file', () => expect(() => io().readLine(callback)).not.toThrow())
  })

  describe('when read an empty file', () => {
    const callback = () => {
      throw 'Should not be called'
    }

    beforeAll(done => {
      file = fixture('empty.txt')
      done()
    })

    it('should not fire callback', () => expect(() => io(file).readLine(callback)).not.toThrow())
  })

  describe('when read a non empty file', () => {
    beforeAll(done => {
      file = fixture('starwars.txt')
      done()
    })

    describe('when is not passed a function as callback to method next()', () => {
      it('nothing should happen', () => expect(() => io(file).readLine()).not.toThrow())
    })

    describe('when next() called after read all file', () => {
      let throwedError = null

      beforeAll(done => {
        io(file).readLine((line, next) => {
          next()

          if (line === undefined) {
            try {
              next()
            } catch (error) {
              throwedError = error
            }

            done()
          }
        })
      })

      it('nothing should happen', () => expect(throwedError).toBeNull())
    })

    describe('when next() is not called', () => {
      const lines = []

      beforeAll(done => {
        io(file).readLine((line, next) => {
          lines.push(line)
          done()
        })
      })

      it('should read only the first line', () => expect(lines.length).toEqual(1))

      it('should read the first line content', () => expect(lines[0]).toEqual('Great leaders inspire greatness in others.'))
    })

    describe('when next() is called', () => {
      const lines = []

      beforeAll(done => {
        io(file).readLine((line, next) => {
          if (line === undefined) {
            done()
          } else {
            lines.push(line)
            next()
          }
        })
      })

      it('should read all lines', () => expect(lines.length).toEqual(121))

      it('should read line by line', () => {
        expect(lines).toEqual([
          'Great leaders inspire greatness in others.',
          'Belief is not a matter of choice, but of conviction.',
          'Easy is the path to wisdom for those not blinded by ego.',
          'A plan is only as good as those who see it through.',
          'The best confidence builder is experience.',
          'Trust in your friends, and they’ll have reason to trust in you.',
          'You hold onto friends by keeping your heart a little softer than your head.',
          'Heroes are made by the times.',
          'Ignore your instincts at your peril.',
          'Most powerful is he who controls his own power.',
          'The winding path to peace is always a worthy one, regardless of how many turns it takes.',
          'Fail with honor rather than succeed by fraud.',
          'Greed and fear of loss are the roots that lead to the tree of evil.',
          'When surrounded by war, one must eventually choose a side.',
          'Arrogance diminishes wisdom.',
          'Truth enlightens the mind, but won’t always bring happiness to your heart.',
          'Fear is a disease; hope is its only cure.',
          'A single chance is a galaxy of hope.',
          'It is a rough road that leads to the heights of greatness.',
          'The costs of war can never be truly accounted for.',
          'Compromise is a virtue to be cultivated, not a weakness to be despised.',
          'A secret shared is a trust formed.',
          'A lesson learned is a lesson earned.',
          'Overconfidence is the most dangerous form of carelessness.',
          'The first step to correcting a mistake is patience.',
          'A true heart should never be doubted.',
          'Believe in yourself or no one else will.',
          'No gift is more precious than trust.',
          'Sometimes, accepting help is harder than offering it.',
          'Attachment is not compassion.',
          'For everything you gain, you lose something else.',
          'It is the quest for honor that makes one honorable.',
          'Easy isn’t always simple.',
          'If you ignore the past, you jeopardize the future.',
          'Fear not for the future, weep not for the past.',
          'In war, truth is the first casualty.',
          'Searching for the truth is easy. Accepting the truth is hard.',
          'A wise leader knows when to follow.',
          'Courage makes heroes, but trust builds friendships.',
          'Choose what is right, not what is easy.',
          'The most dangerous beast is the beast within.',
          'Who my father was matters less than my memory of him.',
          'Adversity is a friendship’s truest test.',
          'Revenge is a confession of pain.',
          'Brothers in arms are brothers for life.',
          'Fighting a war tests a soldier’s skills, defending his home tests a soldier’s heart.',
          'Where there’s a will, there’s a way.',
          'A child stolen is a hope lost.',
          'The challenge of hope is to overcome corruption.',
          'Those who enforce the law must obey the law.',
          'The future has many paths – choose wisely.',
          'A failure in planning is a plan for failure.',
          'Love comes in all shapes and sizes.',
          'Fear is a great motivator.',
          'Truth can strike down the spectre of fear.',
          'The swiftest path to destruction is through vengeance.',
          'Evil is not born, it is taught.',
          'The path to evil may bring great power, but not loyalty.',
          'Balance is found in the one who faces his guilt.',
          'He who surrenders hope, surrenders life.',
          'He who seeks to control fate shall never find peace.',
          'Adaptation is the key to survival.',
          'Anything that can go wrong will.',
          'Without honor, victory is hollow.',
          'Without humility, courage is a dangerous game.',
          'A great student is what the teacher hopes to be.',
          'When destiny calls, the chosen have no choice.',
          'Only through fire is a strong sword forged.',
          'Crowns are inherited, kingdoms are earned.',
          'Who a person truly is cannot be seen with the eye.',
          'Understanding is honoring the truth beneath the surface.',
          'Who’s the more foolish, the fool or the fool who follows him?',
          'The first step towards loyalty is trust.',
          'The path of ignorance is guided by fear.',
          'The wise man leads, the strong man follows.',
          'Our actions define our legacy.',
          'Where we are going always reflects where we came from.',
          'Those who enslave others, inevitably become slaves themselves.',
          'Great hope can come from small sacrifices.',
          'Friendship shows us who we really are.',
          'All warfare is based on deception.',
          'Keep your friends close, but keep your enemies closer.',
          'The strong survive, the noble overcome.',
          'Trust is the greatest of gifts, but it must be earned.',
          'One must let go of the past to hold on to the future.',
          'Who we are never changes, who we think we are does.',
          'A fallen enemy may rise again, but the reconciled one is truly vanquished.',
          'The enemy of my enemy is my friend.',
          'Strength of character can defeat strength in numbers.',
          'Fear is a malleable weapon.',
          'To seek something is to believe in its possibility.',
          'Struggles often begin and end with the truth.',
          'Disobedience is a demand for change.',
          'He who faces himself, finds himself.',
          'The young are often underestimated.',
          'When we rescue others, we rescue ourselves.',
          'Choose your enemies wisely, as  they may be your last hope.',
          'Humility is the only defense against humiliation.',
          'When all seems hopeless, a true hero gives hope.',
          'A soldier’s most powerful weapon is courage.',
          'You must trust in others or success is impossible.',
          'One vision can have many interpretations.',
          'Alliances can stall true intentions.',
          'Morality separates heroes from villains.',
          'Sometimes even the smallest doubt can shake the greatest belief.',
          'Courage begins by trusting oneself.',
          'Never become desperate enough to trust the untrustworthy.',
          'Never give up hope, no matter how dark things seem.',
          'The truth about yourself is always the hardest to accept.',
          'The wise benefit from a second opinion.',
          'When in doubt, go to the source.',
          'The popular belief isn’t always the correct one.',
          'To love, is to trust. To trust is to believe.',
          'Jealousy is the path to chaos.',
          'Deceit is the weapon of greed.',
          'Without darkness there cannot be light.',
          'Wisdom is born in fools as well as wise men.',
          'What is lost is often found.',
          'Madness can sometimes be the path to truth.',
          'Death is just the beginning.',
          'Facing all that you fear will free you from yourself.'
        ])
      })
    })
  })
})
