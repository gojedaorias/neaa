import { BenefitsItem } from "./components/BenefitsItem"
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { BenefitsContainer, BenefitsItemContainer, BenefitsTitle } from "./styles"


export const Benefits = () => {
    return (
        <BenefitsContainer>
            <BenefitsTitle>
                Si trabajas con nosotros podras experimentar una mejora
            </BenefitsTitle>
            <BenefitsItemContainer>
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Equipo con experiencia"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Mejores tiempos de ejecución"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Reducir tus costos"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />

                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Menor taza de incidencias"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Seguridad en tus procesos"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Optimizar tus recursos"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
            </BenefitsItemContainer>

        </BenefitsContainer>
    )
}
