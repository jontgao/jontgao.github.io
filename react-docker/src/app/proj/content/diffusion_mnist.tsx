import H2Subsection from "../../components/h2_subsection"
import TLDR from "../../components/tldr"
import { CaptionedImage } from "../../components/captioned_image";

export default function ContentDiffusionMnist() {
    return (
        <div className="proj-content-styles">
            <TLDR key="diffusion-mnist-0" cols={[{title:"Skills",items:["Python", "PyTorch", "Matplotlib"]}, {title:"Timeline",items:["Spring 2025"]}, {title:"Team",items:["Jonathan Gao"]}]}/>
            <H2Subsection
                key="diffusion-mnist-1"
                subsectionTitle="Diffusion"
                subsectionContent={[
                    <p key="diffusion-mnist-1-0">For my Computer Vision class (CS444 at UIUC), I implemented and trained a diffusion model to generate images of numbers. This project was my first hands-on experience with diffusion models—a state-of-the-art generative approach recently popularized by systems like DALL-E and Stable Diffusion. Building the model from scratch, I deepened my understanding of both theoretical and practical aspects of modern generative AI.</p>,
                    <CaptionedImage key="diffusion-mnist-1-1" src="/proj/diffusion-mnist/thumbnail.png" caption="" />,
                    <p key="diffusion-mnist-1-2">Diffusion models operate by progressively adding noise to training images and learning to reverse this process, effectively "denoising" an image to recover or generate meaningful content. My implementation was based on the foundational work by <a href="https://arxiv.org/abs/2006.11239">Ho et. al</a>, which introduced a principled framework for training such models. We take a dataset of images (in this case, the <a href="https://www.kaggle.com/datasets/hojjatk/mnist-dataset">MNIST dataset</a> of handwritten numbers) and slowly add noise to the image. We train the diffusion model to "denoise" the noisy image to approximate the original image. After training, we input an image of complete noise to the model. Using the same process of denoising, the model effectively generates an image of a handwritten digit.</p>,
                    <p key="diffusion-mnist-1-3">Initially, I built a simple variant that denoised images corrupted with 50% random noise in a single step—this helped me validate the core data pipeline and model structure.</p>,
                    <CaptionedImage key="diffusion-mnist-1-4" src="/proj/diffusion-mnist/denoising.png" caption="Denoising images. The left column shows the original image, and the middle shows the image with 50% noise. The right column shows the model's approximation of the original image." />,
                    <p key="diffusion-mnist-1-5">After this warmup, I enhanced the model to perform iterative denoising across multiple timesteps, allowing it to transform pure noise into plausible digit images. The results after 20 epochs showcased the model's ability to gradually synthesize digit-like images from random inputs.</p>,
                    <CaptionedImage key="diffusion-mnist-1-6" src="/proj/diffusion-mnist/time_conditioned_epoch20.png" caption="The results of iteratively denoising an image." />,
                    <p key="diffusion-mnist-1-7">To further improve realism and control, I incorporated conditional generation—providing the target digit label during training and specifying it during inference. This adjustment allowed the model to generate images corresponding to specific digits on demand, dramatically increasing output quality and relevance.</p>,
                    <CaptionedImage key="diffusion-mnist-1-8" src="/proj/diffusion-mnist/class_conditioned_epoch20.png" caption="The final results of the diffusion model." />,
                    <p key="diffusion-mnist-1-9">Working on this project was deeply rewarding, as it connected course concepts to emerging real-world applications. While my implementation remains a simplified proof-of-concept (training requires a lot of expensive computing power!), it reflects key principles behind today's most advanced image generation systems.</p>,
                ]}
            />
        </div>
    )
}
