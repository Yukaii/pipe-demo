import {Command, flags} from '@oclif/command'
import readPipe from '../read-stdin-stream'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ pipe-demo hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    this.parse(Hello)

    const str = await readPipe()

    if (str) {
      process.stdout.write(str)
    } else {
      process.stdout.write('Nothing piped in!')
      process.exit(0)
    }
  }
}
