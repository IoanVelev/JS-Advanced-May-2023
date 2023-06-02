const { expect } = require('chai');
const rgbToHexColor = require('./RgbToHex');
describe('rgbToHex convert', () => {
    it('converts into black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('converts into white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('converts into blue', () => {
        expect(rgbToHexColor(1,100,200)).to.equal('#0164C8');
    });
    it('returns undefined due to missing param', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('returns undefined due to given out of lower range param', () => {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });
    it('returns undefined due to given out of upper range param', () => {
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
    it('returns undefined due to given floating point param', () => {
        expect(rgbToHexColor(1.1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,1.1)).to.be.undefined;
    });
    it('returns undefined due to given string param', () => {
        expect(rgbToHexColor('1',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'1',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'1')).to.be.undefined;
    });
})