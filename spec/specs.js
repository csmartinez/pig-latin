describe('pigLatin', function() {
  it('ends with -ay if word begins with a  vowel', function() {
    expect(pigLatin('apple')).to.equal('appleay');
  });
  it('returns the starting consonants to the end and adds ay to the end', function() {
    expect(pigLatin('tie')).to.equal('ietay');
  });
});
