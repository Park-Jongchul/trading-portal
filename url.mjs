export function normalizeServerUrl(value) {
  let url;
  try { url = new URL(value.trim()); } catch { throw new Error('https://로 시작하는 PC 보안 접속 주소를 입력하세요.'); }
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.search || url.hash || url.pathname !== '/') {
    throw new Error('발급된 HTTPS 기본 주소만 입력하세요. 비밀번호나 추가 경로는 입력하지 마세요.');
  }
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.ts\.net$/i.test(url.hostname)) {
    throw new Error('Tailscale에서 발급된 …ts.net 주소를 입력하세요.');
  }
  return url.origin + '/';
}
