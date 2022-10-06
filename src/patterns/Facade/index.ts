class VideoFile {}

class OggCompressionCodec {}

class MPEG4CompressionCodec {}

class CodecFactory {}

class BitrateReader {}

class AudioMixer {}

class VideoConverter {
  static convert(filename: string, format: string) {
    // file = new VideoFile(filename)
    // sourceCodec = (new CodecFactory).extract(file)
    // if (format == "mp4")
    //     destinationCodec = new MPEG4CompressionCodec()
    // else
    //     destinationCodec = new OggCompressionCodec()
    // buffer = BitrateReader.read(filename, sourceCodec)
    // result = BitrateReader.convert(buffer, destinationCodec)
    // result = (new AudioMixer()).fix(result)
    // return new File(result)
    return {
      save() {
        console.log(`${format} saved`);
      },
    };
  }
}

const mp4 = VideoConverter.convert('funny-cats-video.ogg', 'mp4');
mp4.save();
