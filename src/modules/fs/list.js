import fs from 'fs';


export const list = async () => {
	try {
		const srcPath = './files';

		const isSrcExists = fs.existsSync(srcPath);

		if (!isSrcExists) {
			throw new Error('FS operation failed');
		}

		const files = await fs.promises.readdir(srcPath);
		
		for (const file of files) {
			console.log(file);
		}
	} catch (e) {
		console.error(e.message)
	};
};

list();
