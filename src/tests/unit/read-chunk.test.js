import io from '@/inout'
import empty_txt from '@/tests/fakes/empty.txt'
import sample_txt from '@/tests/fakes/sample.txt'

const firstChunk =
`The following are the graphical (non-control) characters defined by
ISO 8859-1 (1987).  Descriptions in words aren't all that helpful,
but they're the best we can do in text.  A graphics file illustrating
the character set should be available from the same archive as this
file.

Hex Description                 Hex Description

20  SPACE
21  EXCLAMATION MARK            A1  INVERTED EXCLAMATION MARK
22  QUOTATION MARK              A2  CENT SIGN
23  NUMBER SIGN                 A3  POUND SIGN
24  DOLLAR SIGN                 A4  CURRENCY SIGN
25  PERCENT SIGN                A5  YEN SIGN
26  AMPERSAND                   A6  BROKEN BAR
27  APOSTROPHE                  A7  SECTION SIGN
28  LEFT PARENTHESIS            A8  DIAERESIS
29  RIGHT PARENTHESIS           A9  COPYRIGHT SIGN
2A  ASTERISK                    AA  FEMININE ORDINAL INDICATOR
2B  PLUS SIGN                   AB  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
2C  COMMA                       AC  NOT SIGN
2D  HYPHEN-MINUS                AD  SOFT HYPHEN
2E  FULL STOP                   AE  REGISTERED SIGN
2F  SOLIDUS                     AF  OVERLINE
30  DIGIT ZERO                  B0  DEGREE SIGN
31  DIGIT ONE                   B1  PLUS-MINUS SIGN
32  DIGIT TWO                   B2  SUPERSCRIPT TWO
33  DIGIT THREE                 B3  SUPERSCRIPT THREE
34  DIGIT FOUR                  B4  ACUTE ACCENT
35  DIGIT FIVE                  B5  MICRO SIGN
36  DIGIT SIX                   B6  PILCROW SIGN
37  DIGIT SEVEN                 B7  MIDDLE DOT
38  DIGIT EIGHT                 B8  CEDILLA
39  DIGIT NINE                  B9  SUPERSCRIPT ONE
3A  COLON                       BA  MASCULINE ORDINAL INDICATOR
3B  SEMICOLON                   BB  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
3C  LESS-THAN SIGN              BC  VULGAR FRACTION ONE QUARTER
3D  EQUALS SIGN                 BD  VULGAR FRACTION ONE HALF
3E  GREATER-THAN SIGN           BE  VULGAR FRACTION THREE QUARTERS
3F  QUESTION MARK               BF  INVERTED QUESTION MARK
40  COMMERCIAL AT               C0  CAPITAL LETTER A WITH GRAVE
41  CAPITAL LETTER A            C1  CAPITAL LETTER A WITH ACUTE
42  CAPITAL LETTER B            C2  CAPITAL LETTER A WITH CIRCUMFLEX
43  CAPITAL LETTER C            C3  CAPITAL LETTER A WITH TILDE
44  CAPITAL LETTER D            C4  CAPITAL LETTER A WITH DIAERESIS
45  CAPITAL LETTER E            C5  CAPITAL LETTER A WITH RING ABOVE
46  CAPITAL LETTER F            C6  CAPITAL LETTER AE
47  CAPITAL LETTER G            C7  CAPITAL LETTER C WITH CEDILLA
48  CAPITAL LETTER H            C8  CAPITAL LETTER E WITH GRAVE
49  CAPITAL LETTER I            C9  CAPITAL LETTER E WITH ACUTE
4A  CAPITAL LETTER J            CA  CAPITAL LETTER E WITH CIRCUMFLEX
4B  CAPITAL LETTER K            CB  CAPITAL LETTER E WITH DIAERESIS
4C  CAPITAL LETTER L            CC  CAPITAL LETTER I WITH GRAVE
4D  CAPITAL LETTER M            CD  CAPITAL LETTER I WITH ACUTE
4E  CAPITAL LETTER N            CE  CAPITAL LETTER I WITH CIRCUMFLEX
4F  CAPITAL LETTER O            CF  CAPITAL LETTER I WITH DIAERESIS
50  CAPITAL LETTER P            D0  CAPITAL LETTER ETH (Icelandic)
51  CAPITAL LETTER Q            D1  CAPITAL LETTER N WITH TILDE
52  CAPITAL LETTER R            D2  CAPITAL LETTER O WITH GRAVE
53  CAPITAL LETTER S            D3  CAPITAL LETTER O WITH ACUTE
54  CAPITAL LETTER T            D4  CAPITAL LETTER O WITH CIRCUMFLEX
55  CAPITAL LETTER U            D5  CAPITAL LETTER O WITH TILDE
56  CAPITAL LETTER V            D6  CAPITAL LETTER O WITH DIAERESIS
57  CAPITAL LETTER W            D7  MULTIPLICATION SIGN
58  CAPITAL LETTER X            D8  CAPITAL LETTER O WITH STROKE
59  CAPITAL LETTER Y            D9  CAPITAL LETTER U WITH GRAVE
5A  CAPITAL LETTER Z            DA  CAPITAL LETTER U WITH ACUTE
5B  LEFT SQUARE BRACKET         DB  CAPITAL LETTER U WITH CIRCUMFLEX
5C  REVERSE SOLIDUS             DC  CAPITAL LETTER U WITH DIAERESIS
5D  RIGHT SQUARE BRACKET        DD  CAPITAL LETTER Y WITH ACUTE
5E  CIRCUMFLEX ACCENT           DE  CAPITAL LETTER THORN (Icelandic`

const secondChunk =
`)
5F  LOW LINE                    DF  SMALL LETTER SHARP S (German)
60  GRAVE ACCENT                E0  SMALL LETTER A WITH GRAVE
61  SMALL LETTER A              E1  SMALL LETTER A WITH ACUTE
62  SMALL LETTER B              E2  SMALL LETTER A WITH CIRCUMFLEX
63  SMALL LETTER C              E3  SMALL LETTER A WITH TILDE
64  SMALL LETTER D              E4  SMALL LETTER A WITH DIAERESIS
65  SMALL LETTER E              E5  SMALL LETTER A WITH RING ABOVE
66  SMALL LETTER F              E6  SMALL LETTER AE
67  SMALL LETTER G              E7  SMALL LETTER C WITH CEDILLA
68  SMALL LETTER H              E8  SMALL LETTER E WITH GRAVE
69  SMALL LETTER I              E9  SMALL LETTER E WITH ACUTE
6A  SMALL LETTER J              EA  SMALL LETTER E WITH CIRCUMFLEX
6B  SMALL LETTER K              EB  SMALL LETTER E WITH DIAERESIS
6C  SMALL LETTER L              EC  SMALL LETTER I WITH GRAVE
6D  SMALL LETTER M              ED  SMALL LETTER I WITH ACUTE
6E  SMALL LETTER N              EE  SMALL LETTER I WITH CIRCUMFLEX
6F  SMALL LETTER O              EF  SMALL LETTER I WITH DIAERESIS
70  SMALL LETTER P              F0  SMALL LETTER ETH (Icelandic)
71  SMALL LETTER Q              F1  SMALL LETTER N WITH TILDE
72  SMALL LETTER R              F2  SMALL LETTER O WITH GRAVE
73  SMALL LETTER S              F3  SMALL LETTER O WITH ACUTE
74  SMALL LETTER T              F4  SMALL LETTER O WITH CIRCUMFLEX
75  SMALL LETTER U              F5  SMALL LETTER O WITH TILDE
76  SMALL LETTER V              F6  SMALL LETTER O WITH DIAERESIS
77  SMALL LETTER W              F7  DIVISION SIGN
78  SMALL LETTER X              F8  SMALL LETTER O WITH STROKE
79  SMALL LETTER Y              F9  SMALL LETTER U WITH GRAVE
7A  SMALL LETTER Z              FA  SMALL LETTER U WITH ACUTE
7B  LEFT CURLY BRACKET          FB  SMALL LETTER U WITH CIRCUMFLEX
7C  VERTICAL LINE               FC  SMALL LETTER U WITH DIAERESIS
7D  RIGHT CURLY BRACKET         FD  SMALL LETTER Y WITH ACUTE
7E  TILDE                       FE  SMALL LETTER THORN (Icelandic)
                                FF  SMALL LETTER Y WITH DIAERESIS
`

describe('readChunk()', () => {
  describe('when the parameter is not an instance of File', () => {
    const callback = () => {
      throw 'Should not be called'
    }

    it('nothing should happen', () => expect(() => io().readChunk(callback)).not.toThrow())
  })

  describe('when read an empty file', () => {
    const callback = () => {
      throw 'Should not be called'
    }

    const file = empty_txt

    it('should not fire callback', () => expect(() => io(file).readChunk(callback)).not.toThrow())
  })

  describe('when read a non empty file', () => {
    const file = sample_txt
    const newline = /(\r\n|\n|\r)/g

    describe('when is not passed a function as callback', () => {
      it('nothing should happen', () => expect(() => io(file).readChunk()).not.toThrow())
    })

    describe('when next() called after read all chunks', () => {
      let throwedError = null

      beforeAll(done => {
        io(file).readChunk((chunk, next) => {
          next()

          if (chunk === undefined) {
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
      const chunks = []

      beforeAll(done => {
        io(file).readChunk((chunk, next) => {
          chunks.push(chunk)
          done()
        })
      })

      it('should read only the first chunk', () => expect(chunks.length).toEqual(1))

      it('should read the first chunk content', () => {
        const actualContent = chunks[0].replace(newline, '')
        const expectedContent = firstChunk.replace(newline, '')

        expect(actualContent).toEqual(expectedContent)
      })
    })

    describe('when next() is called', () => {
      const chunks = []

      beforeAll(done => {
        io(file).readChunk((chunk, next) => {
          if (chunk === undefined) {
            done()
          } else {
            chunks.push(chunk)
            next()
          }
        })
      })

      it('should read all chunks', () => expect(chunks.length).toEqual(2))

      it('should read all file content', () => {
        const actualContent = chunks.join('').replace(newline, '')
        const expectedContent = firstChunk.concat(secondChunk).replace(newline, '')

        expect(actualContent).toEqual(expectedContent)
      })

      it('should read all lines', () => {
        const actualLines = chunks.join('').split(newline).length
        const expectedLines = firstChunk.concat(secondChunk).split(newline).length

        expect(actualLines).toEqual(expectedLines)
      })
    })
  })
})
