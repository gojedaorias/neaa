import { BenefitsItem } from "./components/BenefitsItem"
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { BenefitsContainer, BenefitsItemContainer, BenefitsTitle } from "./styles"


export const Benefits = () => {
    return (
        <BenefitsContainer>
            <BenefitsTitle>
                Lorem ipsum dolor sit amet eam quas malorum.
            </BenefitsTitle>
            <BenefitsItemContainer>
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Lorem Ipsum"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Lorem Ipsum"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Lorem Ipsum"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />

                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Lorem Ipsum"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Lorem Ipsum"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
                <BenefitsItem
                    icon={AutoAwesomeOutlinedIcon}
                    title="Lorem Ipsum"
                    description="Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi."
                />
            </BenefitsItemContainer>

        </BenefitsContainer>
    )
}
