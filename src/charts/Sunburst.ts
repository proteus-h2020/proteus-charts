import Chart from './Chart';
import SvgStrategySunburst from '../svg/strategies/SvgStrategySunburst';
import { defaults } from '../utils/defaults/sunburst';

class Sunburst extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategySunburst,
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let datumType = datum.constructor,
            pause: boolean = this.config.get('pause');

        if (datumType === Array) {
            if (this.data) {
                this.data = this.data.concat(datum);
            } else {
                this.data = datum;
            }
        } else {
            this.data.push(datum);
        }

        this.streamDrawing();

        if (pause) {
            this.pauseDrawing();
        } else {
            this.resumeDrawing();
        }

    }
}

export default Sunburst;
