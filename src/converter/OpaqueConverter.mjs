import { AbstractConverter } from "@modifiedcommand/convert-base-api";

/**
 * Class OpaqueConverter
 */
class OpaqueConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, to] = this.data;

        if (!await this.output.exists(from)) {
            return [];
        }

        this.log.log(`Create opaque ${to}`);

        /*const image = await this.readImage(from);

        image.opaque();

        await this.writeImage(to, image);*/
        const image = await this.readImage(from);

        const background_image = await this.createImage(image.getWidth(), image.getHeight(), "#000000");

        background_image.composite(image, 0, 0);

        await this.writeImage(to, background_image);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            // Leaves
			["textures/blocks/azalea_leaves.png", "textures/blocks/azalea_leaves_opaque.png"],
			["textures/blocks/azalea_leaves_flowers.png", "textures/blocks/azalea_leaves_flowers_opaque.png"],
			["textures/blocks/cherry_leaves.png", "textures/blocks/cherry_leaves_opaque.png"],
            ["textures/blocks/leaves_acacia.png", "textures/blocks/leaves_acacia_opaque.png"],
            ["textures/blocks/leaves_big_oak.png", "textures/blocks/leaves_big_oak_opaque.png"],
            ["textures/blocks/leaves_birch.png", "textures/blocks/leaves_birch_opaque.png"],
            ["textures/blocks/leaves_jungle.png", "textures/blocks/leaves_jungle_opaque.png"],
            ["textures/blocks/leaves_oak.png", "textures/blocks/leaves_oak_opaque.png"],
            ["textures/blocks/leaves_spruce.png", "textures/blocks/leaves_spruce_opaque.png"],
			["textures/blocks/mangrove_leaves.png", "textures/blocks/mangrove_leaves_opaque.png"],
			["textures/blocks/orange_poplar_leaves.png", "textures/blocks/orange_poplar_leaves_opaque.png"],
			["textures/blocks/pale_oak_leaves.png", "textures/blocks/pale_oak_leaves_opaque.png"],
			["textures/blocks/red_poplar_leaves.png", "textures/blocks/red_poplar_leaves_opaque.png"],
			["textures/blocks/yellow_poplar_leaves.png", "textures/blocks/yellow_poplar_leaves_opaque.png"]
        ];
    }
}

export { OpaqueConverter };
