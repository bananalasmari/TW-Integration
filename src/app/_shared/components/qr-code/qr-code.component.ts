import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
  standalone: true

})
export class QrCodeComponent implements AfterViewInit, OnChanges {

  @Input() qrData: string = '';
  qrCode: QRCodeStyling;

  constructor() {
    this.qrCode = new QRCodeStyling({
      width: 150,
      height: 150,
      dotsOptions: { color: '#000', type: 'rounded' },
      backgroundOptions: { color: '#fff' },
      imageOptions: { crossOrigin: 'anonymous', margin: 5 },
    });
  }

  ngAfterViewInit(): void {
    this.updateQRCode();
    this.qrCode.append(document.getElementById('qr-code')!);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['qrData'] || changes['logo']) {
      this.updateQRCode();
    }
  }

  private updateQRCode(): void {
    this.qrCode.update({
      data: this.qrData,
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALzSURBVHgBtVZLTxNRFP6m7bTIow9QBGzpwAJfILXRhY/QgjuMpsYFK8WyNmn8Awo/wLgiwZhIUWNYGIMhIdEYqIlxZWp5rAiGaatBIIXpw8ahNOO9l7apJtBpgG8yM/fcO/f7zjlzz83lUIRoNOpWOE7APsEpimiz2QIFmz6WV1aEKp6fMVZXC1qtFvtFNptFOp0WZVnubmxsFJlIbGNjudZiEXDAiMViYjKZPK+JRCKeGhIBDgHVhJfneY+G4zgHaeAwYDAYoCiKoClnkigl0DryFGIiXs40qBYJ/VqD85kfdpMJPW/GyxJSJTL08Qucwy8gyTKzxYSE1lcjGAp+VjMdur0GpbQM5+OXEFMSoFdYXzhOI+CgkGuQiIyJcwjeGICZr0BZkTx4HUCtbxjv5pYQ3iCkHFcYW86licvdYiqOiZ+LaH0/DG9oUr3IRPA7iWKLtZn/irJDSV732ttzNgpiFGI6jlBiTb2I+5QVSnEHc1uBYDZhtLcX/Wc7CkPF3wlHTFAt4miuB1esoOy8p+/0QST/5InrGsykBv6Hp6ENqkX6r54p8nTH135HO4tkbH6BCfg6L+R8yLlDUuiqs6sXMVca4D5pzccB85EKPOq5jNDqOouEwnfuIuw1JkZOv3EdtUOoLCNdFA9vXiq0fVecpNrj8E5OMdv7YQqBH2H4u66zSGisg6e7dqPavU7cbVaIMSNr0+1k6Pk4qRUSVZUen1YjGFuaIyutA/YqIzwn2sqvkzyEOiNJlQH+rwugiaNpmV1bz41yGF2cp4tuT4GSIhTT9/vYP8kvAUn+g3x1WPQVeNt9uxRFaRFH0zF8892FS2j+p9/dZEPwlheO2uOlKPbeu/IQLEbMDPQhEI5idn0VnQ31cFuboRY6cnAQt7e3odOV1nPbbexWC8pL+TXZTGbidzot4RCQSqVEXqsNMIMehRLJ5GYmk1EOAuS0okiStEl5KX9hi6LHIj6b9fB6fSf2iczW1ixx2N/S0sIy9BfZolRZTLHPzgAAAABJRU5ErkJggg==',
    });
  }
}
