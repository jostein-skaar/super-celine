import { adjustForPixelRatio } from '@jostein-skaar/common-game';
import Phaser, { GameObjects } from 'phaser';

export class MainScene extends Phaser.Scene {
	width!: number;
	height!: number;
	cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
	hero!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
	healthMax = 3000;
	health = this.healthMax;
	healthBar!: GameObjects.Rectangle;
	healtBarText!: GameObjects.Text;

	constructor() {
		super('main-scene');
	}

	init(): void {
		this.width = this.game.scale.gameSize.width;
		this.height = this.game.scale.gameSize.height;

		console.log('MainScene init', this.width, this.height);
	}

	preload(): void {
		this.load.multiatlas(
			'sprites',
			`/assets/sprites@${adjustForPixelRatio(1)}.json?v={VERSJON}`,
			'/assets'
		);
	}

	create(): void {
		const healthBarContainer = this.add
			.rectangle(
				this.scale.width / 2,
				adjustForPixelRatio(26),
				adjustForPixelRatio(250),
				adjustForPixelRatio(30),
				0xffffff
			)
			.setStrokeStyle(adjustForPixelRatio(2), 0x000000)
			.setDepth(1);
		this.healthBar = this.add
			.rectangle(
				healthBarContainer.x - (healthBarContainer.width - healthBarContainer.lineWidth) / 2,
				healthBarContainer.y,
				healthBarContainer.width - healthBarContainer.lineWidth,
				healthBarContainer.height - healthBarContainer.lineWidth,
				0xff00ff
			)
			.setDepth(1)
			.setOrigin(0, 0.5);
		this.healtBarText = this.add
			.text(healthBarContainer.x, adjustForPixelRatio(16), 'energy', {
				fontSize: `${adjustForPixelRatio(24)}px`,
				color: '#000'
			})
			.setDepth(1)
			.setOrigin(0.5, 0);

		this.cursors = this.input.keyboard!.createCursorKeys();
		this.cursors.space.onDown = () => {
			this.performJump();
		};
		this.input.on('pointerdown', () => {
			this.performJump();
		});

		const groundHeight = adjustForPixelRatio(50);
		const ground = this.add.rectangle(
			this.scale.width / 2,
			this.scale.height - groundHeight / 2,
			this.scale.width,
			groundHeight,
			0x828282
		);
		this.physics.add.existing(ground, true);

		this.hero = this.physics.add.sprite(0, 0, 'sprites', 'hero-001.png');
		this.hero.setPosition(
			this.scale.width / 2,
			this.scale.height - this.hero.height / 2 - groundHeight
		);
		this.hero.setBounce(0.1);
		this.hero.setCollideWorldBounds(true);
		this.hero.anims.create({
			key: 'run',
			frames: [
				{ key: 'sprites', frame: 'hero-001.png' },
				{ key: 'sprites', frame: 'hero-002.png' }
			],
			frameRate: 8,
			repeat: -1
		});
		this.hero.anims.play('run', true);

		this.physics.add.collider(this.hero, ground);
	}

	update(): void {
		const losingHealth = 2;

		this.health -= losingHealth;
		this.drawHealthBar();

		if (this.health <= 0) {
			this.lose();
		}
	}

	private drawHealthBar() {
		const percent = Math.max(Math.min(this.health / this.healthMax, 1), 0);
		this.healthBar.setScale(percent, 1);

		if (percent < 0.2) {
			this.healthBar.setFillStyle(0xf21405);
		} else if (percent < 0.5) {
			this.healthBar.setFillStyle(0xf2de05);
		} else {
			this.healthBar.setFillStyle(0x00fa00);
		}
	}

	private performJump() {
		if (this.hero.body.onFloor()) {
			this.hero.setVelocityY(adjustForPixelRatio(-400));
		}
	}

	private lose() {
		// console.log('Game over!');
	}
}
