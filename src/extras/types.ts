export interface PickerCardProps {
  heading: string;
  description: string;
  openClick: (picker: string) => void;
  knowClick: () => void;
  borderColor: string;
}

export interface SingleColorProps {
  color: string;
  colorValue: any;
  id: string;
  deleteColor: (id: string) => void;
}

export interface IPGeolocationResponse {
  ip: string;
  isp: string;
  org: string;
  hostname: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  city: string;
  country_code: string;
  country_name: string;
  continent_code: string;
  continent_name: string;
  region: string;
  district: string;
  timezone_name: string;
  connection_type: string;
  asn_number: number;
  asn_org: string;
  asn: string;
  currency_code: string;
  currency_name: string;
  success: boolean;
  premium: boolean;
}

export interface SimpleIntroProps {
  tag?: string;
  heading: string;
  subtitle: string;
  btntext: string;
}

export type ResponseKeyValueArray = [string, any][];

export interface Root {
  message: string;
  videoUrl: string;
  videoInfo: VideoInfo;
  totalDownloadable: number;
  downloadableFormats: DownloadableFormat[];
}

export interface VideoInfo {
  title: string;
  description: string;
  totalView: string;
  channelName: string;
  hqThumbnail: HqThumbnail;
  durationInMinutes: number;
}

export interface HqThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface DownloadableFormat {
  mimeType: string;
  qualityLabel: string;
  bitrate: number;
  audioBitrate: number;
  itag: number;
  width: number;
  height: number;
  lastModified: string;
  quality: string;
  fps: number;
  projectionType: string;
  audioQuality: string;
  approxDurationMs: string;
  audioSampleRate: string;
  audioChannels: number;
  url: string;
  hasVideo: boolean;
  hasAudio: boolean;
  container: string;
  codecs: string;
  videoCodec: string;
  audioCodec: string;
  isLive: boolean;
  isHLS: boolean;
  isDashMPD: boolean;
}

