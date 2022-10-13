/* eslint-disable @typescript-eslint/no-unsafe-return */

/**
An object of this type can be returned on every function call, in case of an error.
*/
export interface Error {
	'@type': 'error';
	/**
Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and
must not be displayed to the user.
*/
	code: number;
	/**
Error message; subject to future changes.
*/
	message: string;
}

/**
An object of this type is returned on a successful function call for certain functions.
*/
export interface Ok {
	'@type': 'ok';

}

/**
Provides information about the method by which an authentication code is delivered to the user.
Subtype of {@link AuthenticationCodeType}.
*/
export interface AuthenticationCodeTypeTelegramMessage {
	'@type': 'authenticationCodeTypeTelegramMessage';
	/**
Length of the code.
*/
	length: number;
}

/**
An authentication code is delivered via an SMS message to the specified phone number.
Subtype of {@link AuthenticationCodeType}.
*/
export interface AuthenticationCodeTypeSms {
	'@type': 'authenticationCodeTypeSms';
	/**
Length of the code.
*/
	length: number;
}

/**
An authentication code is delivered via a phone call to the specified phone number.
Subtype of {@link AuthenticationCodeType}.
*/
export interface AuthenticationCodeTypeCall {
	'@type': 'authenticationCodeTypeCall';
	/**
Length of the code.
*/
	length: number;
}

/**
An authentication code is delivered by an immediately canceled call to the specified phone number. The phone number that
calls is the code that must be entered automatically.
Subtype of {@link AuthenticationCodeType}.
*/
export interface AuthenticationCodeTypeFlashCall {
	'@type': 'authenticationCodeTypeFlashCall';
	/**
Pattern of the phone number from which the call will be made.
*/
	pattern: string;
}

/**
An authentication code is delivered by an immediately canceled call to the specified phone number. The last digits of
the phone number that calls are the code that must be entered manually by the user.
Subtype of {@link AuthenticationCodeType}.
*/
export interface AuthenticationCodeTypeMissedCall {
	'@type': 'authenticationCodeTypeMissedCall';
	/**
Prefix of the phone number from which the call will be made.
*/
	phone_number_prefix: string;
	/**
Number of digits in the code, excluding the prefix.
*/
	length: number;
}

/**
Information about the authentication code that was sent.
*/
export interface AuthenticationCodeInfo {
	'@type': 'authenticationCodeInfo';
	/**
A phone number that is being authenticated.
*/
	phone_number: string;
	/**
The way the code was sent to the user.
*/
	type: AuthenticationCodeType;
	/**
The way the next code will be sent to the user; may be null.
*/
	next_type: AuthenticationCodeType;
	/**
Timeout before the code can be re-sent, in seconds.
*/
	timeout: number;
}

/**
Information about the email address authentication code that was sent.
*/
export interface EmailAddressAuthenticationCodeInfo {
	'@type': 'emailAddressAuthenticationCodeInfo';
	/**
Pattern of the email address to which an authentication code was sent.
*/
	email_address_pattern: string;
	/**
Length of the code; 0 if unknown.
*/
	length: number;
}

/**
Contains authentication data for a email address.
Subtype of {@link EmailAddressAuthentication}.
*/
export interface EmailAddressAuthenticationCode {
	'@type': 'emailAddressAuthenticationCode';
	/**
The code.
*/
	code: string;
}

/**
An authentication token received through Apple ID.
Subtype of {@link EmailAddressAuthentication}.
*/
export interface EmailAddressAuthenticationAppleId {
	'@type': 'emailAddressAuthenticationAppleId';
	/**
The token.
*/
	token: string;
}

/**
An authentication token received through Google ID.
Subtype of {@link EmailAddressAuthentication}.
*/
export interface EmailAddressAuthenticationGoogleId {
	'@type': 'emailAddressAuthenticationGoogleId';
	/**
The token.
*/
	token: string;
}

/**
Represents a part of the text that needs to be formatted in some unusual way.
*/
export interface TextEntity {
	'@type': 'textEntity';
	/**
Offset of the entity, in UTF-16 code units.
*/
	offset: number;
	/**
Length of the entity, in UTF-16 code units.
*/
	length: number;
	/**
Type of the entity.
*/
	type: TextEntityType;
}

/**
Contains a list of text entities.
*/
export interface TextEntities {
	'@type': 'textEntities';
	/**
List of text entities.
*/
	entities: TextEntity[];
}

/**
A text with some entities.
*/
export interface FormattedText {
	'@type': 'formattedText';
	/**
The text.
*/
	text: string;
	/**
Entities contained in the text. Entities can be nested, but must not mutually intersect with each other. Pre, Code and
PreCode entities can't contain other entities. Bold, Italic, Underline, Strikethrough, and Spoiler entities can contain
and to be contained in all other entities. All other entities can't contain each other.
*/
	entities: TextEntity[];
}

/**
Contains Telegram terms of service.
*/
export interface TermsOfService {
	'@type': 'termsOfService';
	/**
Text of the terms of service.
*/
	text: FormattedText;
	/**
The minimum age of a user to be able to accept the terms; 0 if age isn't restricted.
*/
	min_user_age: number;
	/**
True, if a blocking popup with terms of service must be shown to the user.
*/
	show_popup?: boolean;
}

/**
Represents the current authorization state of the TDLib client.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitTdlibParameters {
	'@type': 'authorizationStateWaitTdlibParameters';

}

/**
TDLib needs the user's phone number to authorize. Call `setAuthenticationPhoneNumber` to provide the phone number, or
use `requestQrCodeAuthentication`, or `checkAuthenticationBotToken` for other authentication options.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitPhoneNumber {
	'@type': 'authorizationStateWaitPhoneNumber';

}

/**
TDLib needs the user's email address to authorize. Call `setAuthenticationEmailAddress` to provide the email address, or
directly call `checkAuthenticationEmailCode` with Apple ID/Google ID token if allowed.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitEmailAddress {
	'@type': 'authorizationStateWaitEmailAddress';
	/**
True, if authorization through Apple ID is allowed.
*/
	allow_apple_id?: boolean;
	/**
True, if authorization through Google ID is allowed.
*/
	allow_google_id?: boolean;
}

/**
TDLib needs the user's authentication code sent to an email address to authorize. Call `checkAuthenticationEmailCode` to
provide the code.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitEmailCode {
	'@type': 'authorizationStateWaitEmailCode';
	/**
True, if authorization through Apple ID is allowed.
*/
	allow_apple_id?: boolean;
	/**
True, if authorization through Google ID is allowed.
*/
	allow_google_id?: boolean;
	/**
Information about the sent authentication code.
*/
	code_info: EmailAddressAuthenticationCodeInfo;
	/**
Point in time (Unix timestamp) when the user will be able to authorize with a code sent to the user's phone number; 0 if
unknown.
*/
	next_phone_number_authorization_date: number;
}

/**
TDLib needs the user's authentication code to authorize.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitCode {
	'@type': 'authorizationStateWaitCode';
	/**
Information about the authorization code that was sent.
*/
	code_info: AuthenticationCodeInfo;
}

/**
The user needs to confirm authorization on another logged in device by scanning a QR code with the provided link.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitOtherDeviceConfirmation {
	'@type': 'authorizationStateWaitOtherDeviceConfirmation';
	/**
A tg:// URL for the QR code. The link will be updated frequently.
*/
	link: string;
}

/**
The user is unregistered and need to accept terms of service and enter their first name and last name to finish
registration.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitRegistration {
	'@type': 'authorizationStateWaitRegistration';
	/**
Telegram terms of service.
*/
	terms_of_service: TermsOfService;
}

/**
The user has been authorized, but needs to enter a 2-step verification password to start using the application.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateWaitPassword {
	'@type': 'authorizationStateWaitPassword';
	/**
Hint for the password; may be empty.
*/
	password_hint: string;
	/**
True, if a recovery email address has been set up.
*/
	has_recovery_email_address?: boolean;
	/**
Pattern of the email address to which the recovery email was sent; empty until a recovery email has been sent.
*/
	recovery_email_address_pattern: string;
}

/**
The user has been successfully authorized. TDLib is now ready to answer queries.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateReady {
	'@type': 'authorizationStateReady';

}

/**
The user is currently logging out.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateLoggingOut {
	'@type': 'authorizationStateLoggingOut';

}

/**
TDLib is closing, all subsequent queries will be answered with the error 500. Note that closing TDLib can take a while.
All resources will be freed only after authorizationStateClosed has been received.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateClosing {
	'@type': 'authorizationStateClosing';

}

/**
TDLib client is in its final state. All databases are closed and all resources are released. No other updates will be
received after this. All queries will be responded to with error code 500. To continue working, one must create a new
instance of the TDLib client.
Subtype of {@link AuthorizationState}.
*/
export interface AuthorizationStateClosed {
	'@type': 'authorizationStateClosed';

}

/**
Represents the current state of 2-step verification.
*/
export interface PasswordState {
	'@type': 'passwordState';
	/**
True, if a 2-step verification password is set.
*/
	has_password?: boolean;
	/**
Hint for the password; may be empty.
*/
	password_hint: string;
	/**
True, if a recovery email is set.
*/
	has_recovery_email_address?: boolean;
	/**
True, if some Telegram Passport elements were saved.
*/
	has_passport_data?: boolean;
	/**
Information about the recovery email address to which the confirmation email was sent; may be null.
*/
	recovery_email_address_code_info: EmailAddressAuthenticationCodeInfo;
	/**
Pattern of the email address set up for logging in.
*/
	login_email_address_pattern: string;
	/**
If not 0, point in time (Unix timestamp) after which the 2-step verification password can be reset immediately using
resetPassword.
*/
	pending_reset_date: number;
}

/**
Contains information about the current recovery email address.
*/
export interface RecoveryEmailAddress {
	'@type': 'recoveryEmailAddress';
	/**
Recovery email address.
*/
	recovery_email_address: string;
}

/**
Returns information about the availability of a temporary password, which can be used for payments.
*/
export interface TemporaryPasswordState {
	'@type': 'temporaryPasswordState';
	/**
True, if a temporary password is available.
*/
	has_password?: boolean;
	/**
Time left before the temporary password expires, in seconds.
*/
	valid_for: number;
}

/**
Represents a local file.
*/
export interface LocalFile {
	'@type': 'localFile';
	/**
Local path to the locally available file part; may be empty.
*/
	path: string;
	/**
True, if it is possible to download or generate the file.
*/
	can_be_downloaded?: boolean;
	/**
True, if the file can be deleted.
*/
	can_be_deleted?: boolean;
	/**
True, if the file is currently being downloaded (or a local copy is being generated by some other means).
*/
	is_downloading_active?: boolean;
	/**
True, if the local copy is fully available.
*/
	is_downloading_completed?: boolean;
	/**
Download will be started from this offset. downloaded_prefix_size is calculated from this offset.
*/
	download_offset: number;
	/**
If is_downloading_completed is false, then only some prefix of the file starting from download_offset is ready to be
read. downloaded_prefix_size is the size of that prefix in bytes.
*/
	downloaded_prefix_size: number;
	/**
Total downloaded file size, in bytes. Can be used only for calculating download progress. The actual file size may be
bigger, and some parts of it may contain garbage.
*/
	downloaded_size: number;
}

/**
Represents a remote file.
*/
export interface RemoteFile {
	'@type': 'remoteFile';
	/**
Remote file identifier; may be empty. Can be used by the current user across application restarts or even from other
devices. Uniquely identifies a file, but a file can have a lot of different valid identifiers. If the ID starts with
"http://" or "https://", it represents the HTTP URL of the file. TDLib is currently unable to download files if only
their URL is known. If downloadFile/addFileToDownloads is called on such a file or if it is sent to a secret chat, TDLib
starts a file generation process by sending updateFileGenerationStart to the application with the HTTP URL in the
original_path and "#url#" as the conversion string. Application must generate the file by downloading it to the
specified location.
*/
	id: string;
	/**
Unique file identifier; may be empty if unknown. The unique file identifier which is the same for the same file even for
different users and is persistent over time.
*/
	unique_id: string;
	/**
True, if the file is currently being uploaded (or a remote copy is being generated by some other means).
*/
	is_uploading_active?: boolean;
	/**
True, if a remote copy is fully available.
*/
	is_uploading_completed?: boolean;
	/**
Size of the remote available part of the file, in bytes; 0 if unknown.
*/
	uploaded_size: number;
}

/**
Represents a file.
*/
export interface File {
	'@type': 'file';
	/**
Unique file identifier.
*/
	id: number;
	/**
File size, in bytes; 0 if unknown.
*/
	size: number;
	/**
Approximate file size in bytes in case the exact file size is unknown. Can be used to show download/upload progress.
*/
	expected_size: number;
	/**
Information about the local copy of the file.
*/
	local: LocalFile;
	/**
Information about the remote copy of the file.
*/
	remote: RemoteFile;
}

/**
Points to a file.
Subtype of {@link InputFile}.
*/
export interface InputFileId {
	'@type': 'inputFileId';
	/**
Unique file identifier.
*/
	id: number;
}

/**
A file defined by its remote ID. The remote ID is guaranteed to be usable only if the corresponding file is still
accessible to the user and known to TDLib. For example, if the file is from a message, then the message must be not
deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must
be preloaded by the application.
Subtype of {@link InputFile}.
*/
export interface InputFileRemote {
	'@type': 'inputFileRemote';
	/**
Remote file identifier.
*/
	id: string;
}

/**
A file defined by a local path.
Subtype of {@link InputFile}.
*/
export interface InputFileLocal {
	'@type': 'inputFileLocal';
	/**
Local path to the file.
*/
	path: string;
}

/**
A file generated by the application.
Subtype of {@link InputFile}.
*/
export interface InputFileGenerated {
	'@type': 'inputFileGenerated';
	/**
Local path to a file from which the file is generated; may be empty if there is no such file.
*/
	original_path: string;
	/**
String specifying the conversion applied to the original file; must be persistent across application restarts.
Conversions beginning with '#' are reserved for internal TDLib usage.
*/
	conversion: string;
	/**
Expected size of the generated file, in bytes; 0 if unknown.
*/
	expected_size: number;
}

/**
Describes an image in JPEG format.
*/
export interface PhotoSize {
	'@type': 'photoSize';
	/**
Image type (see https://core.telegram.org/constructor/photoSize).
*/
	type: string;
	/**
Information about the image file.
*/
	photo: File;
	/**
Image width.
*/
	width: number;
	/**
Image height.
*/
	height: number;
	/**
Sizes of progressive JPEG file prefixes, which can be used to preliminarily show the image; in bytes.
*/
	progressive_sizes: number[];
}

/**
Thumbnail image of a very poor quality and low resolution.
*/
export interface Minithumbnail {
	'@type': 'minithumbnail';
	/**
Thumbnail width, usually doesn't exceed 40.
*/
	width: number;
	/**
Thumbnail height, usually doesn't exceed 40.
*/
	height: number;
	/**
The thumbnail in JPEG format.
*/
	data: string;
}

/**
Describes format of a thumbnail.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatJpeg {
	'@type': 'thumbnailFormatJpeg';

}

/**
The thumbnail is in static GIF format. It will be used only for some bot inline results.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatGif {
	'@type': 'thumbnailFormatGif';

}

/**
The thumbnail is in MPEG4 format. It will be used only for some animations and videos.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatMpeg4 {
	'@type': 'thumbnailFormatMpeg4';

}

/**
The thumbnail is in PNG format. It will be used only for background patterns.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatPng {
	'@type': 'thumbnailFormatPng';

}

/**
The thumbnail is in TGS format. It will be used only for TGS sticker sets.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatTgs {
	'@type': 'thumbnailFormatTgs';

}

/**
The thumbnail is in WEBM format. It will be used only for WEBM sticker sets.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatWebm {
	'@type': 'thumbnailFormatWebm';

}

/**
The thumbnail is in WEBP format. It will be used only for some stickers.
Subtype of {@link ThumbnailFormat}.
*/
export interface ThumbnailFormatWebp {
	'@type': 'thumbnailFormatWebp';

}

/**
Represents a thumbnail.
*/
export interface Thumbnail {
	'@type': 'thumbnail';
	/**
Thumbnail format.
*/
	format: ThumbnailFormat;
	/**
Thumbnail width.
*/
	width: number;
	/**
Thumbnail height.
*/
	height: number;
	/**
The thumbnail.
*/
	file: File;
}

/**
Part of the face, relative to which a mask is placed.
Subtype of {@link MaskPoint}.
*/
export interface MaskPointForehead {
	'@type': 'maskPointForehead';

}

/**
The mask is placed relatively to the eyes.
Subtype of {@link MaskPoint}.
*/
export interface MaskPointEyes {
	'@type': 'maskPointEyes';

}

/**
The mask is placed relatively to the mouth.
Subtype of {@link MaskPoint}.
*/
export interface MaskPointMouth {
	'@type': 'maskPointMouth';

}

/**
The mask is placed relatively to the chin.
Subtype of {@link MaskPoint}.
*/
export interface MaskPointChin {
	'@type': 'maskPointChin';

}

/**
Position on a photo where a mask is placed.
*/
export interface MaskPosition {
	'@type': 'maskPosition';
	/**
Part of the face, relative to which the mask is placed.
*/
	point: MaskPoint;
	/**
Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will
place the mask just to the left of the default mask position).
*/
	x_shift: number;
	/**
Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will
place the mask just below the default mask position).
*/
	y_shift: number;
	/**
Mask scaling coefficient. (For example, 2.0 means a doubled size).
*/
	scale: number;
}

/**
Describes format of a sticker.
Subtype of {@link StickerFormat}.
*/
export interface StickerFormatWebp {
	'@type': 'stickerFormatWebp';

}

/**
The sticker is an animation in TGS format.
Subtype of {@link StickerFormat}.
*/
export interface StickerFormatTgs {
	'@type': 'stickerFormatTgs';

}

/**
The sticker is a video in WEBM format.
Subtype of {@link StickerFormat}.
*/
export interface StickerFormatWebm {
	'@type': 'stickerFormatWebm';

}

/**
Describes type of a sticker.
Subtype of {@link StickerType}.
*/
export interface StickerTypeRegular {
	'@type': 'stickerTypeRegular';

}

/**
The sticker is a mask in WEBP format to be placed on photos or videos.
Subtype of {@link StickerType}.
*/
export interface StickerTypeMask {
	'@type': 'stickerTypeMask';

}

/**
The sticker is a custom emoji to be used inside message text and caption.
Subtype of {@link StickerType}.
*/
export interface StickerTypeCustomEmoji {
	'@type': 'stickerTypeCustomEmoji';

}

/**
Represents a closed vector path. The path begins at the end point of the last command.
*/
export interface ClosedVectorPath {
	'@type': 'closedVectorPath';
	/**
List of vector path commands.
*/
	commands: VectorPathCommand[];
}

/**
Describes one answer option of a poll.
*/
export interface PollOption {
	'@type': 'pollOption';
	/**
Option text; 1-100 characters.
*/
	text: string;
	/**
Number of voters for this option, available only for closed or voted polls.
*/
	voter_count: number;
	/**
The percentage of votes for this option; 0-100.
*/
	vote_percentage: number;
	/**
True, if the option was chosen by the user.
*/
	is_chosen?: boolean;
	/**
True, if the option is being chosen by a pending setPollAnswer request.
*/
	is_being_chosen?: boolean;
}

/**
Describes the type of a poll.
Subtype of {@link PollType}.
*/
export interface PollTypeRegular {
	'@type': 'pollTypeRegular';
	/**
True, if multiple answer options can be chosen simultaneously.
*/
	allow_multiple_answers?: boolean;
}

/**
A poll in quiz mode, which has exactly one correct answer option and can be answered only once.
Subtype of {@link PollType}.
*/
export interface PollTypeQuiz {
	'@type': 'pollTypeQuiz';
	/**
0-based identifier of the correct answer option; -1 for a yet unanswered poll.
*/
	correct_option_id: number;
	/**
Text that is shown when the user chooses an incorrect answer or taps on the lamp icon; 0-200 characters with at most 2
line feeds; empty for a yet unanswered poll.
*/
	explanation: FormattedText;
}

/**
Describes an animation file. The animation must be encoded in GIF or MPEG4 format.
*/
export interface Animation {
	'@type': 'animation';
	/**
Duration of the animation, in seconds; as defined by the sender.
*/
	duration: number;
	/**
Width of the animation.
*/
	width: number;
	/**
Height of the animation.
*/
	height: number;
	/**
Original name of the file; as defined by the sender.
*/
	file_name: string;
	/**
MIME type of the file, usually "image/gif" or "video/mp4".
*/
	mime_type: string;
	/**
True, if stickers were added to the animation. The list of corresponding sticker set can be received using
getAttachedStickerSets.
*/
	has_stickers?: boolean;
	/**
Animation minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Animation thumbnail in JPEG or MPEG4 format; may be null.
*/
	thumbnail: Thumbnail;
	/**
File containing the animation.
*/
	animation: File;
}

/**
Describes an audio file. Audio is usually in MP3 or M4A format.
*/
export interface Audio {
	'@type': 'audio';
	/**
Duration of the audio, in seconds; as defined by the sender.
*/
	duration: number;
	/**
Title of the audio; as defined by the sender.
*/
	title: string;
	/**
Performer of the audio; as defined by the sender.
*/
	performer: string;
	/**
Original name of the file; as defined by the sender.
*/
	file_name: string;
	/**
The MIME type of the file; as defined by the sender.
*/
	mime_type: string;
	/**
The minithumbnail of the album cover; may be null.
*/
	album_cover_minithumbnail: Minithumbnail;
	/**
The thumbnail of the album cover in JPEG format; as defined by the sender. The full size thumbnail is supposed to be
extracted from the downloaded audio file; may be null.
*/
	album_cover_thumbnail: Thumbnail;
	/**
Album cover variants to use if the downloaded audio file contains no album cover. Provided thumbnail dimensions are
approximate.
*/
	external_album_covers: Thumbnail[];
	/**
File containing the audio.
*/
	audio: File;
}

/**
Describes a document of any type.
*/
export interface Document {
	'@type': 'document';
	/**
Original name of the file; as defined by the sender.
*/
	file_name: string;
	/**
MIME type of the file; as defined by the sender.
*/
	mime_type: string;
	/**
Document minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns); as defined by the sender; may
be null.
*/
	thumbnail: Thumbnail;
	/**
File containing the document.
*/
	document: File;
}

/**
Describes a photo.
*/
export interface Photo {
	'@type': 'photo';
	/**
True, if stickers were added to the photo. The list of corresponding sticker sets can be received using
getAttachedStickerSets.
*/
	has_stickers?: boolean;
	/**
Photo minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Available variants of the photo, in different sizes.
*/
	sizes: PhotoSize[];
}

/**
Describes a sticker.
*/
export interface Sticker {
	'@type': 'sticker';
	/**
The identifier of the sticker set to which the sticker belongs; 0 if none.
*/
	set_id: string;
	/**
Sticker width; as defined by the sender.
*/
	width: number;
	/**
Sticker height; as defined by the sender.
*/
	height: number;
	/**
Emoji corresponding to the sticker.
*/
	emoji: string;
	/**
Sticker format.
*/
	format: StickerFormat;
	/**
Sticker type.
*/
	type: StickerType;
	/**
Position where the mask is placed; may be null even the sticker is a mask.
*/
	mask_position: MaskPosition;
	/**
Identifier of the emoji if the sticker is a custom emoji.
*/
	custom_emoji_id: string;
	/**
Sticker's outline represented as a list of closed vector paths; may be empty. The coordinate system origin is in the
upper-left corner.
*/
	outline: ClosedVectorPath[];
	/**
Sticker thumbnail in WEBP or JPEG format; may be null.
*/
	thumbnail: Thumbnail;
	/**
True, if only Premium users can use the sticker.
*/
	is_premium?: boolean;
	/**
Premium animation of the sticker; may be null.
*/
	premium_animation: File;
	/**
File containing the sticker.
*/
	sticker: File;
}

/**
Describes a video file.
*/
export interface Video {
	'@type': 'video';
	/**
Duration of the video, in seconds; as defined by the sender.
*/
	duration: number;
	/**
Video width; as defined by the sender.
*/
	width: number;
	/**
Video height; as defined by the sender.
*/
	height: number;
	/**
Original name of the file; as defined by the sender.
*/
	file_name: string;
	/**
MIME type of the file; as defined by the sender.
*/
	mime_type: string;
	/**
True, if stickers were added to the video. The list of corresponding sticker sets can be received using
getAttachedStickerSets.
*/
	has_stickers?: boolean;
	/**
True, if the video is supposed to be streamed.
*/
	supports_streaming?: boolean;
	/**
Video minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Video thumbnail in JPEG or MPEG4 format; as defined by the sender; may be null.
*/
	thumbnail: Thumbnail;
	/**
File containing the video.
*/
	video: File;
}

/**
Describes a video note. The video must be equal in width and height, cropped to a circle, and stored in MPEG4 format.
*/
export interface VideoNote {
	'@type': 'videoNote';
	/**
Duration of the video, in seconds; as defined by the sender.
*/
	duration: number;
	/**
Video width and height; as defined by the sender.
*/
	length: number;
	/**
Video minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Video thumbnail in JPEG format; as defined by the sender; may be null.
*/
	thumbnail: Thumbnail;
	/**
File containing the video.
*/
	video: File;
}

/**
Describes a voice note. The voice note must be encoded with the Opus codec, and stored inside an OGG container. Voice
notes can have only a single audio channel.
*/
export interface VoiceNote {
	'@type': 'voiceNote';
	/**
Duration of the voice note, in seconds; as defined by the sender.
*/
	duration: number;
	/**
A waveform representation of the voice note in 5-bit format.
*/
	waveform: string;
	/**
MIME type of the file; as defined by the sender.
*/
	mime_type: string;
	/**
Result of speech recognition in the voice note; may be null.
*/
	speech_recognition_result: SpeechRecognitionResult;
	/**
File containing the voice note.
*/
	voice: File;
}

/**
Describes an animated or custom representation of an emoji.
*/
export interface AnimatedEmoji {
	'@type': 'animatedEmoji';
	/**
Sticker for the emoji; may be null if yet unknown for a custom emoji. If the sticker is a custom emoji, it can have
arbitrary format different from stickerFormatTgs.
*/
	sticker: Sticker;
	/**
Expected width of the sticker, which can be used if the sticker is null.
*/
	sticker_width: number;
	/**
Expected height of the sticker, which can be used if the sticker is null.
*/
	sticker_height: number;
	/**
Emoji modifier fitzpatrick type; 0-6; 0 if none.
*/
	fitzpatrick_type: number;
	/**
File containing the sound to be played when the sticker is clicked; may be null. The sound is encoded with the Opus
codec, and stored inside an OGG container.
*/
	sound: File;
}

/**
Describes a user contact.
*/
export interface Contact {
	'@type': 'contact';
	/**
Phone number of the user.
*/
	phone_number: string;
	/**
First name of the user; 1-255 characters in length.
*/
	first_name: string;
	/**
Last name of the user.
*/
	last_name: string;
	/**
Additional data about the user in a form of vCard; 0-2048 bytes in length.
*/
	vcard: string;
	/**
Identifier of the user, if known; otherwise 0.
*/
	user_id: number;
}

/**
Describes a location on planet Earth.
*/
export interface Location {
	'@type': 'location';
	/**
Latitude of the location in degrees; as defined by the sender.
*/
	latitude: number;
	/**
Longitude of the location, in degrees; as defined by the sender.
*/
	longitude: number;
	/**
The estimated horizontal accuracy of the location, in meters; as defined by the sender. 0 if unknown.
*/
	horizontal_accuracy: number;
}

/**
Describes a venue.
*/
export interface Venue {
	'@type': 'venue';
	/**
Venue location; as defined by the sender.
*/
	location: Location;
	/**
Venue name; as defined by the sender.
*/
	title: string;
	/**
Venue address; as defined by the sender.
*/
	address: string;
	/**
Provider of the venue database; as defined by the sender. Currently, only "foursquare" and "gplaces" (Google Places)
need to be supported.
*/
	provider: string;
	/**
Identifier of the venue in the provider database; as defined by the sender.
*/
	id: string;
	/**
Type of the venue in the provider database; as defined by the sender.
*/
	type: string;
}

/**
Describes a game.
*/
export interface Game {
	'@type': 'game';
	/**
Game ID.
*/
	id: string;
	/**
Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name}.
*/
	short_name: string;
	/**
Game title.
*/
	title: string;
	/**
Game text, usually containing scoreboards for a game.
*/
	text: FormattedText;
	/**
Describes a game.
*/
	description: string;
	/**
Game photo.
*/
	photo: Photo;
	/**
Game animation; may be null.
*/
	animation: Animation;
}

/**
Describes a poll.
*/
export interface Poll {
	'@type': 'poll';
	/**
Unique poll identifier.
*/
	id: string;
	/**
Poll question; 1-300 characters.
*/
	question: string;
	/**
List of poll answer options.
*/
	options: PollOption[];
	/**
Total number of voters, participating in the poll.
*/
	total_voter_count: number;
	/**
User identifiers of recent voters, if the poll is non-anonymous.
*/
	recent_voter_user_ids: number[];
	/**
True, if the poll is anonymous.
*/
	is_anonymous?: boolean;
	/**
Type of the poll.
*/
	type: PollType;
	/**
Amount of time the poll will be active after creation, in seconds.
*/
	open_period: number;
	/**
Point in time (Unix timestamp) when the poll will automatically be closed.
*/
	close_date: number;
	/**
True, if the poll is closed.
*/
	is_closed?: boolean;
}

/**
Describes a user profile photo.
*/
export interface ProfilePhoto {
	'@type': 'profilePhoto';
	/**
Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of user profile photos.
*/
	id: string;
	/**
A small (160x160) user profile photo. The file can be downloaded only before the photo is changed.
*/
	small: File;
	/**
A big (640x640) user profile photo. The file can be downloaded only before the photo is changed.
*/
	big: File;
	/**
User profile photo minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
True, if the photo has animated variant.
*/
	has_animation?: boolean;
}

/**
Contains basic information about the photo of a chat.
*/
export interface ChatPhotoInfo {
	'@type': 'chatPhotoInfo';
	/**
A small (160x160) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed.
*/
	small: File;
	/**
A big (640x640) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed.
*/
	big: File;
	/**
Chat photo minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
True, if the photo has animated variant.
*/
	has_animation?: boolean;
}

/**
Represents the type of a user. The following types are possible: regular users, deleted users and bots.
Subtype of {@link UserType}.
*/
export interface UserTypeRegular {
	'@type': 'userTypeRegular';

}

/**
A deleted user or deleted bot. No information on the user besides the user identifier is available. It is not possible
to perform any active actions on this type of user.
Subtype of {@link UserType}.
*/
export interface UserTypeDeleted {
	'@type': 'userTypeDeleted';

}

/**
A bot (see https://core.telegram.org/bots).
Subtype of {@link UserType}.
*/
export interface UserTypeBot {
	'@type': 'userTypeBot';
	/**
True, if the bot can be invited to basic group and supergroup chats.
*/
	can_join_groups?: boolean;
	/**
True, if the bot can read all messages in basic group or supergroup chats and not just those addressed to the bot. In
private and channel chats a bot can always read all messages.
*/
	can_read_all_group_messages?: boolean;
	/**
True, if the bot supports inline queries.
*/
	is_inline?: boolean;
	/**
Placeholder for inline queries (displayed on the application input field).
*/
	inline_query_placeholder: string;
	/**
True, if the location of the user is expected to be sent with every inline query to this bot.
*/
	need_location?: boolean;
	/**
True, if the bot can be added to attachment menu.
*/
	can_be_added_to_attachment_menu?: boolean;
}

/**
No information on the user besides the user identifier is available, yet this user has not been deleted. This object is
extremely rare and must be handled like a deleted user. It is not possible to perform any actions on users of this type.
Subtype of {@link UserType}.
*/
export interface UserTypeUnknown {
	'@type': 'userTypeUnknown';

}

/**
Represents a command supported by a bot.
*/
export interface BotCommand {
	'@type': 'botCommand';
	/**
Text of the bot command.
*/
	command: string;
	/**
Represents a command supported by a bot.
*/
	description: string;
}

/**
Contains a list of bot commands.
*/
export interface BotCommands {
	'@type': 'botCommands';
	/**
Bot's user identifier.
*/
	bot_user_id: number;
	/**
List of bot commands.
*/
	commands: BotCommand[];
}

/**
Describes a button to be shown instead of bot commands menu button.
*/
export interface BotMenuButton {
	'@type': 'botMenuButton';
	/**
Text of the button.
*/
	text: string;
	/**
URL to be passed to openWebApp.
*/
	url: string;
}

/**
Represents a location to which a chat is connected.
*/
export interface ChatLocation {
	'@type': 'chatLocation';
	/**
The location.
*/
	location: Location;
	/**
Location address; 1-64 characters, as defined by the chat owner.
*/
	address: string;
}

/**
Animated variant of a chat photo in MPEG4 format.
*/
export interface AnimatedChatPhoto {
	'@type': 'animatedChatPhoto';
	/**
Animation width and height.
*/
	length: number;
	/**
Information about the animation file.
*/
	file: File;
	/**
Timestamp of the frame, used as a static chat photo.
*/
	main_frame_timestamp: number;
}

/**
Describes a chat or user profile photo.
*/
export interface ChatPhoto {
	'@type': 'chatPhoto';
	/**
Unique photo identifier.
*/
	id: string;
	/**
Point in time (Unix timestamp) when the photo has been added.
*/
	added_date: number;
	/**
Photo minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Available variants of the photo in JPEG format, in different size.
*/
	sizes: PhotoSize[];
	/**
A big (640x640) animated variant of the photo in MPEG4 format; may be null.
*/
	animation: AnimatedChatPhoto;
	/**
A small (160x160) animated variant of the photo in MPEG4 format; may be null even the big animation is available.
*/
	small_animation: AnimatedChatPhoto;
}

/**
Contains a list of chat or user profile photos.
*/
export interface ChatPhotos {
	'@type': 'chatPhotos';
	/**
Total number of photos.
*/
	total_count: number;
	/**
List of photos.
*/
	photos: ChatPhoto[];
}

/**
Describes a photo to be set as a user profile or chat photo.
Subtype of {@link InputChatPhoto}.
*/
export interface InputChatPhotoPrevious {
	'@type': 'inputChatPhotoPrevious';
	/**
Identifier of the current user's profile photo to reuse.
*/
	chat_photo_id: string;
}

/**
A static photo in JPEG format.
Subtype of {@link InputChatPhoto}.
*/
export interface InputChatPhotoStatic {
	'@type': 'inputChatPhotoStatic';
	/**
Photo to be set as profile photo. Only inputFileLocal and inputFileGenerated are allowed.
*/
	photo: InputFile;
}

/**
An animation in MPEG4 format; must be square, at most 10 seconds long, have width between 160 and 800 and be at most 2MB
in size.
Subtype of {@link InputChatPhoto}.
*/
export interface InputChatPhotoAnimation {
	'@type': 'inputChatPhotoAnimation';
	/**
Animation to be set as profile photo. Only inputFileLocal and inputFileGenerated are allowed.
*/
	animation: InputFile;
	/**
Timestamp of the frame, which will be used as static chat photo.
*/
	main_frame_timestamp: number;
}

/**
Describes actions that a user is allowed to take in a chat.
*/
export interface ChatPermissions {
	'@type': 'chatPermissions';
	/**
True, if the user can send text messages, contacts, locations, and venues.
*/
	can_send_messages?: boolean;
	/**
True, if the user can send audio files, documents, photos, videos, video notes, and voice notes. Implies
can_send_messages permissions.
*/
	can_send_media_messages?: boolean;
	/**
True, if the user can send polls. Implies can_send_messages permissions.
*/
	can_send_polls?: boolean;
	/**
True, if the user can send animations, games, stickers, and dice and use inline bots. Implies can_send_messages
permissions.
*/
	can_send_other_messages?: boolean;
	/**
True, if the user may add a web page preview to their messages. Implies can_send_messages permissions.
*/
	can_add_web_page_previews?: boolean;
	/**
True, if the user can change the chat title, photo, and other settings.
*/
	can_change_info?: boolean;
	/**
True, if the user can invite new users to the chat.
*/
	can_invite_users?: boolean;
	/**
True, if the user can pin messages.
*/
	can_pin_messages?: boolean;
}

/**
Describes rights of the administrator.
*/
export interface ChatAdministratorRights {
	'@type': 'chatAdministratorRights';
	/**
True, if the administrator can get chat event log, get chat statistics, get message statistics in channels, get channel
members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other privilege; applicable to
supergroups and channels only.
*/
	can_manage_chat?: boolean;
	/**
True, if the administrator can change the chat title, photo, and other settings.
*/
	can_change_info?: boolean;
	/**
True, if the administrator can create channel posts; applicable to channels only.
*/
	can_post_messages?: boolean;
	/**
True, if the administrator can edit messages of other users and pin messages; applicable to channels only.
*/
	can_edit_messages?: boolean;
	/**
True, if the administrator can delete messages of other users.
*/
	can_delete_messages?: boolean;
	/**
True, if the administrator can invite new users to the chat.
*/
	can_invite_users?: boolean;
	/**
True, if the administrator can restrict, ban, or unban chat members; always true for channels.
*/
	can_restrict_members?: boolean;
	/**
True, if the administrator can pin messages; applicable to basic groups and supergroups only.
*/
	can_pin_messages?: boolean;
	/**
True, if the administrator can add new administrators with a subset of their own privileges or demote administrators
that were directly or indirectly promoted by them.
*/
	can_promote_members?: boolean;
	/**
True, if the administrator can manage video chats.
*/
	can_manage_video_chats?: boolean;
	/**
True, if the administrator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups
only.
*/
	is_anonymous?: boolean;
}

/**
Describes an option for buying Telegram Premium to a user.
*/
export interface PremiumPaymentOption {
	'@type': 'premiumPaymentOption';
	/**
ISO 4217 currency code for Telegram Premium subscription payment.
*/
	currency: string;
	/**
The amount to pay, in the smallest units of the currency.
*/
	amount: number;
	/**
The discount associated with this option, as a percentage.
*/
	discount_percentage: number;
	/**
Number of month the Telegram Premium subscription will be active.
*/
	month_count: number;
	/**
Identifier of the store product associated with the option.
*/
	store_product_id: string;
	/**
An internal link to be opened for buying Telegram Premium to the user if store payment isn't possible; may be null if
direct payment isn't available.
*/
	payment_link: InternalLinkType;
}

/**
Describes a custom emoji to be shown instead of the Telegram Premium badge.
*/
export interface EmojiStatus {
	'@type': 'emojiStatus';
	/**
Identifier of the custom emoji in stickerFormatTgs format. If the custom emoji belongs to the sticker set
GetOption("themed_emoji_statuses_sticker_set_id"), then it's color must be changed to the color of the Telegram Premium
badge.
*/
	custom_emoji_id: string;
}

/**
Contains a list of emoji statuses.
*/
export interface EmojiStatuses {
	'@type': 'emojiStatuses';
	/**
The list of emoji statuses.
*/
	emoji_statuses: EmojiStatus[];
}

/**
Represents a user.
*/
export interface User {
	'@type': 'user';
	/**
User identifier.
*/
	id: number;
	/**
First name of the user.
*/
	first_name: string;
	/**
Last name of the user.
*/
	last_name: string;
	/**
Username of the user.
*/
	username: string;
	/**
Phone number of the user.
*/
	phone_number: string;
	/**
Current online status of the user.
*/
	status: UserStatus;
	/**
Profile photo of the user; may be null.
*/
	profile_photo: ProfilePhoto;
	/**
Emoji status to be shown instead of the default Telegram Premium badge; may be null. For Telegram Premium users only.
*/
	emoji_status: EmojiStatus;
	/**
The user is a contact of the current user.
*/
	is_contact?: boolean;
	/**
The user is a contact of the current user and the current user is a contact of the user.
*/
	is_mutual_contact?: boolean;
	/**
True, if the user is verified.
*/
	is_verified?: boolean;
	/**
True, if the user is a Telegram Premium user.
*/
	is_premium?: boolean;
	/**
True, if the user is Telegram support account.
*/
	is_support?: boolean;
	/**
If non-empty, it contains a human-readable description of the reason why access to this user must be restricted.
*/
	restriction_reason: string;
	/**
True, if many users reported this user as a scam.
*/
	is_scam?: boolean;
	/**
True, if many users reported this user as a fake account.
*/
	is_fake?: boolean;
	/**
If false, the user is inaccessible, and the only information known about the user is inside this class. Identifier of
the user can't be passed to any method except GetUser.
*/
	have_access?: boolean;
	/**
Type of the user.
*/
	type: UserType;
	/**
IETF language tag of the user's language; only available to bots.
*/
	language_code: string;
	/**
True, if the user added the current bot to attachment menu; only available to bots.
*/
	added_to_attachment_menu?: boolean;
}

/**
Contains information about a bot.
*/
export interface BotInfo {
	'@type': 'botInfo';
	/**
The text that is shown on the bot's profile page and is sent together with the link when users share the bot.
*/
	share_text: string;
	/**
Contains information about a bot.
*/
	description: string;
	/**
Photo shown in the chat with the bot if the chat is empty; may be null.
*/
	photo: Photo;
	/**
Animation shown in the chat with the bot if the chat is empty; may be null.
*/
	animation: Animation;
	/**
Information about a button to show instead of the bot commands menu button; may be null if ordinary bot commands menu
must be shown.
*/
	menu_button: BotMenuButton;
	/**
List of the bot commands.
*/
	commands: BotCommand[];
	/**
Default administrator rights for adding the bot to basic group and supergroup chats; may be null.
*/
	default_group_administrator_rights: ChatAdministratorRights;
	/**
Default administrator rights for adding the bot to channels; may be null.
*/
	default_channel_administrator_rights: ChatAdministratorRights;
}

/**
Contains full information about a user.
*/
export interface UserFullInfo {
	'@type': 'userFullInfo';
	/**
User profile photo; may be null.
*/
	photo: ChatPhoto;
	/**
True, if the user is blocked by the current user.
*/
	is_blocked?: boolean;
	/**
True, if the user can be called.
*/
	can_be_called?: boolean;
	/**
True, if a video call can be created with the user.
*/
	supports_video_calls?: boolean;
	/**
True, if the user can't be called due to their privacy settings.
*/
	has_private_calls?: boolean;
	/**
True, if the user can't be linked in forwarded messages due to their privacy settings.
*/
	has_private_forwards?: boolean;
	/**
True, if voice and video notes can't be sent or forwarded to the user.
*/
	has_restricted_voice_and_video_note_messages?: boolean;
	/**
True, if the current user needs to explicitly allow to share their phone number with the user when the method addContact
is used.
*/
	need_phone_number_privacy_exception?: boolean;
	/**
A short user bio; may be null for bots.
*/
	bio: FormattedText;
	/**
The list of available options for gifting Telegram Premium to the user.
*/
	premium_gift_options: PremiumPaymentOption[];
	/**
Number of group chats where both the other user and the current user are a member; 0 for the current user.
*/
	group_in_common_count: number;
	/**
For bots, information about the bot; may be null.
*/
	bot_info: BotInfo;
}

/**
Represents a list of users.
*/
export interface Users {
	'@type': 'users';
	/**
Approximate total number of users found.
*/
	total_count: number;
	/**
A list of user identifiers.
*/
	user_ids: number[];
}

/**
Contains information about a chat administrator.
*/
export interface ChatAdministrator {
	'@type': 'chatAdministrator';
	/**
User identifier of the administrator.
*/
	user_id: number;
	/**
Custom title of the administrator.
*/
	custom_title: string;
	/**
True, if the user is the owner of the chat.
*/
	is_owner?: boolean;
}

/**
Represents a list of chat administrators.
*/
export interface ChatAdministrators {
	'@type': 'chatAdministrators';
	/**
A list of chat administrators.
*/
	administrators: ChatAdministrator[];
}

/**
Provides information about the status of a member in a chat.
Subtype of {@link ChatMemberStatus}.
*/
export interface ChatMemberStatusCreator {
	'@type': 'chatMemberStatusCreator';
	/**
A custom title of the owner; 0-16 characters without emojis; applicable to supergroups only.
*/
	custom_title: string;
	/**
True, if the creator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups only.
*/
	is_anonymous?: boolean;
	/**
True, if the user is a member of the chat.
*/
	is_member?: boolean;
}

/**
The user is a member of the chat and has some additional privileges. In basic groups, administrators can edit and delete
messages sent by others, add new members, ban unprivileged members, and manage video chats. In supergroups and channels,
there are more detailed options for administrator privileges.
Subtype of {@link ChatMemberStatus}.
*/
export interface ChatMemberStatusAdministrator {
	'@type': 'chatMemberStatusAdministrator';
	/**
A custom title of the administrator; 0-16 characters without emojis; applicable to supergroups only.
*/
	custom_title: string;
	/**
True, if the current user can edit the administrator privileges for the called user.
*/
	can_be_edited?: boolean;
	/**
Rights of the administrator.
*/
	rights: ChatAdministratorRights;
}

/**
The user is a member of the chat, without any additional privileges or restrictions.
Subtype of {@link ChatMemberStatus}.
*/
export interface ChatMemberStatusMember {
	'@type': 'chatMemberStatusMember';

}

/**
The user is under certain restrictions in the chat. Not supported in basic groups and channels.
Subtype of {@link ChatMemberStatus}.
*/
export interface ChatMemberStatusRestricted {
	'@type': 'chatMemberStatusRestricted';
	/**
True, if the user is a member of the chat.
*/
	is_member?: boolean;
	/**
Point in time (Unix timestamp) when restrictions will be lifted from the user; 0 if never. If the user is restricted for
more than 366 days or for less than 30 seconds from the current time, the user is considered to be restricted forever.
*/
	restricted_until_date: number;
	/**
User permissions in the chat.
*/
	permissions: ChatPermissions;
}

/**
The user or the chat is not a chat member.
Subtype of {@link ChatMemberStatus}.
*/
export interface ChatMemberStatusLeft {
	'@type': 'chatMemberStatusLeft';

}

/**
The user or the chat was banned (and hence is not a member of the chat). Implies the user can't return to the chat, view
messages, or be used as a participant identifier to join a video chat of the chat.
Subtype of {@link ChatMemberStatus}.
*/
export interface ChatMemberStatusBanned {
	'@type': 'chatMemberStatusBanned';
	/**
Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days
or for less than 30 seconds from the current time, the user is considered to be banned forever. Always 0 in basic
groups.
*/
	banned_until_date: number;
}

/**
Describes a user or a chat as a member of another chat.
*/
export interface ChatMember {
	'@type': 'chatMember';
	/**
Identifier of the chat member. Currently, other chats can be only Left or Banned. Only supergroups and channels can have
other chats as Left or Banned members and these chats must be supergroups or channels.
*/
	member_id: MessageSender;
	/**
Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown.
*/
	inviter_user_id: number;
	/**
Point in time (Unix timestamp) when the user joined the chat.
*/
	joined_chat_date: number;
	/**
Status of the member in the chat.
*/
	status: ChatMemberStatus;
}

/**
Contains a list of chat members.
*/
export interface ChatMembers {
	'@type': 'chatMembers';
	/**
Approximate total number of chat members found.
*/
	total_count: number;
	/**
A list of chat members.
*/
	members: ChatMember[];
}

/**
Specifies the kind of chat members to return in searchChatMembers.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterContacts {
	'@type': 'chatMembersFilterContacts';

}

/**
Returns the owner and administrators.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterAdministrators {
	'@type': 'chatMembersFilterAdministrators';

}

/**
Returns all chat members, including restricted chat members.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterMembers {
	'@type': 'chatMembersFilterMembers';

}

/**
Returns users which can be mentioned in the chat.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterMention {
	'@type': 'chatMembersFilterMention';
	/**
If non-zero, the identifier of the current message thread.
*/
	message_thread_id: number;
}

/**
Returns users under certain restrictions in the chat; can be used only by administrators in a supergroup.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterRestricted {
	'@type': 'chatMembersFilterRestricted';

}

/**
Returns users banned from the chat; can be used only by administrators in a supergroup or in a channel.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterBanned {
	'@type': 'chatMembersFilterBanned';

}

/**
Returns bot members of the chat.
Subtype of {@link ChatMembersFilter}.
*/
export interface ChatMembersFilterBots {
	'@type': 'chatMembersFilterBots';

}

/**
Specifies the kind of chat members to return in getSupergroupMembers.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterRecent {
	'@type': 'supergroupMembersFilterRecent';

}

/**
Returns contacts of the user, which are members of the supergroup or channel.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterContacts {
	'@type': 'supergroupMembersFilterContacts';
	/**
Query to search for.
*/
	query: string;
}

/**
Returns the owner and administrators.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterAdministrators {
	'@type': 'supergroupMembersFilterAdministrators';

}

/**
Used to search for supergroup or channel members via a (string) query.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterSearch {
	'@type': 'supergroupMembersFilterSearch';
	/**
Query to search for.
*/
	query: string;
}

/**
Returns restricted supergroup members; can be used only by administrators.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterRestricted {
	'@type': 'supergroupMembersFilterRestricted';
	/**
Query to search for.
*/
	query: string;
}

/**
Returns users banned from the supergroup or channel; can be used only by administrators.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterBanned {
	'@type': 'supergroupMembersFilterBanned';
	/**
Query to search for.
*/
	query: string;
}

/**
Returns users which can be mentioned in the supergroup.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterMention {
	'@type': 'supergroupMembersFilterMention';
	/**
Query to search for.
*/
	query: string;
	/**
If non-zero, the identifier of the current message thread.
*/
	message_thread_id: number;
}

/**
Returns bot members of the supergroup or channel.
Subtype of {@link SupergroupMembersFilter}.
*/
export interface SupergroupMembersFilterBots {
	'@type': 'supergroupMembersFilterBots';

}

/**
Contains a chat invite link.
*/
export interface ChatInviteLink {
	'@type': 'chatInviteLink';
	/**
Chat invite link.
*/
	invite_link: string;
	/**
Name of the link.
*/
	name: string;
	/**
User identifier of an administrator created the link.
*/
	creator_user_id: number;
	/**
Point in time (Unix timestamp) when the link was created.
*/
	date: number;
	/**
Point in time (Unix timestamp) when the link was last edited; 0 if never or unknown.
*/
	edit_date: number;
	/**
Point in time (Unix timestamp) when the link will expire; 0 if never.
*/
	expiration_date: number;
	/**
The maximum number of members, which can join the chat using the link simultaneously; 0 if not limited. Always 0 if the
link requires approval.
*/
	member_limit: number;
	/**
Number of chat members, which joined the chat using the link.
*/
	member_count: number;
	/**
Number of pending join requests created using this link.
*/
	pending_join_request_count: number;
	/**
True, if the link only creates join request. If true, total number of joining members will be unlimited.
*/
	creates_join_request?: boolean;
	/**
True, if the link is primary. Primary invite link can't have name, expiration date, or usage limit. There is exactly one
primary invite link for each administrator with can_invite_users right at a given time.
*/
	is_primary?: boolean;
	/**
True, if the link was revoked.
*/
	is_revoked?: boolean;
}

/**
Contains a list of chat invite links.
*/
export interface ChatInviteLinks {
	'@type': 'chatInviteLinks';
	/**
Approximate total number of chat invite links found.
*/
	total_count: number;
	/**
List of invite links.
*/
	invite_links: ChatInviteLink[];
}

/**
Describes a chat administrator with a number of active and revoked chat invite links.
*/
export interface ChatInviteLinkCount {
	'@type': 'chatInviteLinkCount';
	/**
Administrator's user identifier.
*/
	user_id: number;
	/**
Number of active invite links.
*/
	invite_link_count: number;
	/**
Number of revoked invite links.
*/
	revoked_invite_link_count: number;
}

/**
Contains a list of chat invite link counts.
*/
export interface ChatInviteLinkCounts {
	'@type': 'chatInviteLinkCounts';
	/**
List of invite link counts.
*/
	invite_link_counts: ChatInviteLinkCount[];
}

/**
Describes a chat member joined a chat via an invite link.
*/
export interface ChatInviteLinkMember {
	'@type': 'chatInviteLinkMember';
	/**
User identifier.
*/
	user_id: number;
	/**
Point in time (Unix timestamp) when the user joined the chat.
*/
	joined_chat_date: number;
	/**
User identifier of the chat administrator, approved user join request.
*/
	approver_user_id: number;
}

/**
Contains a list of chat members joined a chat via an invite link.
*/
export interface ChatInviteLinkMembers {
	'@type': 'chatInviteLinkMembers';
	/**
Approximate total number of chat members found.
*/
	total_count: number;
	/**
List of chat members, joined a chat via an invite link.
*/
	members: ChatInviteLinkMember[];
}

/**
Contains information about a chat invite link.
*/
export interface ChatInviteLinkInfo {
	'@type': 'chatInviteLinkInfo';
	/**
Chat identifier of the invite link; 0 if the user has no access to the chat before joining.
*/
	chat_id: number;
	/**
If non-zero, the amount of time for which read access to the chat will remain available, in seconds.
*/
	accessible_for: number;
	/**
Type of the chat.
*/
	type: ChatType;
	/**
Title of the chat.
*/
	title: string;
	/**
Chat photo; may be null.
*/
	photo: ChatPhotoInfo;
	/**
Contains information about a chat invite link.
*/
	description: string;
	/**
Number of members in the chat.
*/
	member_count: number;
	/**
User identifiers of some chat members that may be known to the current user.
*/
	member_user_ids: number[];
	/**
True, if the link only creates join request.
*/
	creates_join_request?: boolean;
	/**
True, if the chat is a public supergroup or channel, i.e. it has a username or it is a location-based supergroup.
*/
	is_public?: boolean;
}

/**
Describes a user that sent a join request and waits for administrator approval.
*/
export interface ChatJoinRequest {
	'@type': 'chatJoinRequest';
	/**
User identifier.
*/
	user_id: number;
	/**
Point in time (Unix timestamp) when the user sent the join request.
*/
	date: number;
	/**
A short bio of the user.
*/
	bio: string;
}

/**
Contains a list of requests to join a chat.
*/
export interface ChatJoinRequests {
	'@type': 'chatJoinRequests';
	/**
Approximate total number of requests found.
*/
	total_count: number;
	/**
List of the requests.
*/
	requests: ChatJoinRequest[];
}

/**
Contains information about pending join requests for a chat.
*/
export interface ChatJoinRequestsInfo {
	'@type': 'chatJoinRequestsInfo';
	/**
Total number of pending join requests.
*/
	total_count: number;
	/**
Identifiers of at most 3 users sent the newest pending join requests.
*/
	user_ids: number[];
}

/**
Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate more than 200 users).
*/
export interface BasicGroup {
	'@type': 'basicGroup';
	/**
Group identifier.
*/
	id: number;
	/**
Number of members in the group.
*/
	member_count: number;
	/**
Status of the current user in the group.
*/
	status: ChatMemberStatus;
	/**
True, if the group is active.
*/
	is_active?: boolean;
	/**
Identifier of the supergroup to which this group was upgraded; 0 if none.
*/
	upgraded_to_supergroup_id: number;
}

/**
Contains full information about a basic group.
*/
export interface BasicGroupFullInfo {
	'@type': 'basicGroupFullInfo';
	/**
Chat photo; may be null.
*/
	photo: ChatPhoto;
	/**
Contains full information about a basic group.
*/
	description: string;
	/**
User identifier of the creator of the group; 0 if unknown.
*/
	creator_user_id: number;
	/**
Group members.
*/
	members: ChatMember[];
	/**
Primary invite link for this group; may be null. For chat administrators with can_invite_users right only. Updated only
after the basic group is opened.
*/
	invite_link: ChatInviteLink;
	/**
List of commands of bots in the group.
*/
	bot_commands: BotCommands[];
}

/**
Represents a supergroup or channel with zero or more members (subscribers in the case of channels). From the point of
view of the system, a channel is a special kind of a supergroup: only administrators can post and see the list of
members, and posts from all administrators use the name and photo of the channel instead of individual names and profile
photos. Unlike supergroups, channels can have an unlimited number of subscribers.
*/
export interface Supergroup {
	'@type': 'supergroup';
	/**
Supergroup or channel identifier.
*/
	id: number;
	/**
Username of the supergroup or channel; empty for private supergroups or channels.
*/
	username: string;
	/**
Point in time (Unix timestamp) when the current user joined, or the point in time when the supergroup or channel was
created, in case the user is not a member.
*/
	date: number;
	/**
Status of the current user in the supergroup or channel; custom title will always be empty.
*/
	status: ChatMemberStatus;
	/**
Number of members in the supergroup or channel; 0 if unknown. Currently, it is guaranteed to be known only if the
supergroup or channel was received through searchPublicChats, searchChatsNearby, getInactiveSupergroupChats,
getSuitableDiscussionChats, getGroupsInCommon, or getUserPrivacySettingRules.
*/
	member_count: number;
	/**
True, if the channel has a discussion group, or the supergroup is the designated discussion group for a channel.
*/
	has_linked_chat?: boolean;
	/**
True, if the supergroup is connected to a location, i.e. the supergroup is a location-based supergroup.
*/
	has_location?: boolean;
	/**
True, if messages sent to the channel need to contain information about the sender. This field is only applicable to
channels.
*/
	sign_messages?: boolean;
	/**
True, if users need to join the supergroup before they can send messages. Always true for channels and non-discussion
supergroups.
*/
	join_to_send_messages?: boolean;
	/**
True, if all users directly joining the supergroup need to be approved by supergroup administrators. Always false for
channels and supergroups without username, location, or a linked chat.
*/
	join_by_request?: boolean;
	/**
True, if the slow mode is enabled in the supergroup.
*/
	is_slow_mode_enabled?: boolean;
	/**
True, if the supergroup is a channel.
*/
	is_channel?: boolean;
	/**
True, if the supergroup is a broadcast group, i.e. only administrators can send messages and there is no limit on the
number of members.
*/
	is_broadcast_group?: boolean;
	/**
True, if the supergroup or channel is verified.
*/
	is_verified?: boolean;
	/**
If non-empty, contains a human-readable description of the reason why access to this supergroup or channel must be
restricted.
*/
	restriction_reason: string;
	/**
True, if many users reported this supergroup or channel as a scam.
*/
	is_scam?: boolean;
	/**
True, if many users reported this supergroup or channel as a fake account.
*/
	is_fake?: boolean;
}

/**
Contains full information about a supergroup or channel.
*/
export interface SupergroupFullInfo {
	'@type': 'supergroupFullInfo';
	/**
Chat photo; may be null.
*/
	photo: ChatPhoto;
	/**
Contains full information about a supergroup or channel.
*/
	description: string;
	/**
Number of members in the supergroup or channel; 0 if unknown.
*/
	member_count: number;
	/**
Number of privileged users in the supergroup or channel; 0 if unknown.
*/
	administrator_count: number;
	/**
Number of restricted users in the supergroup; 0 if unknown.
*/
	restricted_count: number;
	/**
Number of users banned from chat; 0 if unknown.
*/
	banned_count: number;
	/**
Chat identifier of a discussion group for the channel, or a channel, for which the supergroup is the designated
discussion group; 0 if none or unknown.
*/
	linked_chat_id: number;
	/**
Delay between consecutive sent messages for non-administrator supergroup members, in seconds.
*/
	slow_mode_delay: number;
	/**
Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo update is not
triggered when value of this field changes, but both new and old values are non-zero.
*/
	slow_mode_delay_expires_in: number;
	/**
True, if members of the chat can be retrieved.
*/
	can_get_members?: boolean;
	/**
True, if the chat username can be changed.
*/
	can_set_username?: boolean;
	/**
True, if the supergroup sticker set can be changed.
*/
	can_set_sticker_set?: boolean;
	/**
True, if the supergroup location can be changed.
*/
	can_set_location?: boolean;
	/**
True, if the supergroup or channel statistics are available.
*/
	can_get_statistics?: boolean;
	/**
True, if new chat members will have access to old messages. In public or discussion groups and both public and private
channels, old messages are always available, so this option affects only private supergroups without a linked chat. The
value of this field is only available for chat administrators.
*/
	is_all_history_available?: boolean;
	/**
Identifier of the supergroup sticker set; 0 if none.
*/
	sticker_set_id: string;
	/**
Location to which the supergroup is connected; may be null.
*/
	location: ChatLocation;
	/**
Primary invite link for the chat; may be null. For chat administrators with can_invite_users right only.
*/
	invite_link: ChatInviteLink;
	/**
List of commands of bots in the group.
*/
	bot_commands: BotCommands[];
	/**
Identifier of the basic group from which supergroup was upgraded; 0 if none.
*/
	upgraded_from_basic_group_id: number;
	/**
Identifier of the last message in the basic group from which supergroup was upgraded; 0 if none.
*/
	upgraded_from_max_message_id: number;
}

/**
Describes the current secret chat state.
Subtype of {@link SecretChatState}.
*/
export interface SecretChatStatePending {
	'@type': 'secretChatStatePending';

}

/**
The secret chat is ready to use.
Subtype of {@link SecretChatState}.
*/
export interface SecretChatStateReady {
	'@type': 'secretChatStateReady';

}

/**
The secret chat is closed.
Subtype of {@link SecretChatState}.
*/
export interface SecretChatStateClosed {
	'@type': 'secretChatStateClosed';

}

/**
Represents a secret chat.
*/
export interface SecretChat {
	'@type': 'secretChat';
	/**
Secret chat identifier.
*/
	id: number;
	/**
Identifier of the chat partner.
*/
	user_id: number;
	/**
State of the secret chat.
*/
	state: SecretChatState;
	/**
True, if the chat was created by the current user; otherwise false.
*/
	is_outbound?: boolean;
	/**
Hash of the currently used key for comparison with the hash of the chat partner's key. This is a string of 36
little-endian bytes, which must be split into groups of 2 bits, each denoting a pixel of one of 4 colors FFFFFF, D5E6F3,
2D5775, and 2F99C9. The pixels must be used to make a 12x12 square image filled from left to right, top to bottom.
Alternatively, the first 32 bytes of the hash can be converted to the hexadecimal format and printed as 32 2-digit hex
numbers.
*/
	key_hash: string;
	/**
Secret chat layer; determines features supported by the chat partner's application. Nested text entities and underline
and strikethrough entities are supported if the layer >= 101, files bigger than 2000MB are supported if the layer >=
143, spoiler and custom emoji text entities are supported if the layer >= 144.
*/
	layer: number;
}

/**
Contains information about the sender of a message.
Subtype of {@link MessageSender}.
*/
export interface MessageSenderUser {
	'@type': 'messageSenderUser';
	/**
Identifier of the user that sent the message.
*/
	user_id: number;
}

/**
The message was sent on behalf of a chat.
Subtype of {@link MessageSender}.
*/
export interface MessageSenderChat {
	'@type': 'messageSenderChat';
	/**
Identifier of the chat that sent the message.
*/
	chat_id: number;
}

/**
Represents a list of message senders.
*/
export interface MessageSenders {
	'@type': 'messageSenders';
	/**
Approximate total number of messages senders found.
*/
	total_count: number;
	/**
List of message senders.
*/
	senders: MessageSender[];
}

/**
Represents a message sender, which can be used to send messages in a chat.
*/
export interface ChatMessageSender {
	'@type': 'chatMessageSender';
	/**
Available message senders.
*/
	sender: MessageSender;
	/**
True, if Telegram Premium is needed to use the message sender.
*/
	needs_premium?: boolean;
}

/**
Represents a list of message senders, which can be used to send messages in a chat.
*/
export interface ChatMessageSenders {
	'@type': 'chatMessageSenders';
	/**
List of available message senders.
*/
	senders: ChatMessageSender[];
}

/**
Contains information about the origin of a forwarded message.
Subtype of {@link MessageForwardOrigin}.
*/
export interface MessageForwardOriginUser {
	'@type': 'messageForwardOriginUser';
	/**
Identifier of the user that originally sent the message.
*/
	sender_user_id: number;
}

/**
The message was originally sent on behalf of a chat.
Subtype of {@link MessageForwardOrigin}.
*/
export interface MessageForwardOriginChat {
	'@type': 'messageForwardOriginChat';
	/**
Identifier of the chat that originally sent the message.
*/
	sender_chat_id: number;
	/**
For messages originally sent by an anonymous chat administrator, original message author signature.
*/
	author_signature: string;
}

/**
The message was originally sent by a user, which is hidden by their privacy settings.
Subtype of {@link MessageForwardOrigin}.
*/
export interface MessageForwardOriginHiddenUser {
	'@type': 'messageForwardOriginHiddenUser';
	/**
Name of the sender.
*/
	sender_name: string;
}

/**
The message was originally a post in a channel.
Subtype of {@link MessageForwardOrigin}.
*/
export interface MessageForwardOriginChannel {
	'@type': 'messageForwardOriginChannel';
	/**
Identifier of the chat from which the message was originally forwarded.
*/
	chat_id: number;
	/**
Message identifier of the original message.
*/
	message_id: number;
	/**
Original post author signature.
*/
	author_signature: string;
}

/**
The message was imported from an exported message history.
Subtype of {@link MessageForwardOrigin}.
*/
export interface MessageForwardOriginMessageImport {
	'@type': 'messageForwardOriginMessageImport';
	/**
Name of the sender.
*/
	sender_name: string;
}

/**
Describes type of message reaction.
Subtype of {@link ReactionType}.
*/
export interface ReactionTypeEmoji {
	'@type': 'reactionTypeEmoji';
	/**
Text representation of the reaction.
*/
	emoji: string;
}

/**
A reaction with a custom emoji.
Subtype of {@link ReactionType}.
*/
export interface ReactionTypeCustomEmoji {
	'@type': 'reactionTypeCustomEmoji';
	/**
Unique identifier of the custom emoji.
*/
	custom_emoji_id: string;
}

/**
Contains information about a forwarded message.
*/
export interface MessageForwardInfo {
	'@type': 'messageForwardInfo';
	/**
Origin of a forwarded message.
*/
	origin: MessageForwardOrigin;
	/**
Point in time (Unix timestamp) when the message was originally sent.
*/
	date: number;
	/**
The type of a public service announcement for the forwarded message.
*/
	public_service_announcement_type: string;
	/**
For messages forwarded to the chat with the current user (Saved Messages), to the Replies bot chat, or to the channel's
discussion group, the identifier of the chat from which the message was forwarded last time; 0 if unknown.
*/
	from_chat_id: number;
	/**
For messages forwarded to the chat with the current user (Saved Messages), to the Replies bot chat, or to the channel's
discussion group, the identifier of the original message from which the new message was forwarded last time; 0 if
unknown.
*/
	from_message_id: number;
}

/**
Contains information about replies to a message.
*/
export interface MessageReplyInfo {
	'@type': 'messageReplyInfo';
	/**
Number of times the message was directly or indirectly replied.
*/
	reply_count: number;
	/**
Identifiers of at most 3 recent repliers to the message; available in channels with a discussion supergroup. The users
and chats are expected to be inaccessible: only their photo and name will be available.
*/
	recent_replier_ids: MessageSender[];
	/**
Identifier of the last read incoming reply to the message.
*/
	last_read_inbox_message_id: number;
	/**
Identifier of the last read outgoing reply to the message.
*/
	last_read_outbox_message_id: number;
	/**
Identifier of the last reply to the message.
*/
	last_message_id: number;
}

/**
Contains information about a reaction to a message.
*/
export interface MessageReaction {
	'@type': 'messageReaction';
	/**
Type of the reaction.
*/
	type: ReactionType;
	/**
Number of times the reaction was added.
*/
	total_count: number;
	/**
True, if the reaction is chosen by the current user.
*/
	is_chosen?: boolean;
	/**
Identifiers of at most 3 recent message senders, added the reaction; available in private, basic group and supergroup
chats.
*/
	recent_sender_ids: MessageSender[];
}

/**
Contains information about interactions with a message.
*/
export interface MessageInteractionInfo {
	'@type': 'messageInteractionInfo';
	/**
Number of times the message was viewed.
*/
	view_count: number;
	/**
Number of times the message was forwarded.
*/
	forward_count: number;
	/**
Information about direct or indirect replies to the message; may be null. Currently, available only in channels with a
discussion supergroup and discussion supergroups for messages, which are not replies itself.
*/
	reply_info: MessageReplyInfo;
	/**
The list of reactions added to the message.
*/
	reactions: MessageReaction[];
}

/**
Contains information about an unread reaction to a message.
*/
export interface UnreadReaction {
	'@type': 'unreadReaction';
	/**
Type of the reaction.
*/
	type: ReactionType;
	/**
Identifier of the sender, added the reaction.
*/
	sender_id: MessageSender;
	/**
True, if the reaction was added with a big animation.
*/
	is_big?: boolean;
}

/**
Contains information about the sending state of the message.
Subtype of {@link MessageSendingState}.
*/
export interface MessageSendingStatePending {
	'@type': 'messageSendingStatePending';

}

/**
The message failed to be sent.
Subtype of {@link MessageSendingState}.
*/
export interface MessageSendingStateFailed {
	'@type': 'messageSendingStateFailed';
	/**
An error code; 0 if unknown.
*/
	error_code: number;
	/**
Error message.
*/
	error_message: string;
	/**
True, if the message can be re-sent.
*/
	can_retry?: boolean;
	/**
True, if the message can be re-sent only on behalf of a different sender.
*/
	need_another_sender?: boolean;
	/**
Time left before the message can be re-sent, in seconds. No update is sent when this field changes.
*/
	retry_after: number;
}

/**
Describes a message.
*/
export interface Message {
	'@type': 'message';
	/**
Message identifier; unique for the chat to which the message belongs.
*/
	id: number;
	/**
Identifier of the sender of the message.
*/
	sender_id: MessageSender;
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The sending state of the message; may be null.
*/
	sending_state: MessageSendingState;
	/**
The scheduling state of the message; may be null.
*/
	scheduling_state: MessageSchedulingState;
	/**
True, if the message is outgoing.
*/
	is_outgoing?: boolean;
	/**
True, if the message is pinned.
*/
	is_pinned?: boolean;
	/**
True, if the message can be edited. For live location and poll messages this fields shows whether
editMessageLiveLocation or stopPoll can be used with this message by the application.
*/
	can_be_edited?: boolean;
	/**
True, if the message can be forwarded.
*/
	can_be_forwarded?: boolean;
	/**
True, if content of the message can be saved locally or copied.
*/
	can_be_saved?: boolean;
	/**
True, if the message can be deleted only for the current user while other users will continue to see it.
*/
	can_be_deleted_only_for_self?: boolean;
	/**
True, if the message can be deleted for all users.
*/
	can_be_deleted_for_all_users?: boolean;
	/**
True, if the list of added reactions is available through getMessageAddedReactions.
*/
	can_get_added_reactions?: boolean;
	/**
True, if the message statistics are available through getMessageStatistics.
*/
	can_get_statistics?: boolean;
	/**
True, if information about the message thread is available through getMessageThread and getMessageThreadHistory.
*/
	can_get_message_thread?: boolean;
	/**
True, if chat members already viewed the message can be received through getMessageViewers.
*/
	can_get_viewers?: boolean;
	/**
True, if media timestamp links can be generated for media timestamp entities in the message text, caption or web page
description through getMessageLink.
*/
	can_get_media_timestamp_links?: boolean;
	/**
True, if reactions on the message can be reported through reportMessageReactions.
*/
	can_report_reactions?: boolean;
	/**
True, if media timestamp entities refers to a media in this message as opposed to a media in the replied message.
*/
	has_timestamped_media?: boolean;
	/**
True, if the message is a channel post. All messages to channels are channel posts, all other messages are not channel
posts.
*/
	is_channel_post?: boolean;
	/**
True, if the message contains an unread mention for the current user.
*/
	contains_unread_mention?: boolean;
	/**
Point in time (Unix timestamp) when the message was sent.
*/
	date: number;
	/**
Point in time (Unix timestamp) when the message was last edited.
*/
	edit_date: number;
	/**
Information about the initial message sender; may be null.
*/
	forward_info: MessageForwardInfo;
	/**
Information about interactions with the message; may be null.
*/
	interaction_info: MessageInteractionInfo;
	/**
Information about unread reactions added to the message.
*/
	unread_reactions: UnreadReaction[];
	/**
If non-zero, the identifier of the chat to which the replied message belongs; Currently, only messages in the Replies
chat can have different reply_in_chat_id and chat_id.
*/
	reply_in_chat_id: number;
	/**
If non-zero, the identifier of the message this message is replying to; can be the identifier of a deleted message.
*/
	reply_to_message_id: number;
	/**
If non-zero, the identifier of the message thread the message belongs to; unique within the chat to which the message
belongs.
*/
	message_thread_id: number;
	/**
For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if none. TDLib will send
updateDeleteMessages or updateMessageContent once the TTL expires.
*/
	ttl: number;
	/**
Time left before the message expires, in seconds. If the TTL timer isn't started yet, equals to the value of the ttl
field.
*/
	ttl_expires_in: number;
	/**
If non-zero, the user identifier of the bot through which this message was sent.
*/
	via_bot_user_id: number;
	/**
For channel posts and anonymous group messages, optional author signature.
*/
	author_signature: string;
	/**
Unique identifier of an album this message belongs to. Only audios, documents, photos and videos can be grouped together
in albums.
*/
	media_album_id: string;
	/**
If non-empty, contains a human-readable description of the reason why access to this message must be restricted.
*/
	restriction_reason: string;
	/**
Content of the message.
*/
	content: MessageContent;
	/**
Reply markup for the message; may be null.
*/
	reply_markup: ReplyMarkup;
}

/**
Contains a list of messages.
*/
export interface Messages {
	'@type': 'messages';
	/**
Approximate total number of messages found.
*/
	total_count: number;
	/**
List of messages; messages may be null.
*/
	messages: Message[];
}

/**
Contains a list of messages found by a search.
*/
export interface FoundMessages {
	'@type': 'foundMessages';
	/**
Approximate total number of messages found; -1 if unknown.
*/
	total_count: number;
	/**
List of messages.
*/
	messages: Message[];
	/**
The offset for the next request. If empty, there are no more results.
*/
	next_offset: string;
}

/**
Contains information about a message in a specific position.
*/
export interface MessagePosition {
	'@type': 'messagePosition';
	/**
0-based message position in the full list of suitable messages.
*/
	position: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Point in time (Unix timestamp) when the message was sent.
*/
	date: number;
}

/**
Contains a list of message positions.
*/
export interface MessagePositions {
	'@type': 'messagePositions';
	/**
Total number of messages found.
*/
	total_count: number;
	/**
List of message positions.
*/
	positions: MessagePosition[];
}

/**
Contains information about found messages sent on a specific day.
*/
export interface MessageCalendarDay {
	'@type': 'messageCalendarDay';
	/**
Total number of found messages sent on the day.
*/
	total_count: number;
	/**
First message sent on the day.
*/
	message: Message;
}

/**
Contains information about found messages, split by days according to the option "utc_time_offset".
*/
export interface MessageCalendar {
	'@type': 'messageCalendar';
	/**
Total number of found messages.
*/
	total_count: number;
	/**
Information about messages sent.
*/
	days: MessageCalendarDay[];
}

/**
Describes a sponsored message.
*/
export interface SponsoredMessage {
	'@type': 'sponsoredMessage';
	/**
Message identifier; unique for the chat to which the sponsored message belongs among both ordinary and sponsored
messages.
*/
	message_id: number;
	/**
True, if the message needs to be labeled as "recommended" instead of "sponsored".
*/
	is_recommended?: boolean;
	/**
Sponsor chat identifier; 0 if the sponsor chat is accessible through an invite link.
*/
	sponsor_chat_id: number;
	/**
Information about the sponsor chat; may be null unless sponsor_chat_id == 0.
*/
	sponsor_chat_info: ChatInviteLinkInfo;
	/**
An internal link to be opened when the sponsored message is clicked; may be null if the sponsor chat needs to be opened
instead.
*/
	link: InternalLinkType;
	/**
Content of the message. Currently, can be only of the type messageText.
*/
	content: MessageContent;
}

/**
Describes a file added to file download list.
*/
export interface FileDownload {
	'@type': 'fileDownload';
	/**
File identifier.
*/
	file_id: number;
	/**
The message with the file.
*/
	message: Message;
	/**
Point in time (Unix timestamp) when the file was added to the download list.
*/
	add_date: number;
	/**
Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed.
*/
	complete_date: number;
	/**
True, if downloading of the file is paused.
*/
	is_paused?: boolean;
}

/**
Contains number of being downloaded and recently downloaded files found.
*/
export interface DownloadedFileCounts {
	'@type': 'downloadedFileCounts';
	/**
Number of active file downloads found, including paused.
*/
	active_count: number;
	/**
Number of paused file downloads found.
*/
	paused_count: number;
	/**
Number of completed file downloads found.
*/
	completed_count: number;
}

/**
Contains a list of downloaded files, found by a search.
*/
export interface FoundFileDownloads {
	'@type': 'foundFileDownloads';
	/**
Total number of suitable files, ignoring offset.
*/
	total_counts: DownloadedFileCounts;
	/**
The list of files.
*/
	files: FileDownload[];
	/**
The offset for the next request. If empty, there are no more results.
*/
	next_offset: string;
}

/**
Describes the types of chats to which notification settings are relevant.
Subtype of {@link NotificationSettingsScope}.
*/
export interface NotificationSettingsScopePrivateChats {
	'@type': 'notificationSettingsScopePrivateChats';

}

/**
Notification settings applied to all basic group and supergroup chats when the corresponding chat setting has a default
value.
Subtype of {@link NotificationSettingsScope}.
*/
export interface NotificationSettingsScopeGroupChats {
	'@type': 'notificationSettingsScopeGroupChats';

}

/**
Notification settings applied to all channel chats when the corresponding chat setting has a default value.
Subtype of {@link NotificationSettingsScope}.
*/
export interface NotificationSettingsScopeChannelChats {
	'@type': 'notificationSettingsScopeChannelChats';

}

/**
Contains information about notification settings for a chat.
*/
export interface ChatNotificationSettings {
	'@type': 'chatNotificationSettings';
	/**
If true, mute_for is ignored and the value for the relevant type of chat is used instead.
*/
	use_default_mute_for?: boolean;
	/**
Time left before notifications will be unmuted, in seconds.
*/
	mute_for: number;
	/**
If true, the value for the relevant type of chat is used instead of sound_id.
*/
	use_default_sound?: boolean;
	/**
Identifier of the notification sound to be played; 0 if sound is disabled.
*/
	sound_id: string;
	/**
If true, show_preview is ignored and the value for the relevant type of chat is used instead.
*/
	use_default_show_preview?: boolean;
	/**
True, if message content must be displayed in notifications.
*/
	show_preview?: boolean;
	/**
If true, disable_pinned_message_notifications is ignored and the value for the relevant type of chat is used instead.
*/
	use_default_disable_pinned_message_notifications?: boolean;
	/**
If true, notifications for incoming pinned messages will be created as for an ordinary unread message.
*/
	disable_pinned_message_notifications?: boolean;
	/**
If true, disable_mention_notifications is ignored and the value for the relevant type of chat is used instead.
*/
	use_default_disable_mention_notifications?: boolean;
	/**
If true, notifications for messages with mentions will be created as for an ordinary unread message.
*/
	disable_mention_notifications?: boolean;
}

/**
Contains information about notification settings for several chats.
*/
export interface ScopeNotificationSettings {
	'@type': 'scopeNotificationSettings';
	/**
Time left before notifications will be unmuted, in seconds.
*/
	mute_for: number;
	/**
Identifier of the notification sound to be played; 0 if sound is disabled.
*/
	sound_id: string;
	/**
True, if message content must be displayed in notifications.
*/
	show_preview?: boolean;
	/**
True, if notifications for incoming pinned messages will be created as for an ordinary unread message.
*/
	disable_pinned_message_notifications?: boolean;
	/**
True, if notifications for messages with mentions will be created as for an ordinary unread message.
*/
	disable_mention_notifications?: boolean;
}

/**
Contains information about a message draft.
*/
export interface DraftMessage {
	'@type': 'draftMessage';
	/**
Identifier of the replied message; 0 if none.
*/
	reply_to_message_id: number;
	/**
Point in time (Unix timestamp) when the draft was created.
*/
	date: number;
	/**
Content of the message draft; must be of the type inputMessageText.
*/
	input_message_text: InputMessageContent;
}

/**
Describes the type of a chat.
Subtype of {@link ChatType}.
*/
export interface ChatTypePrivate {
	'@type': 'chatTypePrivate';
	/**
User identifier.
*/
	user_id: number;
}

/**
A basic group (a chat with 0-200 other users).
Subtype of {@link ChatType}.
*/
export interface ChatTypeBasicGroup {
	'@type': 'chatTypeBasicGroup';
	/**
Basic group identifier.
*/
	basic_group_id: number;
}

/**
A supergroup or channel (with unlimited members).
Subtype of {@link ChatType}.
*/
export interface ChatTypeSupergroup {
	'@type': 'chatTypeSupergroup';
	/**
Supergroup or channel identifier.
*/
	supergroup_id: number;
	/**
True, if the supergroup is a channel.
*/
	is_channel?: boolean;
}

/**
A secret chat with a user.
Subtype of {@link ChatType}.
*/
export interface ChatTypeSecret {
	'@type': 'chatTypeSecret';
	/**
Secret chat identifier.
*/
	secret_chat_id: number;
	/**
User identifier of the secret chat peer.
*/
	user_id: number;
}

/**
Represents a filter of user chats.
*/
export interface ChatFilter {
	'@type': 'chatFilter';
	/**
The title of the filter; 1-12 characters without line feeds.
*/
	title: string;
	/**
The chosen icon name for short filter representation. If non-empty, must be one of "All", "Unread", "Unmuted", "Bots",
"Channels", "Groups", "Private", "Custom", "Setup", "Cat", "Crown", "Favorite", "Flower", "Game", "Home", "Love",
"Mask", "Party", "Sport", "Study", "Trade", "Travel", "Work", "Airplane", "Book", "Light", "Like", "Money", "Note",
"Palette". If empty, use getChatFilterDefaultIconName to get default icon name for the filter.
*/
	icon_name: string;
	/**
The chat identifiers of pinned chats in the filtered chat list. There can be up to
GetOption("chat_filter_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret
chats, but the limit can be increased with Telegram Premium.
*/
	pinned_chat_ids: number[];
	/**
The chat identifiers of always included chats in the filtered chat list. There can be up to
GetOption("chat_filter_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret
chats, but the limit can be increased with Telegram Premium.
*/
	included_chat_ids: number[];
	/**
The chat identifiers of always excluded chats in the filtered chat list. There can be up to
GetOption("chat_filter_chosen_chat_count_max") always excluded non-secret chats and the same number of secret chats, but
the limit can be increased with Telegram Premium.
*/
	excluded_chat_ids: number[];
	/**
True, if muted chats need to be excluded.
*/
	exclude_muted?: boolean;
	/**
True, if read chats need to be excluded.
*/
	exclude_read?: boolean;
	/**
True, if archived chats need to be excluded.
*/
	exclude_archived?: boolean;
	/**
True, if contacts need to be included.
*/
	include_contacts?: boolean;
	/**
True, if non-contact users need to be included.
*/
	include_non_contacts?: boolean;
	/**
True, if bots need to be included.
*/
	include_bots?: boolean;
	/**
True, if basic groups and supergroups need to be included.
*/
	include_groups?: boolean;
	/**
True, if channels need to be included.
*/
	include_channels?: boolean;
}

/**
Contains basic information about a chat filter.
*/
export interface ChatFilterInfo {
	'@type': 'chatFilterInfo';
	/**
Unique chat filter identifier.
*/
	id: number;
	/**
The title of the filter; 1-12 characters without line feeds.
*/
	title: string;
	/**
The chosen or default icon name for short filter representation. One of "All", "Unread", "Unmuted", "Bots", "Channels",
"Groups", "Private", "Custom", "Setup", "Cat", "Crown", "Favorite", "Flower", "Game", "Home", "Love", "Mask", "Party",
"Sport", "Study", "Trade", "Travel", "Work", "Airplane", "Book", "Light", "Like", "Money", "Note", "Palette".
*/
	icon_name: string;
}

/**
Describes a recommended chat filter.
*/
export interface RecommendedChatFilter {
	'@type': 'recommendedChatFilter';
	/**
The chat filter.
*/
	filter: ChatFilter;
	/**
Describes a recommended chat filter.
*/
	description: string;
}

/**
Contains a list of recommended chat filters.
*/
export interface RecommendedChatFilters {
	'@type': 'recommendedChatFilters';
	/**
List of recommended chat filters.
*/
	chat_filters: RecommendedChatFilter[];
}

/**
Describes a list of chats.
Subtype of {@link ChatList}.
*/
export interface ChatListMain {
	'@type': 'chatListMain';

}

/**
A list of chats usually located at the top of the main chat list. Unmuted chats are automatically moved from the Archive
to the Main chat list when a new message arrives.
Subtype of {@link ChatList}.
*/
export interface ChatListArchive {
	'@type': 'chatListArchive';

}

/**
A list of chats belonging to a chat filter.
Subtype of {@link ChatList}.
*/
export interface ChatListFilter {
	'@type': 'chatListFilter';
	/**
Chat filter identifier.
*/
	chat_filter_id: number;
}

/**
Contains a list of chat lists.
*/
export interface ChatLists {
	'@type': 'chatLists';
	/**
List of chat lists.
*/
	chat_lists: ChatList[];
}

/**
Describes a reason why an external chat is shown in a chat list.
Subtype of {@link ChatSource}.
*/
export interface ChatSourceMtprotoProxy {
	'@type': 'chatSourceMtprotoProxy';

}

/**
The chat contains a public service announcement.
Subtype of {@link ChatSource}.
*/
export interface ChatSourcePublicServiceAnnouncement {
	'@type': 'chatSourcePublicServiceAnnouncement';
	/**
The type of the announcement.
*/
	type: string;
	/**
The text of the announcement.
*/
	text: string;
}

/**
Describes a position of a chat in a chat list.
*/
export interface ChatPosition {
	'@type': 'chatPosition';
	/**
The chat list.
*/
	list: ChatList;
	/**
A parameter used to determine order of the chat in the chat list. Chats must be sorted by the pair (order, chat.id) in
descending order.
*/
	order: string;
	/**
True, if the chat is pinned in the chat list.
*/
	is_pinned?: boolean;
	/**
Source of the chat in the chat list; may be null.
*/
	source: ChatSource;
}

/**
Describes reactions available in the chat.
Subtype of {@link ChatAvailableReactions}.
*/
export interface ChatAvailableReactionsAll {
	'@type': 'chatAvailableReactionsAll';

}

/**
Only specific reactions are available in the chat.
Subtype of {@link ChatAvailableReactions}.
*/
export interface ChatAvailableReactionsSome {
	'@type': 'chatAvailableReactionsSome';
	/**
The list of reactions.
*/
	reactions: ReactionType[];
}

/**
Describes a video chat.
*/
export interface VideoChat {
	'@type': 'videoChat';
	/**
Group call identifier of an active video chat; 0 if none. Full information about the video chat can be received through
the method getGroupCall.
*/
	group_call_id: number;
	/**
True, if the video chat has participants.
*/
	has_participants?: boolean;
	/**
Default group call participant identifier to join the video chat; may be null.
*/
	default_participant_id: MessageSender;
}

/**
A chat. (Can be a private chat, basic group, supergroup, or secret chat).
*/
export interface Chat {
	'@type': 'chat';
	/**
Chat unique identifier.
*/
	id: number;
	/**
Type of the chat.
*/
	type: ChatType;
	/**
Chat title.
*/
	title: string;
	/**
Chat photo; may be null.
*/
	photo: ChatPhotoInfo;
	/**
Actions that non-administrator chat members are allowed to take in the chat.
*/
	permissions: ChatPermissions;
	/**
Last message in the chat; may be null.
*/
	last_message: Message;
	/**
Positions of the chat in chat lists.
*/
	positions: ChatPosition[];
	/**
Identifier of a user or chat that is selected to send messages in the chat; may be null if the user can't change message
sender.
*/
	message_sender_id: MessageSender;
	/**
True, if chat content can't be saved locally, forwarded, or copied.
*/
	has_protected_content?: boolean;
	/**
True, if the chat is marked as unread.
*/
	is_marked_as_unread?: boolean;
	/**
True, if the chat is blocked by the current user and private messages from the chat can't be received.
*/
	is_blocked?: boolean;
	/**
True, if the chat has scheduled messages.
*/
	has_scheduled_messages?: boolean;
	/**
True, if the chat messages can be deleted only for the current user while other users will continue to see the messages.
*/
	can_be_deleted_only_for_self?: boolean;
	/**
True, if the chat messages can be deleted for all users.
*/
	can_be_deleted_for_all_users?: boolean;
	/**
True, if the chat can be reported to Telegram moderators through reportChat or reportChatPhoto.
*/
	can_be_reported?: boolean;
	/**
Default value of the disable_notification parameter, used when a message is sent to the chat.
*/
	default_disable_notification?: boolean;
	/**
Number of unread messages in the chat.
*/
	unread_count: number;
	/**
Identifier of the last read incoming message.
*/
	last_read_inbox_message_id: number;
	/**
Identifier of the last read outgoing message.
*/
	last_read_outbox_message_id: number;
	/**
Number of unread messages with a mention/reply in the chat.
*/
	unread_mention_count: number;
	/**
Number of messages with unread reactions in the chat.
*/
	unread_reaction_count: number;
	/**
Notification settings for the chat.
*/
	notification_settings: ChatNotificationSettings;
	/**
Types of reaction, available in the chat.
*/
	available_reactions: ChatAvailableReactions;
	/**
Current message Time To Live setting (self-destruct timer) for the chat; 0 if not defined. TTL is counted from the time
message or its content is viewed in secret chats and from the send date in other chats.
*/
	message_ttl: number;
	/**
If non-empty, name of a theme, set for the chat.
*/
	theme_name: string;
	/**
Information about actions which must be possible to do through the chat action bar; may be null.
*/
	action_bar: ChatActionBar;
	/**
Information about video chat of the chat.
*/
	video_chat: VideoChat;
	/**
Information about pending join requests; may be null.
*/
	pending_join_requests: ChatJoinRequestsInfo;
	/**
Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the
chat.
*/
	reply_markup_message_id: number;
	/**
A draft of a message in the chat; may be null.
*/
	draft_message: DraftMessage;
	/**
Application-specific data associated with the chat. (For example, the chat scroll position or local chat notification
settings can be stored here.) Persistent if the message database is used.
*/
	client_data: string;
}

/**
Represents a list of chats.
*/
export interface Chats {
	'@type': 'chats';
	/**
Approximate total number of chats found.
*/
	total_count: number;
	/**
List of chat identifiers.
*/
	chat_ids: number[];
}

/**
Describes a chat located nearby.
*/
export interface ChatNearby {
	'@type': 'chatNearby';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Distance to the chat location, in meters.
*/
	distance: number;
}

/**
Represents a list of chats located nearby.
*/
export interface ChatsNearby {
	'@type': 'chatsNearby';
	/**
List of users nearby.
*/
	users_nearby: ChatNearby[];
	/**
List of location-based supergroups nearby.
*/
	supergroups_nearby: ChatNearby[];
}

/**
Describes a type of public chats.
Subtype of {@link PublicChatType}.
*/
export interface PublicChatTypeHasUsername {
	'@type': 'publicChatTypeHasUsername';

}

/**
The chat is public, because it is a location-based supergroup.
Subtype of {@link PublicChatType}.
*/
export interface PublicChatTypeIsLocationBased {
	'@type': 'publicChatTypeIsLocationBased';

}

/**
Describes actions which must be possible to do through a chat action bar.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarReportSpam {
	'@type': 'chatActionBarReportSpam';
	/**
If true, the chat was automatically archived and can be moved back to the main chat list using addChatToList
simultaneously with setting chat notification settings to default using setChatNotificationSettings.
*/
	can_unarchive?: boolean;
}

/**
The chat is a location-based supergroup, which can be reported as having unrelated location using the method reportChat
with the reason chatReportReasonUnrelatedLocation.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarReportUnrelatedLocation {
	'@type': 'chatActionBarReportUnrelatedLocation';

}

/**
The chat is a recently created group chat to which new members can be invited.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarInviteMembers {
	'@type': 'chatActionBarInviteMembers';

}

/**
The chat is a private or secret chat, which can be reported using the method reportChat, or the other user can be
blocked using the method toggleMessageSenderIsBlocked, or the other user can be added to the contact list using the
method addContact.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarReportAddBlock {
	'@type': 'chatActionBarReportAddBlock';
	/**
If true, the chat was automatically archived and can be moved back to the main chat list using addChatToList
simultaneously with setting chat notification settings to default using setChatNotificationSettings.
*/
	can_unarchive?: boolean;
	/**
If non-negative, the current user was found by the peer through searchChatsNearby and this is the distance between the
users.
*/
	distance: number;
}

/**
The chat is a private or secret chat and the other user can be added to the contact list using the method addContact.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarAddContact {
	'@type': 'chatActionBarAddContact';

}

/**
The chat is a private or secret chat with a mutual contact and the user's phone number can be shared with the other user
using the method sharePhoneNumber.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarSharePhoneNumber {
	'@type': 'chatActionBarSharePhoneNumber';

}

/**
The chat is a private chat with an administrator of a chat to which the user sent join request.
Subtype of {@link ChatActionBar}.
*/
export interface ChatActionBarJoinRequest {
	'@type': 'chatActionBarJoinRequest';
	/**
Title of the chat to which the join request was sent.
*/
	title: string;
	/**
True, if the join request was sent to a channel chat.
*/
	is_channel?: boolean;
	/**
Point in time (Unix timestamp) when the join request was sent.
*/
	request_date: number;
}

/**
Describes a keyboard button type.
Subtype of {@link KeyboardButtonType}.
*/
export interface KeyboardButtonTypeText {
	'@type': 'keyboardButtonTypeText';

}

/**
A button that sends the user's phone number when pressed; available only in private chats.
Subtype of {@link KeyboardButtonType}.
*/
export interface KeyboardButtonTypeRequestPhoneNumber {
	'@type': 'keyboardButtonTypeRequestPhoneNumber';

}

/**
A button that sends the user's location when pressed; available only in private chats.
Subtype of {@link KeyboardButtonType}.
*/
export interface KeyboardButtonTypeRequestLocation {
	'@type': 'keyboardButtonTypeRequestLocation';

}

/**
A button that allows the user to create and send a poll when pressed; available only in private chats.
Subtype of {@link KeyboardButtonType}.
*/
export interface KeyboardButtonTypeRequestPoll {
	'@type': 'keyboardButtonTypeRequestPoll';
	/**
If true, only regular polls must be allowed to create.
*/
	force_regular?: boolean;
	/**
If true, only polls in quiz mode must be allowed to create.
*/
	force_quiz?: boolean;
}

/**
A button that opens a Web App by calling getWebAppUrl.
Subtype of {@link KeyboardButtonType}.
*/
export interface KeyboardButtonTypeWebApp {
	'@type': 'keyboardButtonTypeWebApp';
	/**
An HTTP URL to pass to getWebAppUrl.
*/
	url: string;
}

/**
Represents a single button in a bot keyboard.
*/
export interface KeyboardButton {
	'@type': 'keyboardButton';
	/**
Text of the button.
*/
	text: string;
	/**
Type of the button.
*/
	type: KeyboardButtonType;
}

/**
Describes the type of an inline keyboard button.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeUrl {
	'@type': 'inlineKeyboardButtonTypeUrl';
	/**
HTTP or tg:// URL to open.
*/
	url: string;
}

/**
A button that opens a specified URL and automatically authorize the current user by calling getLoginUrlInfo.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeLoginUrl {
	'@type': 'inlineKeyboardButtonTypeLoginUrl';
	/**
An HTTP URL to pass to getLoginUrlInfo.
*/
	url: string;
	/**
Unique button identifier.
*/
	id: number;
	/**
If non-empty, new text of the button in forwarded messages.
*/
	forward_text: string;
}

/**
A button that opens a Web App by calling openWebApp.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeWebApp {
	'@type': 'inlineKeyboardButtonTypeWebApp';
	/**
An HTTP URL to pass to openWebApp.
*/
	url: string;
}

/**
A button that sends a callback query to a bot.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeCallback {
	'@type': 'inlineKeyboardButtonTypeCallback';
	/**
Data to be sent to the bot via a callback query.
*/
	data: string;
}

/**
A button that asks for the 2-step verification password of the current user and then sends a callback query to a bot.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeCallbackWithPassword {
	'@type': 'inlineKeyboardButtonTypeCallbackWithPassword';
	/**
Data to be sent to the bot via a callback query.
*/
	data: string;
}

/**
A button with a game that sends a callback query to a bot. This button must be in the first column and row of the
keyboard and can be attached only to a message with content of the type messageGame.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeCallbackGame {
	'@type': 'inlineKeyboardButtonTypeCallbackGame';

}

/**
A button that forces an inline query to the bot to be inserted in the input field.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeSwitchInline {
	'@type': 'inlineKeyboardButtonTypeSwitchInline';
	/**
Inline query to be sent to the bot.
*/
	query: string;
	/**
True, if the inline query must be sent from the current chat.
*/
	in_current_chat?: boolean;
}

/**
A button to buy something. This button must be in the first column and row of the keyboard and can be attached only to a
message with content of the type messageInvoice.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeBuy {
	'@type': 'inlineKeyboardButtonTypeBuy';

}

/**
A button with a user reference to be handled in the same way as textEntityTypeMentionName entities.
Subtype of {@link InlineKeyboardButtonType}.
*/
export interface InlineKeyboardButtonTypeUser {
	'@type': 'inlineKeyboardButtonTypeUser';
	/**
User identifier.
*/
	user_id: number;
}

/**
Represents a single button in an inline keyboard.
*/
export interface InlineKeyboardButton {
	'@type': 'inlineKeyboardButton';
	/**
Text of the button.
*/
	text: string;
	/**
Type of the button.
*/
	type: InlineKeyboardButtonType;
}

/**
Contains a description of a custom keyboard and actions that can be done with it to quickly reply to bots.
Subtype of {@link ReplyMarkup}.
*/
export interface ReplyMarkupRemoveKeyboard {
	'@type': 'replyMarkupRemoveKeyboard';
	/**
True, if the keyboard is removed only for the mentioned users or the target user of a reply.
*/
	is_personal?: boolean;
}

/**
Instructs application to force a reply to this message.
Subtype of {@link ReplyMarkup}.
*/
export interface ReplyMarkupForceReply {
	'@type': 'replyMarkupForceReply';
	/**
True, if a forced reply must automatically be shown to the current user. For outgoing messages, specify true to show the
forced reply only for the mentioned users and for the target user of a reply.
*/
	is_personal?: boolean;
	/**
If non-empty, the placeholder to be shown in the input field when the reply is active; 0-64 characters.
*/
	input_field_placeholder: string;
}

/**
Contains a custom keyboard layout to quickly reply to bots.
Subtype of {@link ReplyMarkup}.
*/
export interface ReplyMarkupShowKeyboard {
	'@type': 'replyMarkupShowKeyboard';
	/**
A list of rows of bot keyboard buttons.
*/
	rows: KeyboardButton[][];
	/**
True, if the application needs to resize the keyboard vertically.
*/
	resize_keyboard?: boolean;
	/**
True, if the application needs to hide the keyboard after use.
*/
	one_time?: boolean;
	/**
True, if the keyboard must automatically be shown to the current user. For outgoing messages, specify true to show the
keyboard only for the mentioned users and for the target user of a reply.
*/
	is_personal?: boolean;
	/**
If non-empty, the placeholder to be shown in the input field when the keyboard is active; 0-64 characters.
*/
	input_field_placeholder: string;
}

/**
Contains an inline keyboard layout.
Subtype of {@link ReplyMarkup}.
*/
export interface ReplyMarkupInlineKeyboard {
	'@type': 'replyMarkupInlineKeyboard';
	/**
A list of rows of inline keyboard buttons.
*/
	rows: InlineKeyboardButton[][];
}

/**
Contains information about an inline button of type inlineKeyboardButtonTypeLoginUrl.
Subtype of {@link LoginUrlInfo}.
*/
export interface LoginUrlInfoOpen {
	'@type': 'loginUrlInfoOpen';
	/**
The URL to open.
*/
	url: string;
	/**
True, if there is no need to show an ordinary open URL confirm.
*/
	skip_confirm?: boolean;
}

/**
An authorization confirmation dialog needs to be shown to the user.
Subtype of {@link LoginUrlInfo}.
*/
export interface LoginUrlInfoRequestConfirmation {
	'@type': 'loginUrlInfoRequestConfirmation';
	/**
An HTTP URL to be opened.
*/
	url: string;
	/**
A domain of the URL.
*/
	domain: string;
	/**
User identifier of a bot linked with the website.
*/
	bot_user_id: number;
	/**
True, if the user needs to be requested to give the permission to the bot to send them messages.
*/
	request_write_access?: boolean;
}

/**
Contains information about a Web App.
*/
export interface WebAppInfo {
	'@type': 'webAppInfo';
	/**
Unique identifier for the Web App launch.
*/
	launch_id: string;
	/**
A Web App URL to open in a web view.
*/
	url: string;
}

/**
Contains information about a message thread.
*/
export interface MessageThreadInfo {
	'@type': 'messageThreadInfo';
	/**
Identifier of the chat to which the message thread belongs.
*/
	chat_id: number;
	/**
Message thread identifier, unique within the chat.
*/
	message_thread_id: number;
	/**
Information about the message thread.
*/
	reply_info: MessageReplyInfo;
	/**
Approximate number of unread messages in the message thread.
*/
	unread_message_count: number;
	/**
The messages from which the thread starts. The messages are returned in a reverse chronological order (i.e., in order of
decreasing message_id).
*/
	messages: Message[];
	/**
A draft of a message in the message thread; may be null.
*/
	draft_message: DraftMessage;
}

/**
Describes a text object inside an instant-view web page.
Subtype of {@link RichText}.
*/
export interface RichTextPlain {
	'@type': 'richTextPlain';
	/**
Text.
*/
	text: string;
}

/**
A bold rich text.
Subtype of {@link RichText}.
*/
export interface RichTextBold {
	'@type': 'richTextBold';
	/**
Text.
*/
	text: RichText;
}

/**
An italicized rich text.
Subtype of {@link RichText}.
*/
export interface RichTextItalic {
	'@type': 'richTextItalic';
	/**
Text.
*/
	text: RichText;
}

/**
An underlined rich text.
Subtype of {@link RichText}.
*/
export interface RichTextUnderline {
	'@type': 'richTextUnderline';
	/**
Text.
*/
	text: RichText;
}

/**
A strikethrough rich text.
Subtype of {@link RichText}.
*/
export interface RichTextStrikethrough {
	'@type': 'richTextStrikethrough';
	/**
Text.
*/
	text: RichText;
}

/**
A fixed-width rich text.
Subtype of {@link RichText}.
*/
export interface RichTextFixed {
	'@type': 'richTextFixed';
	/**
Text.
*/
	text: RichText;
}

/**
A rich text URL link.
Subtype of {@link RichText}.
*/
export interface RichTextUrl {
	'@type': 'richTextUrl';
	/**
Text.
*/
	text: RichText;
	/**
URL.
*/
	url: string;
	/**
True, if the URL has cached instant view server-side.
*/
	is_cached?: boolean;
}

/**
A rich text email link.
Subtype of {@link RichText}.
*/
export interface RichTextEmailAddress {
	'@type': 'richTextEmailAddress';
	/**
Text.
*/
	text: RichText;
	/**
Email address.
*/
	email_address: string;
}

/**
A subscript rich text.
Subtype of {@link RichText}.
*/
export interface RichTextSubscript {
	'@type': 'richTextSubscript';
	/**
Text.
*/
	text: RichText;
}

/**
A superscript rich text.
Subtype of {@link RichText}.
*/
export interface RichTextSuperscript {
	'@type': 'richTextSuperscript';
	/**
Text.
*/
	text: RichText;
}

/**
A marked rich text.
Subtype of {@link RichText}.
*/
export interface RichTextMarked {
	'@type': 'richTextMarked';
	/**
Text.
*/
	text: RichText;
}

/**
A rich text phone number.
Subtype of {@link RichText}.
*/
export interface RichTextPhoneNumber {
	'@type': 'richTextPhoneNumber';
	/**
Text.
*/
	text: RichText;
	/**
Phone number.
*/
	phone_number: string;
}

/**
A small image inside the text.
Subtype of {@link RichText}.
*/
export interface RichTextIcon {
	'@type': 'richTextIcon';
	/**
The image represented as a document. The image can be in GIF, JPEG or PNG format.
*/
	document: Document;
	/**
Width of a bounding box in which the image must be shown; 0 if unknown.
*/
	width: number;
	/**
Height of a bounding box in which the image must be shown; 0 if unknown.
*/
	height: number;
}

/**
A reference to a richTexts object on the same web page.
Subtype of {@link RichText}.
*/
export interface RichTextReference {
	'@type': 'richTextReference';
	/**
The text.
*/
	text: RichText;
	/**
The name of a richTextAnchor object, which is the first element of the target richTexts object.
*/
	anchor_name: string;
	/**
An HTTP URL, opening the reference.
*/
	url: string;
}

/**
An anchor.
Subtype of {@link RichText}.
*/
export interface RichTextAnchor {
	'@type': 'richTextAnchor';
	/**
Anchor name.
*/
	name: string;
}

/**
A link to an anchor on the same web page.
Subtype of {@link RichText}.
*/
export interface RichTextAnchorLink {
	'@type': 'richTextAnchorLink';
	/**
The link text.
*/
	text: RichText;
	/**
The anchor name. If the name is empty, the link must bring back to top.
*/
	anchor_name: string;
	/**
An HTTP URL, opening the anchor.
*/
	url: string;
}

/**
A concatenation of rich texts.
Subtype of {@link RichText}.
*/
export interface RichTexts {
	'@type': 'richTexts';
	/**
Texts.
*/
	texts: RichText[];
}

/**
Contains a caption of an instant view web page block, consisting of a text and a trailing credit.
*/
export interface PageBlockCaption {
	'@type': 'pageBlockCaption';
	/**
Content of the caption.
*/
	text: RichText;
	/**
Block credit (like HTML tag <cite>).
*/
	credit: RichText;
}

/**
Describes an item of a list page block.
*/
export interface PageBlockListItem {
	'@type': 'pageBlockListItem';
	/**
Item label.
*/
	label: string;
	/**
Item blocks.
*/
	page_blocks: PageBlock[];
}

/**
Describes a horizontal alignment of a table cell content.
Subtype of {@link PageBlockHorizontalAlignment}.
*/
export interface PageBlockHorizontalAlignmentLeft {
	'@type': 'pageBlockHorizontalAlignmentLeft';

}

/**
The content must be center-aligned.
Subtype of {@link PageBlockHorizontalAlignment}.
*/
export interface PageBlockHorizontalAlignmentCenter {
	'@type': 'pageBlockHorizontalAlignmentCenter';

}

/**
The content must be right-aligned.
Subtype of {@link PageBlockHorizontalAlignment}.
*/
export interface PageBlockHorizontalAlignmentRight {
	'@type': 'pageBlockHorizontalAlignmentRight';

}

/**
Describes a Vertical alignment of a table cell content.
Subtype of {@link PageBlockVerticalAlignment}.
*/
export interface PageBlockVerticalAlignmentTop {
	'@type': 'pageBlockVerticalAlignmentTop';

}

/**
The content must be middle-aligned.
Subtype of {@link PageBlockVerticalAlignment}.
*/
export interface PageBlockVerticalAlignmentMiddle {
	'@type': 'pageBlockVerticalAlignmentMiddle';

}

/**
The content must be bottom-aligned.
Subtype of {@link PageBlockVerticalAlignment}.
*/
export interface PageBlockVerticalAlignmentBottom {
	'@type': 'pageBlockVerticalAlignmentBottom';

}

/**
Represents a cell of a table.
*/
export interface PageBlockTableCell {
	'@type': 'pageBlockTableCell';
	/**
Cell text; may be null. If the text is null, then the cell must be invisible.
*/
	text: RichText;
	/**
True, if it is a header cell.
*/
	is_header?: boolean;
	/**
The number of columns the cell spans.
*/
	colspan: number;
	/**
The number of rows the cell spans.
*/
	rowspan: number;
	/**
Horizontal cell content alignment.
*/
	align: PageBlockHorizontalAlignment;
	/**
Vertical cell content alignment.
*/
	valign: PageBlockVerticalAlignment;
}

/**
Contains information about a related article.
*/
export interface PageBlockRelatedArticle {
	'@type': 'pageBlockRelatedArticle';
	/**
Related article URL.
*/
	url: string;
	/**
Article title; may be empty.
*/
	title: string;
	/**
Contains information about a related article.
*/
	description: string;
	/**
Article photo; may be null.
*/
	photo: Photo;
	/**
Article author; may be empty.
*/
	author: string;
	/**
Point in time (Unix timestamp) when the article was published; 0 if unknown.
*/
	publish_date: number;
}

/**
Describes a block of an instant view web page.
Subtype of {@link PageBlock}.
*/
export interface PageBlockTitle {
	'@type': 'pageBlockTitle';
	/**
Title.
*/
	title: RichText;
}

/**
The subtitle of a page.
Subtype of {@link PageBlock}.
*/
export interface PageBlockSubtitle {
	'@type': 'pageBlockSubtitle';
	/**
Subtitle.
*/
	subtitle: RichText;
}

/**
The author and publishing date of a page.
Subtype of {@link PageBlock}.
*/
export interface PageBlockAuthorDate {
	'@type': 'pageBlockAuthorDate';
	/**
Author.
*/
	author: RichText;
	/**
Point in time (Unix timestamp) when the article was published; 0 if unknown.
*/
	publish_date: number;
}

/**
A header.
Subtype of {@link PageBlock}.
*/
export interface PageBlockHeader {
	'@type': 'pageBlockHeader';
	/**
Header.
*/
	header: RichText;
}

/**
A subheader.
Subtype of {@link PageBlock}.
*/
export interface PageBlockSubheader {
	'@type': 'pageBlockSubheader';
	/**
Subheader.
*/
	subheader: RichText;
}

/**
A kicker.
Subtype of {@link PageBlock}.
*/
export interface PageBlockKicker {
	'@type': 'pageBlockKicker';
	/**
Kicker.
*/
	kicker: RichText;
}

/**
A text paragraph.
Subtype of {@link PageBlock}.
*/
export interface PageBlockParagraph {
	'@type': 'pageBlockParagraph';
	/**
Paragraph text.
*/
	text: RichText;
}

/**
A preformatted text paragraph.
Subtype of {@link PageBlock}.
*/
export interface PageBlockPreformatted {
	'@type': 'pageBlockPreformatted';
	/**
Paragraph text.
*/
	text: RichText;
	/**
Programming language for which the text needs to be formatted.
*/
	language: string;
}

/**
The footer of a page.
Subtype of {@link PageBlock}.
*/
export interface PageBlockFooter {
	'@type': 'pageBlockFooter';
	/**
Footer.
*/
	footer: RichText;
}

/**
An empty block separating a page.
Subtype of {@link PageBlock}.
*/
export interface PageBlockDivider {
	'@type': 'pageBlockDivider';

}

/**
An invisible anchor on a page, which can be used in a URL to open the page from the specified anchor.
Subtype of {@link PageBlock}.
*/
export interface PageBlockAnchor {
	'@type': 'pageBlockAnchor';
	/**
Name of the anchor.
*/
	name: string;
}

/**
A list of data blocks.
Subtype of {@link PageBlock}.
*/
export interface PageBlockList {
	'@type': 'pageBlockList';
	/**
The items of the list.
*/
	items: PageBlockListItem[];
}

/**
A block quote.
Subtype of {@link PageBlock}.
*/
export interface PageBlockBlockQuote {
	'@type': 'pageBlockBlockQuote';
	/**
Quote text.
*/
	text: RichText;
	/**
Quote credit.
*/
	credit: RichText;
}

/**
A pull quote.
Subtype of {@link PageBlock}.
*/
export interface PageBlockPullQuote {
	'@type': 'pageBlockPullQuote';
	/**
Quote text.
*/
	text: RichText;
	/**
Quote credit.
*/
	credit: RichText;
}

/**
An animation.
Subtype of {@link PageBlock}.
*/
export interface PageBlockAnimation {
	'@type': 'pageBlockAnimation';
	/**
Animation file; may be null.
*/
	animation: Animation;
	/**
Animation caption.
*/
	caption: PageBlockCaption;
	/**
True, if the animation must be played automatically.
*/
	need_autoplay?: boolean;
}

/**
An audio file.
Subtype of {@link PageBlock}.
*/
export interface PageBlockAudio {
	'@type': 'pageBlockAudio';
	/**
Audio file; may be null.
*/
	audio: Audio;
	/**
Audio file caption.
*/
	caption: PageBlockCaption;
}

/**
A photo.
Subtype of {@link PageBlock}.
*/
export interface PageBlockPhoto {
	'@type': 'pageBlockPhoto';
	/**
Photo file; may be null.
*/
	photo: Photo;
	/**
Photo caption.
*/
	caption: PageBlockCaption;
	/**
URL that needs to be opened when the photo is clicked.
*/
	url: string;
}

/**
A video.
Subtype of {@link PageBlock}.
*/
export interface PageBlockVideo {
	'@type': 'pageBlockVideo';
	/**
Video file; may be null.
*/
	video: Video;
	/**
Video caption.
*/
	caption: PageBlockCaption;
	/**
True, if the video must be played automatically.
*/
	need_autoplay?: boolean;
	/**
True, if the video must be looped.
*/
	is_looped?: boolean;
}

/**
A voice note.
Subtype of {@link PageBlock}.
*/
export interface PageBlockVoiceNote {
	'@type': 'pageBlockVoiceNote';
	/**
Voice note; may be null.
*/
	voice_note: VoiceNote;
	/**
Voice note caption.
*/
	caption: PageBlockCaption;
}

/**
A page cover.
Subtype of {@link PageBlock}.
*/
export interface PageBlockCover {
	'@type': 'pageBlockCover';
	/**
Cover.
*/
	cover: PageBlock;
}

/**
An embedded web page.
Subtype of {@link PageBlock}.
*/
export interface PageBlockEmbedded {
	'@type': 'pageBlockEmbedded';
	/**
Web page URL, if available.
*/
	url: string;
	/**
HTML-markup of the embedded page.
*/
	html: string;
	/**
Poster photo, if available; may be null.
*/
	poster_photo: Photo;
	/**
Block width; 0 if unknown.
*/
	width: number;
	/**
Block height; 0 if unknown.
*/
	height: number;
	/**
Block caption.
*/
	caption: PageBlockCaption;
	/**
True, if the block must be full width.
*/
	is_full_width?: boolean;
	/**
True, if scrolling needs to be allowed.
*/
	allow_scrolling?: boolean;
}

/**
An embedded post.
Subtype of {@link PageBlock}.
*/
export interface PageBlockEmbeddedPost {
	'@type': 'pageBlockEmbeddedPost';
	/**
Web page URL.
*/
	url: string;
	/**
Post author.
*/
	author: string;
	/**
Post author photo; may be null.
*/
	author_photo: Photo;
	/**
Point in time (Unix timestamp) when the post was created; 0 if unknown.
*/
	date: number;
	/**
Post content.
*/
	page_blocks: PageBlock[];
	/**
Post caption.
*/
	caption: PageBlockCaption;
}

/**
A collage.
Subtype of {@link PageBlock}.
*/
export interface PageBlockCollage {
	'@type': 'pageBlockCollage';
	/**
Collage item contents.
*/
	page_blocks: PageBlock[];
	/**
Block caption.
*/
	caption: PageBlockCaption;
}

/**
A slideshow.
Subtype of {@link PageBlock}.
*/
export interface PageBlockSlideshow {
	'@type': 'pageBlockSlideshow';
	/**
Slideshow item contents.
*/
	page_blocks: PageBlock[];
	/**
Block caption.
*/
	caption: PageBlockCaption;
}

/**
A link to a chat.
Subtype of {@link PageBlock}.
*/
export interface PageBlockChatLink {
	'@type': 'pageBlockChatLink';
	/**
Chat title.
*/
	title: string;
	/**
Chat photo; may be null.
*/
	photo: ChatPhotoInfo;
	/**
Chat username by which all other information about the chat can be resolved.
*/
	username: string;
}

/**
A table.
Subtype of {@link PageBlock}.
*/
export interface PageBlockTable {
	'@type': 'pageBlockTable';
	/**
Table caption.
*/
	caption: RichText;
	/**
Table cells.
*/
	cells: PageBlockTableCell[][];
	/**
True, if the table is bordered.
*/
	is_bordered?: boolean;
	/**
True, if the table is striped.
*/
	is_striped?: boolean;
}

/**
A collapsible block.
Subtype of {@link PageBlock}.
*/
export interface PageBlockDetails {
	'@type': 'pageBlockDetails';
	/**
Always visible heading for the block.
*/
	header: RichText;
	/**
Block contents.
*/
	page_blocks: PageBlock[];
	/**
True, if the block is open by default.
*/
	is_open?: boolean;
}

/**
Related articles.
Subtype of {@link PageBlock}.
*/
export interface PageBlockRelatedArticles {
	'@type': 'pageBlockRelatedArticles';
	/**
Block header.
*/
	header: RichText;
	/**
List of related articles.
*/
	articles: PageBlockRelatedArticle[];
}

/**
A map.
Subtype of {@link PageBlock}.
*/
export interface PageBlockMap {
	'@type': 'pageBlockMap';
	/**
Location of the map center.
*/
	location: Location;
	/**
Map zoom level.
*/
	zoom: number;
	/**
Map width.
*/
	width: number;
	/**
Map height.
*/
	height: number;
	/**
Block caption.
*/
	caption: PageBlockCaption;
}

/**
Describes an instant view page for a web page.
*/
export interface WebPageInstantView {
	'@type': 'webPageInstantView';
	/**
Content of the web page.
*/
	page_blocks: PageBlock[];
	/**
Number of the instant view views; 0 if unknown.
*/
	view_count: number;
	/**
Version of the instant view; currently, can be 1 or 2.
*/
	version: number;
	/**
True, if the instant view must be shown from right to left.
*/
	is_rtl?: boolean;
	/**
True, if the instant view contains the full page. A network request might be needed to get the full web page instant
view.
*/
	is_full?: boolean;
	/**
An internal link to be opened to leave feedback about the instant view.
*/
	feedback_link: InternalLinkType;
}

/**
Describes a web page preview.
*/
export interface WebPage {
	'@type': 'webPage';
	/**
Original URL of the link.
*/
	url: string;
	/**
URL to display.
*/
	display_url: string;
	/**
Type of the web page. Can be: article, photo, audio, video, document, profile, app, or something else.
*/
	type: string;
	/**
Short name of the site (e.g., Google Docs, App Store).
*/
	site_name: string;
	/**
Title of the content.
*/
	title: string;
	/**
Describes a web page preview.
*/
	description: FormattedText;
	/**
Image representing the content; may be null.
*/
	photo: Photo;
	/**
URL to show in the embedded preview.
*/
	embed_url: string;
	/**
MIME type of the embedded preview, (e.g., text/html or video/mp4).
*/
	embed_type: string;
	/**
Width of the embedded preview.
*/
	embed_width: number;
	/**
Height of the embedded preview.
*/
	embed_height: number;
	/**
Duration of the content, in seconds.
*/
	duration: number;
	/**
Author of the content.
*/
	author: string;
	/**
Preview of the content as an animation, if available; may be null.
*/
	animation: Animation;
	/**
Preview of the content as an audio file, if available; may be null.
*/
	audio: Audio;
	/**
Preview of the content as a document, if available; may be null.
*/
	document: Document;
	/**
Preview of the content as a sticker for small WEBP files, if available; may be null.
*/
	sticker: Sticker;
	/**
Preview of the content as a video, if available; may be null.
*/
	video: Video;
	/**
Preview of the content as a video note, if available; may be null.
*/
	video_note: VideoNote;
	/**
Preview of the content as a voice note, if available; may be null.
*/
	voice_note: VoiceNote;
	/**
Version of instant view, available for the web page (currently, can be 1 or 2), 0 if none.
*/
	instant_view_version: number;
}

/**
Contains information about a country.
*/
export interface CountryInfo {
	'@type': 'countryInfo';
	/**
A two-letter ISO 3166-1 alpha-2 country code.
*/
	country_code: string;
	/**
Native name of the country.
*/
	name: string;
	/**
English name of the country.
*/
	english_name: string;
	/**
True, if the country must be hidden from the list of all countries.
*/
	is_hidden?: boolean;
	/**
List of country calling codes.
*/
	calling_codes: string[];
}

/**
Contains information about countries.
*/
export interface Countries {
	'@type': 'countries';
	/**
The list of countries.
*/
	countries: CountryInfo[];
}

/**
Contains information about a phone number.
*/
export interface PhoneNumberInfo {
	'@type': 'phoneNumberInfo';
	/**
Information about the country to which the phone number belongs; may be null.
*/
	country: CountryInfo;
	/**
The part of the phone number denoting country calling code or its part.
*/
	country_calling_code: string;
	/**
The phone number without country calling code formatted accordingly to local rules. Expected digits are returned as '-',
but even more digits might be entered by the user.
*/
	formatted_phone_number: string;
}

/**
Describes an action associated with a bank card number.
*/
export interface BankCardActionOpenUrl {
	'@type': 'bankCardActionOpenUrl';
	/**
Action text.
*/
	text: string;
	/**
The URL to be opened.
*/
	url: string;
}

/**
Information about a bank card.
*/
export interface BankCardInfo {
	'@type': 'bankCardInfo';
	/**
Title of the bank card description.
*/
	title: string;
	/**
Actions that can be done with the bank card number.
*/
	actions: BankCardActionOpenUrl[];
}

/**
Describes an address.
*/
export interface Address {
	'@type': 'address';
	/**
A two-letter ISO 3166-1 alpha-2 country code.
*/
	country_code: string;
	/**
State, if applicable.
*/
	state: string;
	/**
City.
*/
	city: string;
	/**
First line of the address.
*/
	street_line1: string;
	/**
Second line of the address.
*/
	street_line2: string;
	/**
Address postal code.
*/
	postal_code: string;
}

/**
Contains parameters of the application theme.
*/
export interface ThemeParameters {
	'@type': 'themeParameters';
	/**
A color of the background in the RGB24 format.
*/
	background_color: number;
	/**
A secondary color for the background in the RGB24 format.
*/
	secondary_background_color: number;
	/**
A color of text in the RGB24 format.
*/
	text_color: number;
	/**
A color of hints in the RGB24 format.
*/
	hint_color: number;
	/**
A color of links in the RGB24 format.
*/
	link_color: number;
	/**
A color of the buttons in the RGB24 format.
*/
	button_color: number;
	/**
A color of text on the buttons in the RGB24 format.
*/
	button_text_color: number;
}

/**
Portion of the price of a product (e.g., "delivery cost", "tax amount").
*/
export interface LabeledPricePart {
	'@type': 'labeledPricePart';
	/**
Label for this portion of the product price.
*/
	label: string;
	/**
Currency amount in the smallest units of the currency.
*/
	amount: number;
}

/**
Product invoice.
*/
export interface Invoice {
	'@type': 'invoice';
	/**
ISO 4217 currency code.
*/
	currency: string;
	/**
A list of objects used to calculate the total price of the product.
*/
	price_parts: LabeledPricePart[];
	/**
The maximum allowed amount of tip in the smallest units of the currency.
*/
	max_tip_amount: number;
	/**
Suggested amounts of tip in the smallest units of the currency.
*/
	suggested_tip_amounts: number[];
	/**
An HTTP URL with terms of service for recurring payments. If non-empty, the invoice payment will result in recurring
payments and the user must accept the terms of service before allowed to pay.
*/
	recurring_payment_terms_of_service_url: string;
	/**
True, if the payment is a test payment.
*/
	is_test?: boolean;
	/**
True, if the user's name is needed for payment.
*/
	need_name?: boolean;
	/**
True, if the user's phone number is needed for payment.
*/
	need_phone_number?: boolean;
	/**
True, if the user's email address is needed for payment.
*/
	need_email_address?: boolean;
	/**
True, if the user's shipping address is needed for payment.
*/
	need_shipping_address?: boolean;
	/**
True, if the user's phone number will be sent to the provider.
*/
	send_phone_number_to_provider?: boolean;
	/**
True, if the user's email address will be sent to the provider.
*/
	send_email_address_to_provider?: boolean;
	/**
True, if the total price depends on the shipping method.
*/
	is_flexible?: boolean;
}

/**
Order information.
*/
export interface OrderInfo {
	'@type': 'orderInfo';
	/**
Name of the user.
*/
	name: string;
	/**
Phone number of the user.
*/
	phone_number: string;
	/**
Email address of the user.
*/
	email_address: string;
	/**
Shipping address for this order; may be null.
*/
	shipping_address: Address;
}

/**
One shipping option.
*/
export interface ShippingOption {
	'@type': 'shippingOption';
	/**
Shipping option identifier.
*/
	id: string;
	/**
Option title.
*/
	title: string;
	/**
A list of objects used to calculate the total shipping costs.
*/
	price_parts: LabeledPricePart[];
}

/**
Contains information about saved payment credentials.
*/
export interface SavedCredentials {
	'@type': 'savedCredentials';
	/**
Unique identifier of the saved credentials.
*/
	id: string;
	/**
Title of the saved credentials.
*/
	title: string;
}

/**
Contains information about the payment method chosen by the user.
Subtype of {@link InputCredentials}.
*/
export interface InputCredentialsSaved {
	'@type': 'inputCredentialsSaved';
	/**
Identifier of the saved credentials.
*/
	saved_credentials_id: string;
}

/**
Applies if a user enters new credentials on a payment provider website.
Subtype of {@link InputCredentials}.
*/
export interface InputCredentialsNew {
	'@type': 'inputCredentialsNew';
	/**
JSON-encoded data with the credential identifier from the payment provider.
*/
	data: string;
	/**
True, if the credential identifier can be saved on the server side.
*/
	allow_save?: boolean;
}

/**
Applies if a user enters new credentials using Apple Pay.
Subtype of {@link InputCredentials}.
*/
export interface InputCredentialsApplePay {
	'@type': 'inputCredentialsApplePay';
	/**
JSON-encoded data with the credential identifier.
*/
	data: string;
}

/**
Applies if a user enters new credentials using Google Pay.
Subtype of {@link InputCredentials}.
*/
export interface InputCredentialsGooglePay {
	'@type': 'inputCredentialsGooglePay';
	/**
JSON-encoded data with the credential identifier.
*/
	data: string;
}

/**
Contains information about a payment provider.
Subtype of {@link PaymentProvider}.
*/
export interface PaymentProviderSmartGlocal {
	'@type': 'paymentProviderSmartGlocal';
	/**
Public payment token.
*/
	public_token: string;
}

/**
Stripe payment provider.
Subtype of {@link PaymentProvider}.
*/
export interface PaymentProviderStripe {
	'@type': 'paymentProviderStripe';
	/**
Stripe API publishable key.
*/
	publishable_key: string;
	/**
True, if the user country must be provided.
*/
	need_country?: boolean;
	/**
True, if the user ZIP/postal code must be provided.
*/
	need_postal_code?: boolean;
	/**
True, if the cardholder name must be provided.
*/
	need_cardholder_name?: boolean;
}

/**
Some other payment provider, for which a web payment form must be shown.
Subtype of {@link PaymentProvider}.
*/
export interface PaymentProviderOther {
	'@type': 'paymentProviderOther';
	/**
Payment form URL.
*/
	url: string;
}

/**
Describes an additional payment option.
*/
export interface PaymentOption {
	'@type': 'paymentOption';
	/**
Title for the payment option.
*/
	title: string;
	/**
Payment form URL to be opened in a web view.
*/
	url: string;
}

/**
Contains information about an invoice payment form.
*/
export interface PaymentForm {
	'@type': 'paymentForm';
	/**
The payment form identifier.
*/
	id: string;
	/**
Full information about the invoice.
*/
	invoice: Invoice;
	/**
User identifier of the seller bot.
*/
	seller_bot_user_id: number;
	/**
User identifier of the payment provider bot.
*/
	payment_provider_user_id: number;
	/**
Information about the payment provider.
*/
	payment_provider: PaymentProvider;
	/**
The list of additional payment options.
*/
	additional_payment_options: PaymentOption[];
	/**
Saved server-side order information; may be null.
*/
	saved_order_info: OrderInfo;
	/**
The list of saved payment credentials.
*/
	saved_credentials: SavedCredentials[];
	/**
True, if the user can choose to save credentials.
*/
	can_save_credentials?: boolean;
	/**
True, if the user will be able to save credentials, if sets up a 2-step verification password.
*/
	need_password?: boolean;
	/**
Product title.
*/
	product_title: string;
	/**
Product description.
*/
	product_description: FormattedText;
	/**
Product photo; may be null.
*/
	product_photo: Photo;
}

/**
Contains a temporary identifier of validated order information, which is stored for one hour. Also contains the
available shipping options.
*/
export interface ValidatedOrderInfo {
	'@type': 'validatedOrderInfo';
	/**
Temporary identifier of the order information.
*/
	order_info_id: string;
	/**
Available shipping options.
*/
	shipping_options: ShippingOption[];
}

/**
Contains the result of a payment request.
*/
export interface PaymentResult {
	'@type': 'paymentResult';
	/**
True, if the payment request was successful; otherwise the verification_url will be non-empty.
*/
	success?: boolean;
	/**
URL for additional payment credentials verification.
*/
	verification_url: string;
}

/**
Contains information about a successful payment.
*/
export interface PaymentReceipt {
	'@type': 'paymentReceipt';
	/**
Product title.
*/
	title: string;
	/**
Contains information about a successful payment.
*/
	description: FormattedText;
	/**
Product photo; may be null.
*/
	photo: Photo;
	/**
Point in time (Unix timestamp) when the payment was made.
*/
	date: number;
	/**
User identifier of the seller bot.
*/
	seller_bot_user_id: number;
	/**
User identifier of the payment provider bot.
*/
	payment_provider_user_id: number;
	/**
Information about the invoice.
*/
	invoice: Invoice;
	/**
Order information; may be null.
*/
	order_info: OrderInfo;
	/**
Chosen shipping option; may be null.
*/
	shipping_option: ShippingOption;
	/**
Title of the saved credentials chosen by the buyer.
*/
	credentials_title: string;
	/**
The amount of tip chosen by the buyer in the smallest units of the currency.
*/
	tip_amount: number;
}

/**
Describes an invoice to process.
Subtype of {@link InputInvoice}.
*/
export interface InputInvoiceMessage {
	'@type': 'inputInvoiceMessage';
	/**
Chat identifier of the message.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
}

/**
An invoice from a link of the type internalLinkTypeInvoice.
Subtype of {@link InputInvoice}.
*/
export interface InputInvoiceName {
	'@type': 'inputInvoiceName';
	/**
Name of the invoice.
*/
	name: string;
}

/**
Describes a media, which is attached to an invoice.
Subtype of {@link MessageExtendedMedia}.
*/
export interface MessageExtendedMediaPreview {
	'@type': 'messageExtendedMediaPreview';
	/**
Media width; 0 if unknown.
*/
	width: number;
	/**
Media height; 0 if unknown.
*/
	height: number;
	/**
Media duration; 0 if unknown.
*/
	duration: number;
	/**
Media minithumbnail; may be null.
*/
	minithumbnail: Minithumbnail;
	/**
Media caption.
*/
	caption: FormattedText;
}

/**
The media is a photo.
Subtype of {@link MessageExtendedMedia}.
*/
export interface MessageExtendedMediaPhoto {
	'@type': 'messageExtendedMediaPhoto';
	/**
The photo.
*/
	photo: Photo;
	/**
Photo caption.
*/
	caption: FormattedText;
}

/**
The media is a video.
Subtype of {@link MessageExtendedMedia}.
*/
export interface MessageExtendedMediaVideo {
	'@type': 'messageExtendedMediaVideo';
	/**
The video.
*/
	video: Video;
	/**
Photo caption.
*/
	caption: FormattedText;
}

/**
The media is unuspported.
Subtype of {@link MessageExtendedMedia}.
*/
export interface MessageExtendedMediaUnsupported {
	'@type': 'messageExtendedMediaUnsupported';
	/**
Media caption.
*/
	caption: FormattedText;
}

/**
File with the date it was uploaded.
*/
export interface DatedFile {
	'@type': 'datedFile';
	/**
The file.
*/
	file: File;
	/**
Point in time (Unix timestamp) when the file was uploaded.
*/
	date: number;
}

/**
Contains the type of a Telegram Passport element.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypePersonalDetails {
	'@type': 'passportElementTypePersonalDetails';

}

/**
A Telegram Passport element containing the user's passport.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypePassport {
	'@type': 'passportElementTypePassport';

}

/**
A Telegram Passport element containing the user's driver license.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeDriverLicense {
	'@type': 'passportElementTypeDriverLicense';

}

/**
A Telegram Passport element containing the user's identity card.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeIdentityCard {
	'@type': 'passportElementTypeIdentityCard';

}

/**
A Telegram Passport element containing the user's internal passport.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeInternalPassport {
	'@type': 'passportElementTypeInternalPassport';

}

/**
A Telegram Passport element containing the user's address.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeAddress {
	'@type': 'passportElementTypeAddress';

}

/**
A Telegram Passport element containing the user's utility bill.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeUtilityBill {
	'@type': 'passportElementTypeUtilityBill';

}

/**
A Telegram Passport element containing the user's bank statement.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeBankStatement {
	'@type': 'passportElementTypeBankStatement';

}

/**
A Telegram Passport element containing the user's rental agreement.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeRentalAgreement {
	'@type': 'passportElementTypeRentalAgreement';

}

/**
A Telegram Passport element containing the registration page of the user's passport.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypePassportRegistration {
	'@type': 'passportElementTypePassportRegistration';

}

/**
A Telegram Passport element containing the user's temporary registration.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeTemporaryRegistration {
	'@type': 'passportElementTypeTemporaryRegistration';

}

/**
A Telegram Passport element containing the user's phone number.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypePhoneNumber {
	'@type': 'passportElementTypePhoneNumber';

}

/**
A Telegram Passport element containing the user's email address.
Subtype of {@link PassportElementType}.
*/
export interface PassportElementTypeEmailAddress {
	'@type': 'passportElementTypeEmailAddress';

}

/**
Represents a date according to the Gregorian calendar.
*/
export interface Date {
	'@type': 'date';
	/**
Day of the month; 1-31.
*/
	day: number;
	/**
Month; 1-12.
*/
	month: number;
	/**
Year; 1-9999.
*/
	year: number;
}

/**
Contains the user's personal details.
*/
export interface PersonalDetails {
	'@type': 'personalDetails';
	/**
First name of the user written in English; 1-255 characters.
*/
	first_name: string;
	/**
Middle name of the user written in English; 0-255 characters.
*/
	middle_name: string;
	/**
Last name of the user written in English; 1-255 characters.
*/
	last_name: string;
	/**
Native first name of the user; 1-255 characters.
*/
	native_first_name: string;
	/**
Native middle name of the user; 0-255 characters.
*/
	native_middle_name: string;
	/**
Native last name of the user; 1-255 characters.
*/
	native_last_name: string;
	/**
Birthdate of the user.
*/
	birthdate: Date;
	/**
Gender of the user, "male" or "female".
*/
	gender: string;
	/**
A two-letter ISO 3166-1 alpha-2 country code of the user's country.
*/
	country_code: string;
	/**
A two-letter ISO 3166-1 alpha-2 country code of the user's residence country.
*/
	residence_country_code: string;
}

/**
An identity document.
*/
export interface IdentityDocument {
	'@type': 'identityDocument';
	/**
Document number; 1-24 characters.
*/
	number: string;
	/**
Document expiry date; may be null if not applicable.
*/
	expiry_date: Date;
	/**
Front side of the document.
*/
	front_side: DatedFile;
	/**
Reverse side of the document; only for driver license and identity card; may be null.
*/
	reverse_side: DatedFile;
	/**
Selfie with the document; may be null.
*/
	selfie: DatedFile;
	/**
List of files containing a certified English translation of the document.
*/
	translation: DatedFile[];
}

/**
An identity document to be saved to Telegram Passport.
*/
export interface InputIdentityDocument {
	'@type': 'inputIdentityDocument';
	/**
Document number; 1-24 characters.
*/
	number: string;
	/**
Document expiry date; pass null if not applicable.
*/
	expiry_date: Date;
	/**
Front side of the document.
*/
	front_side: InputFile;
	/**
Reverse side of the document; only for driver license and identity card; pass null otherwise.
*/
	reverse_side: InputFile;
	/**
Selfie with the document; pass null if unavailable.
*/
	selfie: InputFile;
	/**
List of files containing a certified English translation of the document.
*/
	translation: InputFile[];
}

/**
A personal document, containing some information about a user.
*/
export interface PersonalDocument {
	'@type': 'personalDocument';
	/**
List of files containing the pages of the document.
*/
	files: DatedFile[];
	/**
List of files containing a certified English translation of the document.
*/
	translation: DatedFile[];
}

/**
A personal document to be saved to Telegram Passport.
*/
export interface InputPersonalDocument {
	'@type': 'inputPersonalDocument';
	/**
List of files containing the pages of the document.
*/
	files: InputFile[];
	/**
List of files containing a certified English translation of the document.
*/
	translation: InputFile[];
}

/**
Contains information about a Telegram Passport element.
Subtype of {@link PassportElement}.
*/
export interface PassportElementPersonalDetails {
	'@type': 'passportElementPersonalDetails';
	/**
Personal details of the user.
*/
	personal_details: PersonalDetails;
}

/**
A Telegram Passport element containing the user's passport.
Subtype of {@link PassportElement}.
*/
export interface PassportElementPassport {
	'@type': 'passportElementPassport';
	/**
Passport.
*/
	passport: IdentityDocument;
}

/**
A Telegram Passport element containing the user's driver license.
Subtype of {@link PassportElement}.
*/
export interface PassportElementDriverLicense {
	'@type': 'passportElementDriverLicense';
	/**
Driver license.
*/
	driver_license: IdentityDocument;
}

/**
A Telegram Passport element containing the user's identity card.
Subtype of {@link PassportElement}.
*/
export interface PassportElementIdentityCard {
	'@type': 'passportElementIdentityCard';
	/**
Identity card.
*/
	identity_card: IdentityDocument;
}

/**
A Telegram Passport element containing the user's internal passport.
Subtype of {@link PassportElement}.
*/
export interface PassportElementInternalPassport {
	'@type': 'passportElementInternalPassport';
	/**
Internal passport.
*/
	internal_passport: IdentityDocument;
}

/**
A Telegram Passport element containing the user's address.
Subtype of {@link PassportElement}.
*/
export interface PassportElementAddress {
	'@type': 'passportElementAddress';
	/**
Address.
*/
	address: Address;
}

/**
A Telegram Passport element containing the user's utility bill.
Subtype of {@link PassportElement}.
*/
export interface PassportElementUtilityBill {
	'@type': 'passportElementUtilityBill';
	/**
Utility bill.
*/
	utility_bill: PersonalDocument;
}

/**
A Telegram Passport element containing the user's bank statement.
Subtype of {@link PassportElement}.
*/
export interface PassportElementBankStatement {
	'@type': 'passportElementBankStatement';
	/**
Bank statement.
*/
	bank_statement: PersonalDocument;
}

/**
A Telegram Passport element containing the user's rental agreement.
Subtype of {@link PassportElement}.
*/
export interface PassportElementRentalAgreement {
	'@type': 'passportElementRentalAgreement';
	/**
Rental agreement.
*/
	rental_agreement: PersonalDocument;
}

/**
A Telegram Passport element containing the user's passport registration pages.
Subtype of {@link PassportElement}.
*/
export interface PassportElementPassportRegistration {
	'@type': 'passportElementPassportRegistration';
	/**
Passport registration pages.
*/
	passport_registration: PersonalDocument;
}

/**
A Telegram Passport element containing the user's temporary registration.
Subtype of {@link PassportElement}.
*/
export interface PassportElementTemporaryRegistration {
	'@type': 'passportElementTemporaryRegistration';
	/**
Temporary registration.
*/
	temporary_registration: PersonalDocument;
}

/**
A Telegram Passport element containing the user's phone number.
Subtype of {@link PassportElement}.
*/
export interface PassportElementPhoneNumber {
	'@type': 'passportElementPhoneNumber';
	/**
Phone number.
*/
	phone_number: string;
}

/**
A Telegram Passport element containing the user's email address.
Subtype of {@link PassportElement}.
*/
export interface PassportElementEmailAddress {
	'@type': 'passportElementEmailAddress';
	/**
Email address.
*/
	email_address: string;
}

/**
Contains information about a Telegram Passport element to be saved.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementPersonalDetails {
	'@type': 'inputPassportElementPersonalDetails';
	/**
Personal details of the user.
*/
	personal_details: PersonalDetails;
}

/**
A Telegram Passport element to be saved containing the user's passport.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementPassport {
	'@type': 'inputPassportElementPassport';
	/**
The passport to be saved.
*/
	passport: InputIdentityDocument;
}

/**
A Telegram Passport element to be saved containing the user's driver license.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementDriverLicense {
	'@type': 'inputPassportElementDriverLicense';
	/**
The driver license to be saved.
*/
	driver_license: InputIdentityDocument;
}

/**
A Telegram Passport element to be saved containing the user's identity card.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementIdentityCard {
	'@type': 'inputPassportElementIdentityCard';
	/**
The identity card to be saved.
*/
	identity_card: InputIdentityDocument;
}

/**
A Telegram Passport element to be saved containing the user's internal passport.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementInternalPassport {
	'@type': 'inputPassportElementInternalPassport';
	/**
The internal passport to be saved.
*/
	internal_passport: InputIdentityDocument;
}

/**
A Telegram Passport element to be saved containing the user's address.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementAddress {
	'@type': 'inputPassportElementAddress';
	/**
The address to be saved.
*/
	address: Address;
}

/**
A Telegram Passport element to be saved containing the user's utility bill.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementUtilityBill {
	'@type': 'inputPassportElementUtilityBill';
	/**
The utility bill to be saved.
*/
	utility_bill: InputPersonalDocument;
}

/**
A Telegram Passport element to be saved containing the user's bank statement.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementBankStatement {
	'@type': 'inputPassportElementBankStatement';
	/**
The bank statement to be saved.
*/
	bank_statement: InputPersonalDocument;
}

/**
A Telegram Passport element to be saved containing the user's rental agreement.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementRentalAgreement {
	'@type': 'inputPassportElementRentalAgreement';
	/**
The rental agreement to be saved.
*/
	rental_agreement: InputPersonalDocument;
}

/**
A Telegram Passport element to be saved containing the user's passport registration.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementPassportRegistration {
	'@type': 'inputPassportElementPassportRegistration';
	/**
The passport registration page to be saved.
*/
	passport_registration: InputPersonalDocument;
}

/**
A Telegram Passport element to be saved containing the user's temporary registration.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementTemporaryRegistration {
	'@type': 'inputPassportElementTemporaryRegistration';
	/**
The temporary registration document to be saved.
*/
	temporary_registration: InputPersonalDocument;
}

/**
A Telegram Passport element to be saved containing the user's phone number.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementPhoneNumber {
	'@type': 'inputPassportElementPhoneNumber';
	/**
The phone number to be saved.
*/
	phone_number: string;
}

/**
A Telegram Passport element to be saved containing the user's email address.
Subtype of {@link InputPassportElement}.
*/
export interface InputPassportElementEmailAddress {
	'@type': 'inputPassportElementEmailAddress';
	/**
The email address to be saved.
*/
	email_address: string;
}

/**
Contains information about saved Telegram Passport elements.
*/
export interface PassportElements {
	'@type': 'passportElements';
	/**
Telegram Passport elements.
*/
	elements: PassportElement[];
}

/**
Contains the description of an error in a Telegram Passport element.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceUnspecified {
	'@type': 'passportElementErrorSourceUnspecified';

}

/**
One of the data fields contains an error. The error will be considered resolved when the value of the field changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceDataField {
	'@type': 'passportElementErrorSourceDataField';
	/**
Field name.
*/
	field_name: string;
}

/**
The front side of the document contains an error. The error will be considered resolved when the file with the front
side changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceFrontSide {
	'@type': 'passportElementErrorSourceFrontSide';

}

/**
The reverse side of the document contains an error. The error will be considered resolved when the file with the reverse
side changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceReverseSide {
	'@type': 'passportElementErrorSourceReverseSide';

}

/**
The selfie with the document contains an error. The error will be considered resolved when the file with the selfie
changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceSelfie {
	'@type': 'passportElementErrorSourceSelfie';

}

/**
One of files with the translation of the document contains an error. The error will be considered resolved when the file
changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceTranslationFile {
	'@type': 'passportElementErrorSourceTranslationFile';
	/**
Index of a file with the error.
*/
	file_index: number;
}

/**
The translation of the document contains an error. The error will be considered resolved when the list of translation
files changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceTranslationFiles {
	'@type': 'passportElementErrorSourceTranslationFiles';

}

/**
The file contains an error. The error will be considered resolved when the file changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceFile {
	'@type': 'passportElementErrorSourceFile';
	/**
Index of a file with the error.
*/
	file_index: number;
}

/**
The list of attached files contains an error. The error will be considered resolved when the list of files changes.
Subtype of {@link PassportElementErrorSource}.
*/
export interface PassportElementErrorSourceFiles {
	'@type': 'passportElementErrorSourceFiles';

}

/**
Contains the description of an error in a Telegram Passport element.
*/
export interface PassportElementError {
	'@type': 'passportElementError';
	/**
Type of the Telegram Passport element which has the error.
*/
	type: PassportElementType;
	/**
Error message.
*/
	message: string;
	/**
Error source.
*/
	source: PassportElementErrorSource;
}

/**
Contains information about a Telegram Passport element that was requested by a service.
*/
export interface PassportSuitableElement {
	'@type': 'passportSuitableElement';
	/**
Type of the element.
*/
	type: PassportElementType;
	/**
True, if a selfie is required with the identity document.
*/
	is_selfie_required?: boolean;
	/**
True, if a certified English translation is required with the document.
*/
	is_translation_required?: boolean;
	/**
True, if personal details must include the user's name in the language of their country of residence.
*/
	is_native_name_required?: boolean;
}

/**
Contains a description of the required Telegram Passport element that was requested by a service.
*/
export interface PassportRequiredElement {
	'@type': 'passportRequiredElement';
	/**
List of Telegram Passport elements any of which is enough to provide.
*/
	suitable_elements: PassportSuitableElement[];
}

/**
Contains information about a Telegram Passport authorization form that was requested.
*/
export interface PassportAuthorizationForm {
	'@type': 'passportAuthorizationForm';
	/**
Unique identifier of the authorization form.
*/
	id: number;
	/**
Telegram Passport elements that must be provided to complete the form.
*/
	required_elements: PassportRequiredElement[];
	/**
URL for the privacy policy of the service; may be empty.
*/
	privacy_policy_url: string;
}

/**
Contains information about a Telegram Passport elements and corresponding errors.
*/
export interface PassportElementsWithErrors {
	'@type': 'passportElementsWithErrors';
	/**
Telegram Passport elements.
*/
	elements: PassportElement[];
	/**
Errors in the elements that are already available.
*/
	errors: PassportElementError[];
}

/**
Contains encrypted Telegram Passport data credentials.
*/
export interface EncryptedCredentials {
	'@type': 'encryptedCredentials';
	/**
The encrypted credentials.
*/
	data: string;
	/**
The decrypted data hash.
*/
	hash: string;
	/**
Secret for data decryption, encrypted with the service's public key.
*/
	secret: string;
}

/**
Contains information about an encrypted Telegram Passport element; for bots only.
*/
export interface EncryptedPassportElement {
	'@type': 'encryptedPassportElement';
	/**
Type of Telegram Passport element.
*/
	type: PassportElementType;
	/**
Encrypted JSON-encoded data about the user.
*/
	data: string;
	/**
The front side of an identity document.
*/
	front_side: DatedFile;
	/**
The reverse side of an identity document; may be null.
*/
	reverse_side: DatedFile;
	/**
Selfie with the document; may be null.
*/
	selfie: DatedFile;
	/**
List of files containing a certified English translation of the document.
*/
	translation: DatedFile[];
	/**
List of attached files.
*/
	files: DatedFile[];
	/**
Unencrypted data, phone number or email address.
*/
	value: string;
	/**
Hash of the entire element.
*/
	hash: string;
}

/**
Contains the description of an error in a Telegram Passport element; for bots only.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceUnspecified {
	'@type': 'inputPassportElementErrorSourceUnspecified';
	/**
Current hash of the entire element.
*/
	element_hash: string;
}

/**
A data field contains an error. The error is considered resolved when the field's value changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceDataField {
	'@type': 'inputPassportElementErrorSourceDataField';
	/**
Field name.
*/
	field_name: string;
	/**
Current data hash.
*/
	data_hash: string;
}

/**
The front side of the document contains an error. The error is considered resolved when the file with the front side of
the document changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceFrontSide {
	'@type': 'inputPassportElementErrorSourceFrontSide';
	/**
Current hash of the file containing the front side.
*/
	file_hash: string;
}

/**
The reverse side of the document contains an error. The error is considered resolved when the file with the reverse side
of the document changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceReverseSide {
	'@type': 'inputPassportElementErrorSourceReverseSide';
	/**
Current hash of the file containing the reverse side.
*/
	file_hash: string;
}

/**
The selfie contains an error. The error is considered resolved when the file with the selfie changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceSelfie {
	'@type': 'inputPassportElementErrorSourceSelfie';
	/**
Current hash of the file containing the selfie.
*/
	file_hash: string;
}

/**
One of the files containing the translation of the document contains an error. The error is considered resolved when the
file with the translation changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceTranslationFile {
	'@type': 'inputPassportElementErrorSourceTranslationFile';
	/**
Current hash of the file containing the translation.
*/
	file_hash: string;
}

/**
The translation of the document contains an error. The error is considered resolved when the list of files changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceTranslationFiles {
	'@type': 'inputPassportElementErrorSourceTranslationFiles';
	/**
Current hashes of all files with the translation.
*/
	file_hashes: string[];
}

/**
The file contains an error. The error is considered resolved when the file changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceFile {
	'@type': 'inputPassportElementErrorSourceFile';
	/**
Current hash of the file which has the error.
*/
	file_hash: string;
}

/**
The list of attached files contains an error. The error is considered resolved when the file list changes.
Subtype of {@link InputPassportElementErrorSource}.
*/
export interface InputPassportElementErrorSourceFiles {
	'@type': 'inputPassportElementErrorSourceFiles';
	/**
Current hashes of all attached files.
*/
	file_hashes: string[];
}

/**
Contains the description of an error in a Telegram Passport element; for bots only.
*/
export interface InputPassportElementError {
	'@type': 'inputPassportElementError';
	/**
Type of Telegram Passport element that has the error.
*/
	type: PassportElementType;
	/**
Error message.
*/
	message: string;
	/**
Error source.
*/
	source: InputPassportElementErrorSource;
}

/**
Contains the content of a message.
Subtype of {@link MessageContent}.
*/
export interface MessageText {
	'@type': 'messageText';
	/**
Text of the message.
*/
	text: FormattedText;
	/**
A preview of the web page that's mentioned in the text; may be null.
*/
	web_page: WebPage;
}

/**
An animation message (GIF-style).
Subtype of {@link MessageContent}.
*/
export interface MessageAnimation {
	'@type': 'messageAnimation';
	/**
The animation description.
*/
	animation: Animation;
	/**
Animation caption.
*/
	caption: FormattedText;
	/**
True, if the animation thumbnail must be blurred and the animation must be shown only while tapped.
*/
	is_secret?: boolean;
}

/**
An audio message.
Subtype of {@link MessageContent}.
*/
export interface MessageAudio {
	'@type': 'messageAudio';
	/**
The audio description.
*/
	audio: Audio;
	/**
Audio caption.
*/
	caption: FormattedText;
}

/**
A document message (general file).
Subtype of {@link MessageContent}.
*/
export interface MessageDocument {
	'@type': 'messageDocument';
	/**
The document description.
*/
	document: Document;
	/**
Document caption.
*/
	caption: FormattedText;
}

/**
A photo message.
Subtype of {@link MessageContent}.
*/
export interface MessagePhoto {
	'@type': 'messagePhoto';
	/**
The photo description.
*/
	photo: Photo;
	/**
Photo caption.
*/
	caption: FormattedText;
	/**
True, if the photo must be blurred and must be shown only while tapped.
*/
	is_secret?: boolean;
}

/**
An expired photo message (self-destructed after TTL has elapsed).
Subtype of {@link MessageContent}.
*/
export interface MessageExpiredPhoto {
	'@type': 'messageExpiredPhoto';

}

/**
A sticker message.
Subtype of {@link MessageContent}.
*/
export interface MessageSticker {
	'@type': 'messageSticker';
	/**
The sticker description.
*/
	sticker: Sticker;
	/**
True, if premium animation of the sticker must be played.
*/
	is_premium?: boolean;
}

/**
A video message.
Subtype of {@link MessageContent}.
*/
export interface MessageVideo {
	'@type': 'messageVideo';
	/**
The video description.
*/
	video: Video;
	/**
Video caption.
*/
	caption: FormattedText;
	/**
True, if the video thumbnail must be blurred and the video must be shown only while tapped.
*/
	is_secret?: boolean;
}

/**
An expired video message (self-destructed after TTL has elapsed).
Subtype of {@link MessageContent}.
*/
export interface MessageExpiredVideo {
	'@type': 'messageExpiredVideo';

}

/**
A video note message.
Subtype of {@link MessageContent}.
*/
export interface MessageVideoNote {
	'@type': 'messageVideoNote';
	/**
The video note description.
*/
	video_note: VideoNote;
	/**
True, if at least one of the recipients has viewed the video note.
*/
	is_viewed?: boolean;
	/**
True, if the video note thumbnail must be blurred and the video note must be shown only while tapped.
*/
	is_secret?: boolean;
}

/**
A voice note message.
Subtype of {@link MessageContent}.
*/
export interface MessageVoiceNote {
	'@type': 'messageVoiceNote';
	/**
The voice note description.
*/
	voice_note: VoiceNote;
	/**
Voice note caption.
*/
	caption: FormattedText;
	/**
True, if at least one of the recipients has listened to the voice note.
*/
	is_listened?: boolean;
}

/**
A message with a location.
Subtype of {@link MessageContent}.
*/
export interface MessageLocation {
	'@type': 'messageLocation';
	/**
The location description.
*/
	location: Location;
	/**
Time relative to the message send date, for which the location can be updated, in seconds.
*/
	live_period: number;
	/**
Left time for which the location can be updated, in seconds. updateMessageContent is not sent when this field changes.
*/
	expires_in: number;
	/**
For live locations, a direction in which the location moves, in degrees; 1-360. If 0 the direction is unknown.
*/
	heading: number;
	/**
For live locations, a maximum distance to another chat member for proximity alerts, in meters (0-100000). 0 if the
notification is disabled. Available only for the message sender.
*/
	proximity_alert_radius: number;
}

/**
A message with information about a venue.
Subtype of {@link MessageContent}.
*/
export interface MessageVenue {
	'@type': 'messageVenue';
	/**
The venue description.
*/
	venue: Venue;
}

/**
A message with a user contact.
Subtype of {@link MessageContent}.
*/
export interface MessageContact {
	'@type': 'messageContact';
	/**
The contact description.
*/
	contact: Contact;
}

/**
A message with an animated emoji.
Subtype of {@link MessageContent}.
*/
export interface MessageAnimatedEmoji {
	'@type': 'messageAnimatedEmoji';
	/**
The animated emoji.
*/
	animated_emoji: AnimatedEmoji;
	/**
The corresponding emoji.
*/
	emoji: string;
}

/**
A dice message. The dice value is randomly generated by the server.
Subtype of {@link MessageContent}.
*/
export interface MessageDice {
	'@type': 'messageDice';
	/**
The animated stickers with the initial dice animation; may be null if unknown. updateMessageContent will be sent when
the sticker became known.
*/
	initial_state: DiceStickers;
	/**
The animated stickers with the final dice animation; may be null if unknown. updateMessageContent will be sent when the
sticker became known.
*/
	final_state: DiceStickers;
	/**
Emoji on which the dice throw animation is based.
*/
	emoji: string;
	/**
The dice value. If the value is 0, the dice don't have final state yet.
*/
	value: number;
	/**
Number of frame after which a success animation like a shower of confetti needs to be shown on
updateMessageSendSucceeded.
*/
	success_animation_frame_number: number;
}

/**
A message with a game.
Subtype of {@link MessageContent}.
*/
export interface MessageGame {
	'@type': 'messageGame';
	/**
The game description.
*/
	game: Game;
}

/**
A message with a poll.
Subtype of {@link MessageContent}.
*/
export interface MessagePoll {
	'@type': 'messagePoll';
	/**
The poll description.
*/
	poll: Poll;
}

/**
A message with an invoice from a bot.
Subtype of {@link MessageContent}.
*/
export interface MessageInvoice {
	'@type': 'messageInvoice';
	/**
Product title.
*/
	title: string;
	/**
A message with an invoice from a bot.
*/
	description: FormattedText;
	/**
Product photo; may be null.
*/
	photo: Photo;
	/**
Currency for the product price.
*/
	currency: string;
	/**
Product total price in the smallest units of the currency.
*/
	total_amount: number;
	/**
Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter}.
*/
	start_parameter: string;
	/**
True, if the invoice is a test invoice.
*/
	is_test?: boolean;
	/**
True, if the shipping address must be specified.
*/
	need_shipping_address?: boolean;
	/**
The identifier of the message with the receipt, after the product has been purchased.
*/
	receipt_message_id: number;
	/**
Extended media attached to the invoice; may be null.
*/
	extended_media: MessageExtendedMedia;
}

/**
A message with information about an ended call.
Subtype of {@link MessageContent}.
*/
export interface MessageCall {
	'@type': 'messageCall';
	/**
True, if the call was a video call.
*/
	is_video?: boolean;
	/**
Reason why the call was discarded.
*/
	discard_reason: CallDiscardReason;
	/**
Call duration, in seconds.
*/
	duration: number;
}

/**
A new video chat was scheduled.
Subtype of {@link MessageContent}.
*/
export interface MessageVideoChatScheduled {
	'@type': 'messageVideoChatScheduled';
	/**
Identifier of the video chat. The video chat can be received through the method getGroupCall.
*/
	group_call_id: number;
	/**
Point in time (Unix timestamp) when the group call is supposed to be started by an administrator.
*/
	start_date: number;
}

/**
A newly created video chat.
Subtype of {@link MessageContent}.
*/
export interface MessageVideoChatStarted {
	'@type': 'messageVideoChatStarted';
	/**
Identifier of the video chat. The video chat can be received through the method getGroupCall.
*/
	group_call_id: number;
}

/**
A message with information about an ended video chat.
Subtype of {@link MessageContent}.
*/
export interface MessageVideoChatEnded {
	'@type': 'messageVideoChatEnded';
	/**
Call duration, in seconds.
*/
	duration: number;
}

/**
A message with information about an invite to a video chat.
Subtype of {@link MessageContent}.
*/
export interface MessageInviteVideoChatParticipants {
	'@type': 'messageInviteVideoChatParticipants';
	/**
Identifier of the video chat. The video chat can be received through the method getGroupCall.
*/
	group_call_id: number;
	/**
Invited user identifiers.
*/
	user_ids: number[];
}

/**
A newly created basic group.
Subtype of {@link MessageContent}.
*/
export interface MessageBasicGroupChatCreate {
	'@type': 'messageBasicGroupChatCreate';
	/**
Title of the basic group.
*/
	title: string;
	/**
User identifiers of members in the basic group.
*/
	member_user_ids: number[];
}

/**
A newly created supergroup or channel.
Subtype of {@link MessageContent}.
*/
export interface MessageSupergroupChatCreate {
	'@type': 'messageSupergroupChatCreate';
	/**
Title of the supergroup or channel.
*/
	title: string;
}

/**
An updated chat title.
Subtype of {@link MessageContent}.
*/
export interface MessageChatChangeTitle {
	'@type': 'messageChatChangeTitle';
	/**
New chat title.
*/
	title: string;
}

/**
An updated chat photo.
Subtype of {@link MessageContent}.
*/
export interface MessageChatChangePhoto {
	'@type': 'messageChatChangePhoto';
	/**
New chat photo.
*/
	photo: ChatPhoto;
}

/**
A deleted chat photo.
Subtype of {@link MessageContent}.
*/
export interface MessageChatDeletePhoto {
	'@type': 'messageChatDeletePhoto';

}

/**
New chat members were added.
Subtype of {@link MessageContent}.
*/
export interface MessageChatAddMembers {
	'@type': 'messageChatAddMembers';
	/**
User identifiers of the new members.
*/
	member_user_ids: number[];
}

/**
A new member joined the chat via an invite link.
Subtype of {@link MessageContent}.
*/
export interface MessageChatJoinByLink {
	'@type': 'messageChatJoinByLink';

}

/**
A new member was accepted to the chat by an administrator.
Subtype of {@link MessageContent}.
*/
export interface MessageChatJoinByRequest {
	'@type': 'messageChatJoinByRequest';

}

/**
A chat member was deleted.
Subtype of {@link MessageContent}.
*/
export interface MessageChatDeleteMember {
	'@type': 'messageChatDeleteMember';
	/**
User identifier of the deleted chat member.
*/
	user_id: number;
}

/**
A basic group was upgraded to a supergroup and was deactivated as the result.
Subtype of {@link MessageContent}.
*/
export interface MessageChatUpgradeTo {
	'@type': 'messageChatUpgradeTo';
	/**
Identifier of the supergroup to which the basic group was upgraded.
*/
	supergroup_id: number;
}

/**
A supergroup has been created from a basic group.
Subtype of {@link MessageContent}.
*/
export interface MessageChatUpgradeFrom {
	'@type': 'messageChatUpgradeFrom';
	/**
Title of the newly created supergroup.
*/
	title: string;
	/**
The identifier of the original basic group.
*/
	basic_group_id: number;
}

/**
A message has been pinned.
Subtype of {@link MessageContent}.
*/
export interface MessagePinMessage {
	'@type': 'messagePinMessage';
	/**
Identifier of the pinned message, can be an identifier of a deleted message or 0.
*/
	message_id: number;
}

/**
A screenshot of a message in the chat has been taken.
Subtype of {@link MessageContent}.
*/
export interface MessageScreenshotTaken {
	'@type': 'messageScreenshotTaken';

}

/**
A theme in the chat has been changed.
Subtype of {@link MessageContent}.
*/
export interface MessageChatSetTheme {
	'@type': 'messageChatSetTheme';
	/**
If non-empty, name of a new theme, set for the chat. Otherwise chat theme was reset to the default one.
*/
	theme_name: string;
}

/**
The TTL (Time To Live) setting for messages in the chat has been changed.
Subtype of {@link MessageContent}.
*/
export interface MessageChatSetTtl {
	'@type': 'messageChatSetTtl';
	/**
New message TTL.
*/
	ttl: number;
}

/**
A non-standard action has happened in the chat.
Subtype of {@link MessageContent}.
*/
export interface MessageCustomServiceAction {
	'@type': 'messageCustomServiceAction';
	/**
Message text to be shown in the chat.
*/
	text: string;
}

/**
A new high score was achieved in a game.
Subtype of {@link MessageContent}.
*/
export interface MessageGameScore {
	'@type': 'messageGameScore';
	/**
Identifier of the message with the game, can be an identifier of a deleted message.
*/
	game_message_id: number;
	/**
Identifier of the game; may be different from the games presented in the message with the game.
*/
	game_id: string;
	/**
New score.
*/
	score: number;
}

/**
A payment has been completed.
Subtype of {@link MessageContent}.
*/
export interface MessagePaymentSuccessful {
	'@type': 'messagePaymentSuccessful';
	/**
Identifier of the chat, containing the corresponding invoice message; 0 if unknown.
*/
	invoice_chat_id: number;
	/**
Identifier of the message with the corresponding invoice; can be 0 or an identifier of a deleted message.
*/
	invoice_message_id: number;
	/**
Currency for the price of the product.
*/
	currency: string;
	/**
Total price for the product, in the smallest units of the currency.
*/
	total_amount: number;
	/**
True, if this is a recurring payment.
*/
	is_recurring?: boolean;
	/**
True, if this is the first recurring payment.
*/
	is_first_recurring?: boolean;
	/**
Name of the invoice; may be empty if unknown.
*/
	invoice_name: string;
}

/**
A payment has been completed; for bots only.
Subtype of {@link MessageContent}.
*/
export interface MessagePaymentSuccessfulBot {
	'@type': 'messagePaymentSuccessfulBot';
	/**
Currency for price of the product.
*/
	currency: string;
	/**
Total price for the product, in the smallest units of the currency.
*/
	total_amount: number;
	/**
True, if this is a recurring payment.
*/
	is_recurring?: boolean;
	/**
True, if this is the first recurring payment.
*/
	is_first_recurring?: boolean;
	/**
Invoice payload.
*/
	invoice_payload: string;
	/**
Identifier of the shipping option chosen by the user; may be empty if not applicable.
*/
	shipping_option_id: string;
	/**
Information about the order; may be null.
*/
	order_info: OrderInfo;
	/**
Telegram payment identifier.
*/
	telegram_payment_charge_id: string;
	/**
Provider payment identifier.
*/
	provider_payment_charge_id: string;
}

/**
Telegram Premium was gifted to the user.
Subtype of {@link MessageContent}.
*/
export interface MessageGiftedPremium {
	'@type': 'messageGiftedPremium';
	/**
Currency for the paid amount.
*/
	currency: string;
	/**
The paid amount, in the smallest units of the currency.
*/
	amount: number;
	/**
Number of month the Telegram Premium subscription will be active.
*/
	month_count: number;
	/**
A sticker to be shown in the message; may be null if unknown.
*/
	sticker: Sticker;
}

/**
A contact has registered with Telegram.
Subtype of {@link MessageContent}.
*/
export interface MessageContactRegistered {
	'@type': 'messageContactRegistered';

}

/**
The current user has connected a website by logging in using Telegram Login Widget on it.
Subtype of {@link MessageContent}.
*/
export interface MessageWebsiteConnected {
	'@type': 'messageWebsiteConnected';
	/**
Domain name of the connected website.
*/
	domain_name: string;
}

/**
Data from a Web App has been sent to a bot.
Subtype of {@link MessageContent}.
*/
export interface MessageWebAppDataSent {
	'@type': 'messageWebAppDataSent';
	/**
Text of the keyboardButtonTypeWebApp button, which opened the Web App.
*/
	button_text: string;
}

/**
Data from a Web App has been received; for bots only.
Subtype of {@link MessageContent}.
*/
export interface MessageWebAppDataReceived {
	'@type': 'messageWebAppDataReceived';
	/**
Text of the keyboardButtonTypeWebApp button, which opened the Web App.
*/
	button_text: string;
	/**
Received data.
*/
	data: string;
}

/**
Telegram Passport data has been sent to a bot.
Subtype of {@link MessageContent}.
*/
export interface MessagePassportDataSent {
	'@type': 'messagePassportDataSent';
	/**
List of Telegram Passport element types sent.
*/
	types: PassportElementType[];
}

/**
Telegram Passport data has been received; for bots only.
Subtype of {@link MessageContent}.
*/
export interface MessagePassportDataReceived {
	'@type': 'messagePassportDataReceived';
	/**
List of received Telegram Passport elements.
*/
	elements: EncryptedPassportElement[];
	/**
Encrypted data credentials.
*/
	credentials: EncryptedCredentials;
}

/**
A user in the chat came within proximity alert range.
Subtype of {@link MessageContent}.
*/
export interface MessageProximityAlertTriggered {
	'@type': 'messageProximityAlertTriggered';
	/**
The identifier of a user or chat that triggered the proximity alert.
*/
	traveler_id: MessageSender;
	/**
The identifier of a user or chat that subscribed for the proximity alert.
*/
	watcher_id: MessageSender;
	/**
The distance between the users.
*/
	distance: number;
}

/**
Message content that is not supported in the current TDLib version.
Subtype of {@link MessageContent}.
*/
export interface MessageUnsupported {
	'@type': 'messageUnsupported';

}

/**
Represents a part of the text which must be formatted differently.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeMention {
	'@type': 'textEntityTypeMention';

}

/**
A hashtag text, beginning with "#".
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeHashtag {
	'@type': 'textEntityTypeHashtag';

}

/**
A cashtag text, beginning with "$" and consisting of capital English letters (e.g., "$USD").
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeCashtag {
	'@type': 'textEntityTypeCashtag';

}

/**
A bot command, beginning with "/".
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeBotCommand {
	'@type': 'textEntityTypeBotCommand';

}

/**
An HTTP URL.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeUrl {
	'@type': 'textEntityTypeUrl';

}

/**
An email address.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeEmailAddress {
	'@type': 'textEntityTypeEmailAddress';

}

/**
A phone number.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypePhoneNumber {
	'@type': 'textEntityTypePhoneNumber';

}

/**
A bank card number. The getBankCardInfo method can be used to get information about the bank card.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeBankCardNumber {
	'@type': 'textEntityTypeBankCardNumber';

}

/**
A bold text.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeBold {
	'@type': 'textEntityTypeBold';

}

/**
An italic text.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeItalic {
	'@type': 'textEntityTypeItalic';

}

/**
An underlined text.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeUnderline {
	'@type': 'textEntityTypeUnderline';

}

/**
A strikethrough text.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeStrikethrough {
	'@type': 'textEntityTypeStrikethrough';

}

/**
A spoiler text.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeSpoiler {
	'@type': 'textEntityTypeSpoiler';

}

/**
Text that must be formatted as if inside a code HTML tag.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeCode {
	'@type': 'textEntityTypeCode';

}

/**
Text that must be formatted as if inside a pre HTML tag.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypePre {
	'@type': 'textEntityTypePre';

}

/**
Text that must be formatted as if inside pre, and code HTML tags.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypePreCode {
	'@type': 'textEntityTypePreCode';
	/**
Programming language of the code; as defined by the sender.
*/
	language: string;
}

/**
A text description shown instead of a raw URL.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeTextUrl {
	'@type': 'textEntityTypeTextUrl';
	/**
HTTP or tg:// URL to be opened when the link is clicked.
*/
	url: string;
}

/**
A text shows instead of a raw mention of the user (e.g., when the user has no username).
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeMentionName {
	'@type': 'textEntityTypeMentionName';
	/**
Identifier of the mentioned user.
*/
	user_id: number;
}

/**
A custom emoji. The text behind a custom emoji must be an emoji. Only premium users can use premium custom emoji.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeCustomEmoji {
	'@type': 'textEntityTypeCustomEmoji';
	/**
Unique identifier of the custom emoji.
*/
	custom_emoji_id: string;
}

/**
A media timestamp.
Subtype of {@link TextEntityType}.
*/
export interface TextEntityTypeMediaTimestamp {
	'@type': 'textEntityTypeMediaTimestamp';
	/**
Timestamp from which a video/audio/video note/voice note playing must start, in seconds. The media can be in the content
or the web page preview of the current message, or in the same places in the replied message.
*/
	media_timestamp: number;
}

/**
A thumbnail to be sent along with a file; must be in JPEG or WEBP format for stickers, and less than 200 KB in size.
*/
export interface InputThumbnail {
	'@type': 'inputThumbnail';
	/**
Thumbnail file to send. Sending thumbnails by file_id is currently not supported.
*/
	thumbnail: InputFile;
	/**
Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown.
*/
	width: number;
	/**
Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown.
*/
	height: number;
}

/**
Contains information about the time when a scheduled message will be sent.
Subtype of {@link MessageSchedulingState}.
*/
export interface MessageSchedulingStateSendAtDate {
	'@type': 'messageSchedulingStateSendAtDate';
	/**
Date the message will be sent. The date must be within 367 days in the future.
*/
	send_date: number;
}

/**
The message will be sent when the peer will be online. Applicable to private chats only and when the exact online status
of the peer is known.
Subtype of {@link MessageSchedulingState}.
*/
export interface MessageSchedulingStateSendWhenOnline {
	'@type': 'messageSchedulingStateSendWhenOnline';

}

/**
Options to be used when a message is sent.
*/
export interface MessageSendOptions {
	'@type': 'messageSendOptions';
	/**
Pass true to disable notification for the message.
*/
	disable_notification?: boolean;
	/**
Pass true if the message is sent from the background.
*/
	from_background?: boolean;
	/**
Pass true if the content of the message must be protected from forwarding and saving; for bots only.
*/
	protect_content?: boolean;
	/**
Pass true if the user explicitly chosen a sticker or a custom emoji from an installed sticker set; applicable only to
sendMessage and sendMessageAlbum.
*/
	update_order_of_installed_sticker_sets?: boolean;
	/**
Message scheduling state; pass null to send message immediately. Messages sent to a secret chat, live location messages
and self-destructing messages can't be scheduled.
*/
	scheduling_state: MessageSchedulingState;
}

/**
Options to be used when a message content is copied without reference to the original sender. Service messages and
messageInvoice can't be copied.
*/
export interface MessageCopyOptions {
	'@type': 'messageCopyOptions';
	/**
True, if content of the message needs to be copied without reference to the original sender. Always true if the message
is forwarded to a secret chat or is local.
*/
	send_copy?: boolean;
	/**
True, if media caption of the message copy needs to be replaced. Ignored if send_copy is false.
*/
	replace_caption?: boolean;
	/**
New message caption; pass null to copy message without caption. Ignored if replace_caption is false.
*/
	new_caption: FormattedText;
}

/**
The content of a message to send.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageText {
	'@type': 'inputMessageText';
	/**
Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only Bold, Italic, Underline,
Strikethrough, Spoiler, CustomEmoji, Code, Pre, PreCode, TextUrl and MentionName entities are allowed to be specified
manually.
*/
	text: FormattedText;
	/**
True, if rich web page previews for URLs in the message text must be disabled.
*/
	disable_web_page_preview?: boolean;
	/**
True, if a chat message draft must be deleted.
*/
	clear_draft?: boolean;
}

/**
An animation message (GIF-style).
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageAnimation {
	'@type': 'inputMessageAnimation';
	/**
Animation file to be sent.
*/
	animation: InputFile;
	/**
Animation thumbnail; pass null to skip thumbnail uploading.
*/
	thumbnail: InputThumbnail;
	/**
File identifiers of the stickers added to the animation, if applicable.
*/
	added_sticker_file_ids: number[];
	/**
Duration of the animation, in seconds.
*/
	duration: number;
	/**
Width of the animation; may be replaced by the server.
*/
	width: number;
	/**
Height of the animation; may be replaced by the server.
*/
	height: number;
	/**
Animation caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
}

/**
An audio message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageAudio {
	'@type': 'inputMessageAudio';
	/**
Audio file to be sent.
*/
	audio: InputFile;
	/**
Thumbnail of the cover for the album; pass null to skip thumbnail uploading.
*/
	album_cover_thumbnail: InputThumbnail;
	/**
Duration of the audio, in seconds; may be replaced by the server.
*/
	duration: number;
	/**
Title of the audio; 0-64 characters; may be replaced by the server.
*/
	title: string;
	/**
Performer of the audio; 0-64 characters, may be replaced by the server.
*/
	performer: string;
	/**
Audio caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
}

/**
A document message (general file).
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageDocument {
	'@type': 'inputMessageDocument';
	/**
Document to be sent.
*/
	document: InputFile;
	/**
Document thumbnail; pass null to skip thumbnail uploading.
*/
	thumbnail: InputThumbnail;
	/**
If true, automatic file type detection will be disabled and the document will always be sent as file. Always true for
files sent to secret chats.
*/
	disable_content_type_detection?: boolean;
	/**
Document caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
}

/**
A photo message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessagePhoto {
	'@type': 'inputMessagePhoto';
	/**
Photo to send. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total.
Width and height ratio must be at most 20.
*/
	photo: InputFile;
	/**
Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail is sent to the other party only in
secret chats.
*/
	thumbnail: InputThumbnail;
	/**
File identifiers of the stickers added to the photo, if applicable.
*/
	added_sticker_file_ids: number[];
	/**
Photo width.
*/
	width: number;
	/**
Photo height.
*/
	height: number;
	/**
Photo caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
	/**
Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only in private chats.
*/
	ttl: number;
}

/**
A sticker message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageSticker {
	'@type': 'inputMessageSticker';
	/**
Sticker to be sent.
*/
	sticker: InputFile;
	/**
Sticker thumbnail; pass null to skip thumbnail uploading.
*/
	thumbnail: InputThumbnail;
	/**
Sticker width.
*/
	width: number;
	/**
Sticker height.
*/
	height: number;
	/**
Emoji used to choose the sticker.
*/
	emoji: string;
}

/**
A video message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageVideo {
	'@type': 'inputMessageVideo';
	/**
Video to be sent.
*/
	video: InputFile;
	/**
Video thumbnail; pass null to skip thumbnail uploading.
*/
	thumbnail: InputThumbnail;
	/**
File identifiers of the stickers added to the video, if applicable.
*/
	added_sticker_file_ids: number[];
	/**
Duration of the video, in seconds.
*/
	duration: number;
	/**
Video width.
*/
	width: number;
	/**
Video height.
*/
	height: number;
	/**
True, if the video is supposed to be streamed.
*/
	supports_streaming?: boolean;
	/**
Video caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
	/**
Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only in private chats.
*/
	ttl: number;
}

/**
A video note message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageVideoNote {
	'@type': 'inputMessageVideoNote';
	/**
Video note to be sent.
*/
	video_note: InputFile;
	/**
Video thumbnail; pass null to skip thumbnail uploading.
*/
	thumbnail: InputThumbnail;
	/**
Duration of the video, in seconds.
*/
	duration: number;
	/**
Video width and height; must be positive and not greater than 640.
*/
	length: number;
}

/**
A voice note message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageVoiceNote {
	'@type': 'inputMessageVoiceNote';
	/**
Voice note to be sent.
*/
	voice_note: InputFile;
	/**
Duration of the voice note, in seconds.
*/
	duration: number;
	/**
Waveform representation of the voice note, in 5-bit format.
*/
	waveform: string;
	/**
Voice note caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
}

/**
A message with a location.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageLocation {
	'@type': 'inputMessageLocation';
	/**
Location to be sent.
*/
	location: Location;
	/**
Period for which the location can be updated, in seconds; must be between 60 and 86400 for a live location and 0
otherwise.
*/
	live_period: number;
	/**
For live locations, a direction in which the location moves, in degrees; 1-360. Pass 0 if unknown.
*/
	heading: number;
	/**
For live locations, a maximum distance to another chat member for proximity alerts, in meters (0-100000). Pass 0 if the
notification is disabled. Can't be enabled in channels and Saved Messages.
*/
	proximity_alert_radius: number;
}

/**
A message with information about a venue.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageVenue {
	'@type': 'inputMessageVenue';
	/**
Venue to send.
*/
	venue: Venue;
}

/**
A message containing a user contact.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageContact {
	'@type': 'inputMessageContact';
	/**
Contact to send.
*/
	contact: Contact;
}

/**
A dice message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageDice {
	'@type': 'inputMessageDice';
	/**
Emoji on which the dice throw animation is based.
*/
	emoji: string;
	/**
True, if the chat message draft must be deleted.
*/
	clear_draft?: boolean;
}

/**
A message with a game; not supported for channels or secret chats.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageGame {
	'@type': 'inputMessageGame';
	/**
User identifier of the bot that owns the game.
*/
	bot_user_id: number;
	/**
Short name of the game.
*/
	game_short_name: string;
}

/**
A message with an invoice; can be used only by bots.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageInvoice {
	'@type': 'inputMessageInvoice';
	/**
Invoice.
*/
	invoice: Invoice;
	/**
Product title; 1-32 characters.
*/
	title: string;
	/**
A message with an invoice; can be used only by bots.
*/
	description: string;
	/**
Product photo URL; optional.
*/
	photo_url: string;
	/**
Product photo size.
*/
	photo_size: number;
	/**
Product photo width.
*/
	photo_width: number;
	/**
Product photo height.
*/
	photo_height: number;
	/**
The invoice payload.
*/
	payload: string;
	/**
Payment provider token.
*/
	provider_token: string;
	/**
JSON-encoded data about the invoice, which will be shared with the payment provider.
*/
	provider_data: string;
	/**
Unique invoice bot deep link parameter for the generation of this invoice. If empty, it would be possible to pay
directly from forwards of the invoice message.
*/
	start_parameter: string;
	/**
The content of extended media attached to the invoice. The content of the message to be sent. Must be one of the
following types: inputMessagePhoto, inputMessageVideo.
*/
	extended_media_content: InputMessageContent;
}

/**
A message with a poll. Polls can't be sent to secret chats. Polls can be sent only to a private chat with a bot.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessagePoll {
	'@type': 'inputMessagePoll';
	/**
Poll question; 1-255 characters (up to 300 characters for bots).
*/
	question: string;
	/**
List of poll answer options, 2-10 strings 1-100 characters each.
*/
	options: string[];
	/**
True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded to channels.
*/
	is_anonymous?: boolean;
	/**
Type of the poll.
*/
	type: PollType;
	/**
Amount of time the poll will be active after creation, in seconds; for bots only.
*/
	open_period: number;
	/**
Point in time (Unix timestamp) when the poll will automatically be closed; for bots only.
*/
	close_date: number;
	/**
True, if the poll needs to be sent already closed; for bots only.
*/
	is_closed?: boolean;
}

/**
A forwarded message.
Subtype of {@link InputMessageContent}.
*/
export interface InputMessageForwarded {
	'@type': 'inputMessageForwarded';
	/**
Identifier for the chat this forwarded message came from.
*/
	from_chat_id: number;
	/**
Identifier of the message to forward.
*/
	message_id: number;
	/**
True, if a game message is being shared from a launched game; applies only to game messages.
*/
	in_game_share?: boolean;
	/**
Options to be used to copy content of the message without reference to the original sender; pass null to forward the
message as usual.
*/
	copy_options: MessageCopyOptions;
}

/**
Represents a filter for message search results.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterEmpty {
	'@type': 'searchMessagesFilterEmpty';

}

/**
Returns only animation messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterAnimation {
	'@type': 'searchMessagesFilterAnimation';

}

/**
Returns only audio messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterAudio {
	'@type': 'searchMessagesFilterAudio';

}

/**
Returns only document messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterDocument {
	'@type': 'searchMessagesFilterDocument';

}

/**
Returns only photo messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterPhoto {
	'@type': 'searchMessagesFilterPhoto';

}

/**
Returns only video messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterVideo {
	'@type': 'searchMessagesFilterVideo';

}

/**
Returns only voice note messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterVoiceNote {
	'@type': 'searchMessagesFilterVoiceNote';

}

/**
Returns only photo and video messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterPhotoAndVideo {
	'@type': 'searchMessagesFilterPhotoAndVideo';

}

/**
Returns only messages containing URLs.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterUrl {
	'@type': 'searchMessagesFilterUrl';

}

/**
Returns only messages containing chat photos.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterChatPhoto {
	'@type': 'searchMessagesFilterChatPhoto';

}

/**
Returns only video note messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterVideoNote {
	'@type': 'searchMessagesFilterVideoNote';

}

/**
Returns only voice and video note messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterVoiceAndVideoNote {
	'@type': 'searchMessagesFilterVoiceAndVideoNote';

}

/**
Returns only messages with mentions of the current user, or messages that are replies to their messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterMention {
	'@type': 'searchMessagesFilterMention';

}

/**
Returns only messages with unread mentions of the current user, or messages that are replies to their messages. When
using this filter the results can't be additionally filtered by a query, a message thread or by the sending user.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterUnreadMention {
	'@type': 'searchMessagesFilterUnreadMention';

}

/**
Returns only messages with unread reactions for the current user. When using this filter the results can't be
additionally filtered by a query, a message thread or by the sending user.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterUnreadReaction {
	'@type': 'searchMessagesFilterUnreadReaction';

}

/**
Returns only failed to send messages. This filter can be used only if the message database is used.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterFailedToSend {
	'@type': 'searchMessagesFilterFailedToSend';

}

/**
Returns only pinned messages.
Subtype of {@link SearchMessagesFilter}.
*/
export interface SearchMessagesFilterPinned {
	'@type': 'searchMessagesFilterPinned';

}

/**
Describes the different types of activity in a chat.
Subtype of {@link ChatAction}.
*/
export interface ChatActionTyping {
	'@type': 'chatActionTyping';

}

/**
The user is recording a video.
Subtype of {@link ChatAction}.
*/
export interface ChatActionRecordingVideo {
	'@type': 'chatActionRecordingVideo';

}

/**
The user is uploading a video.
Subtype of {@link ChatAction}.
*/
export interface ChatActionUploadingVideo {
	'@type': 'chatActionUploadingVideo';
	/**
Upload progress, as a percentage.
*/
	progress: number;
}

/**
The user is recording a voice note.
Subtype of {@link ChatAction}.
*/
export interface ChatActionRecordingVoiceNote {
	'@type': 'chatActionRecordingVoiceNote';

}

/**
The user is uploading a voice note.
Subtype of {@link ChatAction}.
*/
export interface ChatActionUploadingVoiceNote {
	'@type': 'chatActionUploadingVoiceNote';
	/**
Upload progress, as a percentage.
*/
	progress: number;
}

/**
The user is uploading a photo.
Subtype of {@link ChatAction}.
*/
export interface ChatActionUploadingPhoto {
	'@type': 'chatActionUploadingPhoto';
	/**
Upload progress, as a percentage.
*/
	progress: number;
}

/**
The user is uploading a document.
Subtype of {@link ChatAction}.
*/
export interface ChatActionUploadingDocument {
	'@type': 'chatActionUploadingDocument';
	/**
Upload progress, as a percentage.
*/
	progress: number;
}

/**
The user is picking a sticker to send.
Subtype of {@link ChatAction}.
*/
export interface ChatActionChoosingSticker {
	'@type': 'chatActionChoosingSticker';

}

/**
The user is picking a location or venue to send.
Subtype of {@link ChatAction}.
*/
export interface ChatActionChoosingLocation {
	'@type': 'chatActionChoosingLocation';

}

/**
The user is picking a contact to send.
Subtype of {@link ChatAction}.
*/
export interface ChatActionChoosingContact {
	'@type': 'chatActionChoosingContact';

}

/**
The user has started to play a game.
Subtype of {@link ChatAction}.
*/
export interface ChatActionStartPlayingGame {
	'@type': 'chatActionStartPlayingGame';

}

/**
The user is recording a video note.
Subtype of {@link ChatAction}.
*/
export interface ChatActionRecordingVideoNote {
	'@type': 'chatActionRecordingVideoNote';

}

/**
The user is uploading a video note.
Subtype of {@link ChatAction}.
*/
export interface ChatActionUploadingVideoNote {
	'@type': 'chatActionUploadingVideoNote';
	/**
Upload progress, as a percentage.
*/
	progress: number;
}

/**
The user is watching animations sent by the other party by clicking on an animated emoji.
Subtype of {@link ChatAction}.
*/
export interface ChatActionWatchingAnimations {
	'@type': 'chatActionWatchingAnimations';
	/**
The animated emoji.
*/
	emoji: string;
}

/**
The user has canceled the previous action.
Subtype of {@link ChatAction}.
*/
export interface ChatActionCancel {
	'@type': 'chatActionCancel';

}

/**
Describes the last time the user was online.
Subtype of {@link UserStatus}.
*/
export interface UserStatusEmpty {
	'@type': 'userStatusEmpty';

}

/**
The user is online.
Subtype of {@link UserStatus}.
*/
export interface UserStatusOnline {
	'@type': 'userStatusOnline';
	/**
Point in time (Unix timestamp) when the user's online status will expire.
*/
	expires: number;
}

/**
The user is offline.
Subtype of {@link UserStatus}.
*/
export interface UserStatusOffline {
	'@type': 'userStatusOffline';
	/**
Point in time (Unix timestamp) when the user was last online.
*/
	was_online: number;
}

/**
The user was online recently.
Subtype of {@link UserStatus}.
*/
export interface UserStatusRecently {
	'@type': 'userStatusRecently';

}

/**
The user is offline, but was online last week.
Subtype of {@link UserStatus}.
*/
export interface UserStatusLastWeek {
	'@type': 'userStatusLastWeek';

}

/**
The user is offline, but was online last month.
Subtype of {@link UserStatus}.
*/
export interface UserStatusLastMonth {
	'@type': 'userStatusLastMonth';

}

/**
Represents a list of stickers.
*/
export interface Stickers {
	'@type': 'stickers';
	/**
List of stickers.
*/
	stickers: Sticker[];
}

/**
Represents a list of emoji.
*/
export interface Emojis {
	'@type': 'emojis';
	/**
List of emojis.
*/
	emojis: string[];
}

/**
Represents a sticker set.
*/
export interface StickerSet {
	'@type': 'stickerSet';
	/**
Identifier of the sticker set.
*/
	id: string;
	/**
Title of the sticker set.
*/
	title: string;
	/**
Name of the sticker set.
*/
	name: string;
	/**
Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may be null. The file can be downloaded
only before the thumbnail is changed.
*/
	thumbnail: Thumbnail;
	/**
Sticker set thumbnail's outline represented as a list of closed vector paths; may be empty. The coordinate system origin
is in the upper-left corner.
*/
	thumbnail_outline: ClosedVectorPath[];
	/**
True, if the sticker set has been installed by the current user.
*/
	is_installed?: boolean;
	/**
True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously.
*/
	is_archived?: boolean;
	/**
True, if the sticker set is official.
*/
	is_official?: boolean;
	/**
Format of the stickers in the set.
*/
	sticker_format: StickerFormat;
	/**
Type of the stickers in the set.
*/
	sticker_type: StickerType;
	/**
True for already viewed trending sticker sets.
*/
	is_viewed?: boolean;
	/**
List of stickers in this set.
*/
	stickers: Sticker[];
	/**
A list of emoji corresponding to the stickers in the same order. The list is only for informational purposes, because a
sticker is always sent with a fixed emoji from the corresponding Sticker object.
*/
	emojis: Emojis[];
}

/**
Represents short information about a sticker set.
*/
export interface StickerSetInfo {
	'@type': 'stickerSetInfo';
	/**
Identifier of the sticker set.
*/
	id: string;
	/**
Title of the sticker set.
*/
	title: string;
	/**
Name of the sticker set.
*/
	name: string;
	/**
Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may be null.
*/
	thumbnail: Thumbnail;
	/**
Sticker set thumbnail's outline represented as a list of closed vector paths; may be empty. The coordinate system origin
is in the upper-left corner.
*/
	thumbnail_outline: ClosedVectorPath[];
	/**
True, if the sticker set has been installed by the current user.
*/
	is_installed?: boolean;
	/**
True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously.
*/
	is_archived?: boolean;
	/**
True, if the sticker set is official.
*/
	is_official?: boolean;
	/**
Format of the stickers in the set.
*/
	sticker_format: StickerFormat;
	/**
Type of the stickers in the set.
*/
	sticker_type: StickerType;
	/**
True for already viewed trending sticker sets.
*/
	is_viewed?: boolean;
	/**
Total number of stickers in the set.
*/
	size: number;
	/**
Up to the first 5 stickers from the set, depending on the context. If the application needs more stickers the full
sticker set needs to be requested.
*/
	covers: Sticker[];
}

/**
Represents a list of sticker sets.
*/
export interface StickerSets {
	'@type': 'stickerSets';
	/**
Approximate total number of sticker sets found.
*/
	total_count: number;
	/**
List of sticker sets.
*/
	sets: StickerSetInfo[];
}

/**
Represents a list of trending sticker sets.
*/
export interface TrendingStickerSets {
	'@type': 'trendingStickerSets';
	/**
Approximate total number of trending sticker sets.
*/
	total_count: number;
	/**
List of trending sticker sets.
*/
	sets: StickerSetInfo[];
	/**
True, if the list contains sticker sets with premium stickers.
*/
	is_premium?: boolean;
}

/**
Describes the reason why a call was discarded.
Subtype of {@link CallDiscardReason}.
*/
export interface CallDiscardReasonEmpty {
	'@type': 'callDiscardReasonEmpty';

}

/**
The call was ended before the conversation started. It was canceled by the caller or missed by the other party.
Subtype of {@link CallDiscardReason}.
*/
export interface CallDiscardReasonMissed {
	'@type': 'callDiscardReasonMissed';

}

/**
The call was ended before the conversation started. It was declined by the other party.
Subtype of {@link CallDiscardReason}.
*/
export interface CallDiscardReasonDeclined {
	'@type': 'callDiscardReasonDeclined';

}

/**
The call was ended during the conversation because the users were disconnected.
Subtype of {@link CallDiscardReason}.
*/
export interface CallDiscardReasonDisconnected {
	'@type': 'callDiscardReasonDisconnected';

}

/**
The call was ended because one of the parties hung up.
Subtype of {@link CallDiscardReason}.
*/
export interface CallDiscardReasonHungUp {
	'@type': 'callDiscardReasonHungUp';

}

/**
Specifies the supported call protocols.
*/
export interface CallProtocol {
	'@type': 'callProtocol';
	/**
True, if UDP peer-to-peer connections are supported.
*/
	udp_p2p?: boolean;
	/**
True, if connection through UDP reflectors is supported.
*/
	udp_reflector?: boolean;
	/**
The minimum supported API layer; use 65.
*/
	min_layer: number;
	/**
The maximum supported API layer; use 65.
*/
	max_layer: number;
	/**
List of supported tgcalls versions.
*/
	library_versions: string[];
}

/**
Describes the type of a call server.
Subtype of {@link CallServerType}.
*/
export interface CallServerTypeTelegramReflector {
	'@type': 'callServerTypeTelegramReflector';
	/**
A peer tag to be used with the reflector.
*/
	peer_tag: string;
	/**
True, if the server uses TCP instead of UDP.
*/
	is_tcp?: boolean;
}

/**
A WebRTC server.
Subtype of {@link CallServerType}.
*/
export interface CallServerTypeWebrtc {
	'@type': 'callServerTypeWebrtc';
	/**
Username to be used for authentication.
*/
	username: string;
	/**
Authentication password.
*/
	password: string;
	/**
True, if the server supports TURN.
*/
	supports_turn?: boolean;
	/**
True, if the server supports STUN.
*/
	supports_stun?: boolean;
}

/**
Describes a server for relaying call data.
*/
export interface CallServer {
	'@type': 'callServer';
	/**
Server identifier.
*/
	id: string;
	/**
Server IPv4 address.
*/
	ip_address: string;
	/**
Server IPv6 address.
*/
	ipv6_address: string;
	/**
Server port number.
*/
	port: number;
	/**
Server type.
*/
	type: CallServerType;
}

/**
Contains the call identifier.
*/
export interface CallId {
	'@type': 'callId';
	/**
Call identifier.
*/
	id: number;
}

/**
Contains the group call identifier.
*/
export interface GroupCallId {
	'@type': 'groupCallId';
	/**
Group call identifier.
*/
	id: number;
}

/**
Describes the current call state.
Subtype of {@link CallState}.
*/
export interface CallStatePending {
	'@type': 'callStatePending';
	/**
True, if the call has already been created by the server.
*/
	is_created?: boolean;
	/**
True, if the call has already been received by the other party.
*/
	is_received?: boolean;
}

/**
The call has been answered and encryption keys are being exchanged.
Subtype of {@link CallState}.
*/
export interface CallStateExchangingKeys {
	'@type': 'callStateExchangingKeys';

}

/**
The call is ready to use.
Subtype of {@link CallState}.
*/
export interface CallStateReady {
	'@type': 'callStateReady';
	/**
Call protocols supported by the peer.
*/
	protocol: CallProtocol;
	/**
List of available call servers.
*/
	servers: CallServer[];
	/**
A JSON-encoded call config.
*/
	config: string;
	/**
Call encryption key.
*/
	encryption_key: string;
	/**
Encryption key emojis fingerprint.
*/
	emojis: string[];
	/**
True, if peer-to-peer connection is allowed by users privacy settings.
*/
	allow_p2p?: boolean;
}

/**
The call is hanging up after discardCall has been called.
Subtype of {@link CallState}.
*/
export interface CallStateHangingUp {
	'@type': 'callStateHangingUp';

}

/**
The call has ended successfully.
Subtype of {@link CallState}.
*/
export interface CallStateDiscarded {
	'@type': 'callStateDiscarded';
	/**
The reason, why the call has ended.
*/
	reason: CallDiscardReason;
	/**
True, if the call rating must be sent to the server.
*/
	need_rating?: boolean;
	/**
True, if the call debug information must be sent to the server.
*/
	need_debug_information?: boolean;
	/**
True, if the call log must be sent to the server.
*/
	need_log?: boolean;
}

/**
The call has ended with an error.
Subtype of {@link CallState}.
*/
export interface CallStateError {
	'@type': 'callStateError';
	/**
Error. An error with the code 4005000 will be returned if an outgoing call is missed because of an expired timeout.
*/
	error: Error;
}

/**
Describes the quality of a group call video.
Subtype of {@link GroupCallVideoQuality}.
*/
export interface GroupCallVideoQualityThumbnail {
	'@type': 'groupCallVideoQualityThumbnail';

}

/**
The medium video quality.
Subtype of {@link GroupCallVideoQuality}.
*/
export interface GroupCallVideoQualityMedium {
	'@type': 'groupCallVideoQualityMedium';

}

/**
The best available video quality.
Subtype of {@link GroupCallVideoQuality}.
*/
export interface GroupCallVideoQualityFull {
	'@type': 'groupCallVideoQualityFull';

}

/**
Describes an available stream in a group call.
*/
export interface GroupCallStream {
	'@type': 'groupCallStream';
	/**
Identifier of an audio/video channel.
*/
	channel_id: number;
	/**
Scale of segment durations in the stream. The duration is 1000/(2**scale) milliseconds.
*/
	scale: number;
	/**
Point in time when the stream currently ends; Unix timestamp in milliseconds.
*/
	time_offset: number;
}

/**
Represents a list of group call streams.
*/
export interface GroupCallStreams {
	'@type': 'groupCallStreams';
	/**
A list of group call streams.
*/
	streams: GroupCallStream[];
}

/**
Represents an RTMP url.
*/
export interface RtmpUrl {
	'@type': 'rtmpUrl';
	/**
The URL.
*/
	url: string;
	/**
Stream key.
*/
	stream_key: string;
}

/**
Describes a recently speaking participant in a group call.
*/
export interface GroupCallRecentSpeaker {
	'@type': 'groupCallRecentSpeaker';
	/**
Group call participant identifier.
*/
	participant_id: MessageSender;
	/**
True, is the user has spoken recently.
*/
	is_speaking?: boolean;
}

/**
Describes a group call.
*/
export interface GroupCall {
	'@type': 'groupCall';
	/**
Group call identifier.
*/
	id: number;
	/**
Group call title.
*/
	title: string;
	/**
Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 if it is already
active or was ended.
*/
	scheduled_start_date: number;
	/**
True, if the group call is scheduled and the current user will receive a notification when the group call will start.
*/
	enabled_start_notification?: boolean;
	/**
True, if the call is active.
*/
	is_active?: boolean;
	/**
True, if the chat is an RTMP stream instead of an ordinary video chat.
*/
	is_rtmp_stream?: boolean;
	/**
True, if the call is joined.
*/
	is_joined?: boolean;
	/**
True, if user was kicked from the call because of network loss and the call needs to be rejoined.
*/
	need_rejoin?: boolean;
	/**
True, if the current user can manage the group call.
*/
	can_be_managed?: boolean;
	/**
Number of participants in the group call.
*/
	participant_count: number;
	/**
True, if group call participants, which are muted, aren't returned in participant list.
*/
	has_hidden_listeners?: boolean;
	/**
True, if all group call participants are loaded.
*/
	loaded_all_participants?: boolean;
	/**
At most 3 recently speaking users in the group call.
*/
	recent_speakers: GroupCallRecentSpeaker[];
	/**
True, if the current user's video is enabled.
*/
	is_my_video_enabled?: boolean;
	/**
True, if the current user's video is paused.
*/
	is_my_video_paused?: boolean;
	/**
True, if the current user can broadcast video or share screen.
*/
	can_enable_video?: boolean;
	/**
True, if only group call administrators can unmute new participants.
*/
	mute_new_participants?: boolean;
	/**
True, if the current user can enable or disable mute_new_participants setting.
*/
	can_toggle_mute_new_participants?: boolean;
	/**
Duration of the ongoing group call recording, in seconds; 0 if none. An updateGroupCall update is not triggered when
value of this field changes, but the same recording goes on.
*/
	record_duration: number;
	/**
True, if a video file is being recorded for the call.
*/
	is_video_recorded?: boolean;
	/**
Call duration, in seconds; for ended calls only.
*/
	duration: number;
}

/**
Describes a group of video synchronization source identifiers.
*/
export interface GroupCallVideoSourceGroup {
	'@type': 'groupCallVideoSourceGroup';
	/**
The semantics of sources, one of "SIM" or "FID".
*/
	semantics: string;
	/**
The list of synchronization source identifiers.
*/
	source_ids: number[];
}

/**
Contains information about a group call participant's video channel.
*/
export interface GroupCallParticipantVideoInfo {
	'@type': 'groupCallParticipantVideoInfo';
	/**
List of synchronization source groups of the video.
*/
	source_groups: GroupCallVideoSourceGroup[];
	/**
Video channel endpoint identifier.
*/
	endpoint_id: string;
	/**
True if the video is paused. This flag needs to be ignored, if new video frames are received.
*/
	is_paused?: boolean;
}

/**
Represents a group call participant.
*/
export interface GroupCallParticipant {
	'@type': 'groupCallParticipant';
	/**
Identifier of the group call participant.
*/
	participant_id: MessageSender;
	/**
User's audio channel synchronization source identifier.
*/
	audio_source_id: number;
	/**
User's screen sharing audio channel synchronization source identifier.
*/
	screen_sharing_audio_source_id: number;
	/**
Information about user's video channel; may be null if there is no active video.
*/
	video_info: GroupCallParticipantVideoInfo;
	/**
Information about user's screen sharing video channel; may be null if there is no active screen sharing video.
*/
	screen_sharing_video_info: GroupCallParticipantVideoInfo;
	/**
The participant user's bio or the participant chat's description.
*/
	bio: string;
	/**
True, if the participant is the current user.
*/
	is_current_user?: boolean;
	/**
True, if the participant is speaking as set by setGroupCallParticipantIsSpeaking.
*/
	is_speaking?: boolean;
	/**
True, if the participant hand is raised.
*/
	is_hand_raised?: boolean;
	/**
True, if the current user can mute the participant for all other group call participants.
*/
	can_be_muted_for_all_users?: boolean;
	/**
True, if the current user can allow the participant to unmute themselves or unmute the participant (if the participant
is the current user).
*/
	can_be_unmuted_for_all_users?: boolean;
	/**
True, if the current user can mute the participant only for self.
*/
	can_be_muted_for_current_user?: boolean;
	/**
True, if the current user can unmute the participant for self.
*/
	can_be_unmuted_for_current_user?: boolean;
	/**
True, if the participant is muted for all users.
*/
	is_muted_for_all_users?: boolean;
	/**
True, if the participant is muted for the current user.
*/
	is_muted_for_current_user?: boolean;
	/**
True, if the participant is muted for all users, but can unmute themselves.
*/
	can_unmute_self?: boolean;
	/**
Participant's volume level; 1-20000 in hundreds of percents.
*/
	volume_level: number;
	/**
User's order in the group call participant list. Orders must be compared lexicographically. The bigger is order, the
higher is user in the list. If order is empty, the user must be removed from the participant list.
*/
	order: string;
}

/**
Describes the exact type of a problem with a call.
Subtype of {@link CallProblem}.
*/
export interface CallProblemEcho {
	'@type': 'callProblemEcho';

}

/**
The user heard background noise.
Subtype of {@link CallProblem}.
*/
export interface CallProblemNoise {
	'@type': 'callProblemNoise';

}

/**
The other side kept disappearing.
Subtype of {@link CallProblem}.
*/
export interface CallProblemInterruptions {
	'@type': 'callProblemInterruptions';

}

/**
The speech was distorted.
Subtype of {@link CallProblem}.
*/
export interface CallProblemDistortedSpeech {
	'@type': 'callProblemDistortedSpeech';

}

/**
The user couldn't hear the other side.
Subtype of {@link CallProblem}.
*/
export interface CallProblemSilentLocal {
	'@type': 'callProblemSilentLocal';

}

/**
The other side couldn't hear the user.
Subtype of {@link CallProblem}.
*/
export interface CallProblemSilentRemote {
	'@type': 'callProblemSilentRemote';

}

/**
The call ended unexpectedly.
Subtype of {@link CallProblem}.
*/
export interface CallProblemDropped {
	'@type': 'callProblemDropped';

}

/**
The video was distorted.
Subtype of {@link CallProblem}.
*/
export interface CallProblemDistortedVideo {
	'@type': 'callProblemDistortedVideo';

}

/**
The video was pixelated.
Subtype of {@link CallProblem}.
*/
export interface CallProblemPixelatedVideo {
	'@type': 'callProblemPixelatedVideo';

}

/**
Describes a call.
*/
export interface Call {
	'@type': 'call';
	/**
Call identifier, not persistent.
*/
	id: number;
	/**
Peer user identifier.
*/
	user_id: number;
	/**
True, if the call is outgoing.
*/
	is_outgoing?: boolean;
	/**
True, if the call is a video call.
*/
	is_video?: boolean;
	/**
Call state.
*/
	state: CallState;
}

/**
Contains settings for the authentication of the user's phone number.
*/
export interface PhoneNumberAuthenticationSettings {
	'@type': 'phoneNumberAuthenticationSettings';
	/**
Pass true if the authentication code may be sent via a flash call to the specified phone number.
*/
	allow_flash_call?: boolean;
	/**
Pass true if the authentication code may be sent via a missed call to the specified phone number.
*/
	allow_missed_call?: boolean;
	/**
Pass true if the authenticated phone number is used on the current device.
*/
	is_current_phone_number?: boolean;
	/**
For official applications only. True, if the application can use Android SMS Retriever API (requires Google Play
Services >= 10.2) to automatically receive the authentication code from the SMS. See
https://developers.google.com/identity/sms-retriever/ for more details.
*/
	allow_sms_retriever_api?: boolean;
	/**
List of up to 20 authentication tokens, recently received in updateOption("authentication_token") in previously logged
out sessions.
*/
	authentication_tokens: string[];
}

/**
Represents a reaction applied to a message.
*/
export interface AddedReaction {
	'@type': 'addedReaction';
	/**
Type of the reaction.
*/
	type: ReactionType;
	/**
Identifier of the chat member, applied the reaction.
*/
	sender_id: MessageSender;
}

/**
Represents a list of reactions added to a message.
*/
export interface AddedReactions {
	'@type': 'addedReactions';
	/**
The total number of found reactions.
*/
	total_count: number;
	/**
The list of added reactions.
*/
	reactions: AddedReaction[];
	/**
The offset for the next request. If empty, there are no more results.
*/
	next_offset: string;
}

/**
Represents an available reaction.
*/
export interface AvailableReaction {
	'@type': 'availableReaction';
	/**
Type of the reaction.
*/
	type: ReactionType;
	/**
True, if Telegram Premium is needed to send the reaction.
*/
	needs_premium?: boolean;
}

/**
Represents a list of reactions that can be added to a message.
*/
export interface AvailableReactions {
	'@type': 'availableReactions';
	/**
List of reactions to be shown at the top.
*/
	top_reactions: AvailableReaction[];
	/**
List of recently used reactions.
*/
	recent_reactions: AvailableReaction[];
	/**
List of popular reactions.
*/
	popular_reactions: AvailableReaction[];
	/**
True, if custom emoji reactions could be added by Telegram Premium subscribers.
*/
	allow_custom_emoji?: boolean;
}

/**
Contains information about a emoji reaction.
*/
export interface EmojiReaction {
	'@type': 'emojiReaction';
	/**
Text representation of the reaction.
*/
	emoji: string;
	/**
Reaction title.
*/
	title: string;
	/**
True, if the reaction can be added to new messages and enabled in chats.
*/
	is_active?: boolean;
	/**
Static icon for the reaction.
*/
	static_icon: Sticker;
	/**
Appear animation for the reaction.
*/
	appear_animation: Sticker;
	/**
Select animation for the reaction.
*/
	select_animation: Sticker;
	/**
Activate animation for the reaction.
*/
	activate_animation: Sticker;
	/**
Effect animation for the reaction.
*/
	effect_animation: Sticker;
	/**
Around animation for the reaction; may be null.
*/
	around_animation: Sticker;
	/**
Center animation for the reaction; may be null.
*/
	center_animation: Sticker;
}

/**
Represents a list of animations.
*/
export interface Animations {
	'@type': 'animations';
	/**
List of animations.
*/
	animations: Animation[];
}

/**
Contains animated stickers which must be used for dice animation rendering.
Subtype of {@link DiceStickers}.
*/
export interface DiceStickersRegular {
	'@type': 'diceStickersRegular';
	/**
The animated sticker with the dice animation.
*/
	sticker: Sticker;
}

/**
Animated stickers to be combined into a slot machine.
Subtype of {@link DiceStickers}.
*/
export interface DiceStickersSlotMachine {
	'@type': 'diceStickersSlotMachine';
	/**
The animated sticker with the slot machine background. The background animation must start playing after all reel
animations finish.
*/
	background: Sticker;
	/**
The animated sticker with the lever animation. The lever animation must play once in the initial dice state.
*/
	lever: Sticker;
	/**
The animated sticker with the left reel.
*/
	left_reel: Sticker;
	/**
The animated sticker with the center reel.
*/
	center_reel: Sticker;
	/**
The animated sticker with the right reel.
*/
	right_reel: Sticker;
}

/**
Represents the result of an ImportContacts request.
*/
export interface ImportedContacts {
	'@type': 'importedContacts';
	/**
User identifiers of the imported contacts in the same order as they were specified in the request; 0 if the contact is
not yet a registered user.
*/
	user_ids: number[];
	/**
The number of users that imported the corresponding contact; 0 for already registered users or if unavailable.
*/
	importer_count: number[];
}

/**
Describes result of speech recognition in a voice note.
Subtype of {@link SpeechRecognitionResult}.
*/
export interface SpeechRecognitionResultPending {
	'@type': 'speechRecognitionResultPending';
	/**
Partially recognized text.
*/
	partial_text: string;
}

/**
The speech recognition successfully finished.
Subtype of {@link SpeechRecognitionResult}.
*/
export interface SpeechRecognitionResultText {
	'@type': 'speechRecognitionResultText';
	/**
Recognized text.
*/
	text: string;
}

/**
The speech recognition failed.
Subtype of {@link SpeechRecognitionResult}.
*/
export interface SpeechRecognitionResultError {
	'@type': 'speechRecognitionResultError';
	/**
Received error.
*/
	error: Error;
}

/**
Describes a color to highlight a bot added to attachment menu.
*/
export interface AttachmentMenuBotColor {
	'@type': 'attachmentMenuBotColor';
	/**
Color in the RGB24 format for light themes.
*/
	light_color: number;
	/**
Color in the RGB24 format for dark themes.
*/
	dark_color: number;
}

/**
Represents a bot added to attachment menu.
*/
export interface AttachmentMenuBot {
	'@type': 'attachmentMenuBot';
	/**
User identifier of the bot added to attachment menu.
*/
	bot_user_id: number;
	/**
True, if the bot supports opening from attachment menu in the chat with the bot.
*/
	supports_self_chat?: boolean;
	/**
True, if the bot supports opening from attachment menu in private chats with ordinary users.
*/
	supports_user_chats?: boolean;
	/**
True, if the bot supports opening from attachment menu in private chats with other bots.
*/
	supports_bot_chats?: boolean;
	/**
True, if the bot supports opening from attachment menu in basic group and supergroup chats.
*/
	supports_group_chats?: boolean;
	/**
True, if the bot supports opening from attachment menu in channel chats.
*/
	supports_channel_chats?: boolean;
	/**
True, if the bot supports "settings_button_pressed" event.
*/
	supports_settings?: boolean;
	/**
Name for the bot in attachment menu.
*/
	name: string;
	/**
Color to highlight selected name of the bot if appropriate; may be null.
*/
	name_color: AttachmentMenuBotColor;
	/**
Default attachment menu icon for the bot in SVG format; may be null.
*/
	default_icon: File;
	/**
Attachment menu icon for the bot in SVG format for the official iOS app; may be null.
*/
	ios_static_icon: File;
	/**
Attachment menu icon for the bot in TGS format for the official iOS app; may be null.
*/
	ios_animated_icon: File;
	/**
Attachment menu icon for the bot in TGS format for the official Android app; may be null.
*/
	android_icon: File;
	/**
Attachment menu icon for the bot in TGS format for the official native macOS app; may be null.
*/
	macos_icon: File;
	/**
Color to highlight selected icon of the bot if appropriate; may be null.
*/
	icon_color: AttachmentMenuBotColor;
	/**
Default placeholder for opened Web Apps in SVG format; may be null.
*/
	web_app_placeholder: File;
}

/**
Information about the message sent by answerWebAppQuery.
*/
export interface SentWebAppMessage {
	'@type': 'sentWebAppMessage';
	/**
Identifier of the sent inline message, if known.
*/
	inline_message_id: string;
}

/**
Contains an HTTP URL.
*/
export interface HttpUrl {
	'@type': 'httpUrl';
	/**
The URL.
*/
	url: string;
}

/**
Represents a single result of an inline query; for bots only.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultAnimation {
	'@type': 'inputInlineQueryResultAnimation';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Title of the query result.
*/
	title: string;
	/**
URL of the result thumbnail (JPEG, GIF, or MPEG4), if it exists.
*/
	thumbnail_url: string;
	/**
MIME type of the video thumbnail. If non-empty, must be one of "image/jpeg", "image/gif" and "video/mp4".
*/
	thumbnail_mime_type: string;
	/**
The URL of the video file (file size must not exceed 1MB).
*/
	video_url: string;
	/**
MIME type of the video file. Must be one of "image/gif" and "video/mp4".
*/
	video_mime_type: string;
	/**
Duration of the video, in seconds.
*/
	video_duration: number;
	/**
Width of the video.
*/
	video_width: number;
	/**
Height of the video.
*/
	video_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAnimation,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a link to an article or web page.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultArticle {
	'@type': 'inputInlineQueryResultArticle';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
URL of the result, if it exists.
*/
	url: string;
	/**
True, if the URL must be not shown.
*/
	hide_url?: boolean;
	/**
Title of the result.
*/
	title: string;
	/**
Represents a link to an article or web page.
*/
	description: string;
	/**
URL of the result thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
Thumbnail width, if known.
*/
	thumbnail_width: number;
	/**
Thumbnail height, if known.
*/
	thumbnail_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice,
inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a link to an MP3 audio file.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultAudio {
	'@type': 'inputInlineQueryResultAudio';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Title of the audio file.
*/
	title: string;
	/**
Performer of the audio file.
*/
	performer: string;
	/**
The URL of the audio file.
*/
	audio_url: string;
	/**
Audio file duration, in seconds.
*/
	audio_duration: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAudio,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a user contact.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultContact {
	'@type': 'inputInlineQueryResultContact';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
User contact.
*/
	contact: Contact;
	/**
URL of the result thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
Thumbnail width, if known.
*/
	thumbnail_width: number;
	/**
Thumbnail height, if known.
*/
	thumbnail_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice,
inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a link to a file.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultDocument {
	'@type': 'inputInlineQueryResultDocument';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Title of the resulting file.
*/
	title: string;
	/**
Represents a link to a file.
*/
	description: string;
	/**
URL of the file.
*/
	document_url: string;
	/**
MIME type of the file content; only "application/pdf" and "application/zip" are currently allowed.
*/
	mime_type: string;
	/**
The URL of the file thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
Width of the thumbnail.
*/
	thumbnail_width: number;
	/**
Height of the thumbnail.
*/
	thumbnail_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageDocument,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a game.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultGame {
	'@type': 'inputInlineQueryResultGame';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Short name of the game.
*/
	game_short_name: string;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
}

/**
Represents a point on the map.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultLocation {
	'@type': 'inputInlineQueryResultLocation';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Location result.
*/
	location: Location;
	/**
Amount of time relative to the message sent time until the location can be updated, in seconds.
*/
	live_period: number;
	/**
Title of the result.
*/
	title: string;
	/**
URL of the result thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
Thumbnail width, if known.
*/
	thumbnail_width: number;
	/**
Thumbnail height, if known.
*/
	thumbnail_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice,
inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents link to a JPEG image.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultPhoto {
	'@type': 'inputInlineQueryResultPhoto';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Title of the result, if known.
*/
	title: string;
	/**
Represents link to a JPEG image.
*/
	description: string;
	/**
URL of the photo thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
The URL of the JPEG photo (photo size must not exceed 5MB).
*/
	photo_url: string;
	/**
Width of the photo.
*/
	photo_width: number;
	/**
Height of the photo.
*/
	photo_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessagePhoto,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a link to a WEBP, TGS, or WEBM sticker.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultSticker {
	'@type': 'inputInlineQueryResultSticker';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
URL of the sticker thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
The URL of the WEBP, TGS, or WEBM sticker (sticker file size must not exceed 5MB).
*/
	sticker_url: string;
	/**
Width of the sticker.
*/
	sticker_width: number;
	/**
Height of the sticker.
*/
	sticker_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageSticker,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents information about a venue.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultVenue {
	'@type': 'inputInlineQueryResultVenue';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Venue result.
*/
	venue: Venue;
	/**
URL of the result thumbnail, if it exists.
*/
	thumbnail_url: string;
	/**
Thumbnail width, if known.
*/
	thumbnail_width: number;
	/**
Thumbnail height, if known.
*/
	thumbnail_height: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice,
inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a link to a page containing an embedded video player or a video file.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultVideo {
	'@type': 'inputInlineQueryResultVideo';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Title of the result.
*/
	title: string;
	/**
Represents a link to a page containing an embedded video player or a video file.
*/
	description: string;
	/**
The URL of the video thumbnail (JPEG), if it exists.
*/
	thumbnail_url: string;
	/**
URL of the embedded video player or video file.
*/
	video_url: string;
	/**
MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently supported.
*/
	mime_type: string;
	/**
Width of the video.
*/
	video_width: number;
	/**
Height of the video.
*/
	video_height: number;
	/**
Video duration, in seconds.
*/
	video_duration: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVideo,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a link to an opus-encoded audio file within an OGG container, single channel audio.
Subtype of {@link InputInlineQueryResult}.
*/
export interface InputInlineQueryResultVoiceNote {
	'@type': 'inputInlineQueryResultVoiceNote';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Title of the voice note.
*/
	title: string;
	/**
The URL of the voice note file.
*/
	voice_note_url: string;
	/**
Duration of the voice note, in seconds.
*/
	voice_note_duration: number;
	/**
The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVoiceNote,
inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact.
*/
	input_message_content: InputMessageContent;
}

/**
Represents a single result of an inline query.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultArticle {
	'@type': 'inlineQueryResultArticle';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
URL of the result, if it exists.
*/
	url: string;
	/**
True, if the URL must be not shown.
*/
	hide_url?: boolean;
	/**
Title of the result.
*/
	title: string;
	/**
Represents a single result of an inline query.
*/
	description: string;
	/**
Result thumbnail in JPEG format; may be null.
*/
	thumbnail: Thumbnail;
}

/**
Represents a user contact.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultContact {
	'@type': 'inlineQueryResultContact';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
A user contact.
*/
	contact: Contact;
	/**
Result thumbnail in JPEG format; may be null.
*/
	thumbnail: Thumbnail;
}

/**
Represents a point on the map.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultLocation {
	'@type': 'inlineQueryResultLocation';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Location result.
*/
	location: Location;
	/**
Title of the result.
*/
	title: string;
	/**
Result thumbnail in JPEG format; may be null.
*/
	thumbnail: Thumbnail;
}

/**
Represents information about a venue.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultVenue {
	'@type': 'inlineQueryResultVenue';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Venue result.
*/
	venue: Venue;
	/**
Result thumbnail in JPEG format; may be null.
*/
	thumbnail: Thumbnail;
}

/**
Represents information about a game.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultGame {
	'@type': 'inlineQueryResultGame';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Game result.
*/
	game: Game;
}

/**
Represents an animation file.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultAnimation {
	'@type': 'inlineQueryResultAnimation';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Animation file.
*/
	animation: Animation;
	/**
Animation title.
*/
	title: string;
}

/**
Represents an audio file.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultAudio {
	'@type': 'inlineQueryResultAudio';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Audio file.
*/
	audio: Audio;
}

/**
Represents a document.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultDocument {
	'@type': 'inlineQueryResultDocument';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Document.
*/
	document: Document;
	/**
Document title.
*/
	title: string;
	/**
Represents a document.
*/
	description: string;
}

/**
Represents a photo.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultPhoto {
	'@type': 'inlineQueryResultPhoto';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Photo.
*/
	photo: Photo;
	/**
Title of the result, if known.
*/
	title: string;
	/**
Represents a photo.
*/
	description: string;
}

/**
Represents a sticker.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultSticker {
	'@type': 'inlineQueryResultSticker';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Sticker.
*/
	sticker: Sticker;
}

/**
Represents a video.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultVideo {
	'@type': 'inlineQueryResultVideo';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Video.
*/
	video: Video;
	/**
Title of the video.
*/
	title: string;
	/**
Represents a video.
*/
	description: string;
}

/**
Represents a voice note.
Subtype of {@link InlineQueryResult}.
*/
export interface InlineQueryResultVoiceNote {
	'@type': 'inlineQueryResultVoiceNote';
	/**
Unique identifier of the query result.
*/
	id: string;
	/**
Voice note.
*/
	voice_note: VoiceNote;
	/**
Title of the voice note.
*/
	title: string;
}

/**
Represents the results of the inline query. Use sendInlineQueryResultMessage to send the result of the query.
*/
export interface InlineQueryResults {
	'@type': 'inlineQueryResults';
	/**
Unique identifier of the inline query.
*/
	inline_query_id: string;
	/**
The offset for the next request. If empty, there are no more results.
*/
	next_offset: string;
	/**
Results of the query.
*/
	results: InlineQueryResult[];
	/**
If non-empty, this text must be shown on the button, which opens a private chat with the bot and sends the bot a start
message with the switch_pm_parameter.
*/
	switch_pm_text: string;
	/**
Parameter for the bot start message.
*/
	switch_pm_parameter: string;
}

/**
Represents a payload of a callback query.
Subtype of {@link CallbackQueryPayload}.
*/
export interface CallbackQueryPayloadData {
	'@type': 'callbackQueryPayloadData';
	/**
Data that was attached to the callback button.
*/
	data: string;
}

/**
The payload for a callback button requiring password.
Subtype of {@link CallbackQueryPayload}.
*/
export interface CallbackQueryPayloadDataWithPassword {
	'@type': 'callbackQueryPayloadDataWithPassword';
	/**
The 2-step verification password for the current user.
*/
	password: string;
	/**
Data that was attached to the callback button.
*/
	data: string;
}

/**
The payload for a game callback button.
Subtype of {@link CallbackQueryPayload}.
*/
export interface CallbackQueryPayloadGame {
	'@type': 'callbackQueryPayloadGame';
	/**
A short name of the game that was attached to the callback button.
*/
	game_short_name: string;
}

/**
Contains a bot's answer to a callback query.
*/
export interface CallbackQueryAnswer {
	'@type': 'callbackQueryAnswer';
	/**
Text of the answer.
*/
	text: string;
	/**
True, if an alert must be shown to the user instead of a toast notification.
*/
	show_alert?: boolean;
	/**
URL to be opened.
*/
	url: string;
}

/**
Contains the result of a custom request.
*/
export interface CustomRequestResult {
	'@type': 'customRequestResult';
	/**
A JSON-serialized result.
*/
	result: string;
}

/**
Contains one row of the game high score table.
*/
export interface GameHighScore {
	'@type': 'gameHighScore';
	/**
Position in the high score table.
*/
	position: number;
	/**
User identifier.
*/
	user_id: number;
	/**
User score.
*/
	score: number;
}

/**
Contains a list of game high scores.
*/
export interface GameHighScores {
	'@type': 'gameHighScores';
	/**
A list of game high scores.
*/
	scores: GameHighScore[];
}

/**
Represents a chat event.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMessageEdited {
	'@type': 'chatEventMessageEdited';
	/**
The original message before the edit.
*/
	old_message: Message;
	/**
The message after it was edited.
*/
	new_message: Message;
}

/**
A message was deleted.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMessageDeleted {
	'@type': 'chatEventMessageDeleted';
	/**
Deleted message.
*/
	message: Message;
}

/**
A message was pinned.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMessagePinned {
	'@type': 'chatEventMessagePinned';
	/**
Pinned message.
*/
	message: Message;
}

/**
A message was unpinned.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMessageUnpinned {
	'@type': 'chatEventMessageUnpinned';
	/**
Unpinned message.
*/
	message: Message;
}

/**
A poll in a message was stopped.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventPollStopped {
	'@type': 'chatEventPollStopped';
	/**
The message with the poll.
*/
	message: Message;
}

/**
A new member joined the chat.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberJoined {
	'@type': 'chatEventMemberJoined';

}

/**
A new member joined the chat via an invite link.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberJoinedByInviteLink {
	'@type': 'chatEventMemberJoinedByInviteLink';
	/**
Invite link used to join the chat.
*/
	invite_link: ChatInviteLink;
}

/**
A new member was accepted to the chat by an administrator.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberJoinedByRequest {
	'@type': 'chatEventMemberJoinedByRequest';
	/**
User identifier of the chat administrator, approved user join request.
*/
	approver_user_id: number;
	/**
Invite link used to join the chat; may be null.
*/
	invite_link: ChatInviteLink;
}

/**
A new chat member was invited.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberInvited {
	'@type': 'chatEventMemberInvited';
	/**
New member user identifier.
*/
	user_id: number;
	/**
New member status.
*/
	status: ChatMemberStatus;
}

/**
A member left the chat.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberLeft {
	'@type': 'chatEventMemberLeft';

}

/**
A chat member has gained/lost administrator status, or the list of their administrator privileges has changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberPromoted {
	'@type': 'chatEventMemberPromoted';
	/**
Affected chat member user identifier.
*/
	user_id: number;
	/**
Previous status of the chat member.
*/
	old_status: ChatMemberStatus;
	/**
New status of the chat member.
*/
	new_status: ChatMemberStatus;
}

/**
A chat member was restricted/unrestricted or banned/unbanned, or the list of their restrictions has changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMemberRestricted {
	'@type': 'chatEventMemberRestricted';
	/**
Affected chat member identifier.
*/
	member_id: MessageSender;
	/**
Previous status of the chat member.
*/
	old_status: ChatMemberStatus;
	/**
New status of the chat member.
*/
	new_status: ChatMemberStatus;
}

/**
The chat available reactions were changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventAvailableReactionsChanged {
	'@type': 'chatEventAvailableReactionsChanged';
	/**
Previous chat available reactions.
*/
	old_available_reactions: ChatAvailableReactions;
	/**
New chat available reactions.
*/
	new_available_reactions: ChatAvailableReactions;
}

/**
The chat description was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventDescriptionChanged {
	'@type': 'chatEventDescriptionChanged';
	/**
Previous chat description.
*/
	old_description: string;
	/**
New chat description.
*/
	new_description: string;
}

/**
The linked chat of a supergroup was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventLinkedChatChanged {
	'@type': 'chatEventLinkedChatChanged';
	/**
Previous supergroup linked chat identifier.
*/
	old_linked_chat_id: number;
	/**
New supergroup linked chat identifier.
*/
	new_linked_chat_id: number;
}

/**
The supergroup location was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventLocationChanged {
	'@type': 'chatEventLocationChanged';
	/**
Previous location; may be null.
*/
	old_location: ChatLocation;
	/**
New location; may be null.
*/
	new_location: ChatLocation;
}

/**
The message TTL was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventMessageTtlChanged {
	'@type': 'chatEventMessageTtlChanged';
	/**
Previous value of message_ttl.
*/
	old_message_ttl: number;
	/**
New value of message_ttl.
*/
	new_message_ttl: number;
}

/**
The chat permissions was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventPermissionsChanged {
	'@type': 'chatEventPermissionsChanged';
	/**
Previous chat permissions.
*/
	old_permissions: ChatPermissions;
	/**
New chat permissions.
*/
	new_permissions: ChatPermissions;
}

/**
The chat photo was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventPhotoChanged {
	'@type': 'chatEventPhotoChanged';
	/**
Previous chat photo value; may be null.
*/
	old_photo: ChatPhoto;
	/**
New chat photo value; may be null.
*/
	new_photo: ChatPhoto;
}

/**
The slow_mode_delay setting of a supergroup was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventSlowModeDelayChanged {
	'@type': 'chatEventSlowModeDelayChanged';
	/**
Previous value of slow_mode_delay, in seconds.
*/
	old_slow_mode_delay: number;
	/**
New value of slow_mode_delay, in seconds.
*/
	new_slow_mode_delay: number;
}

/**
The supergroup sticker set was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventStickerSetChanged {
	'@type': 'chatEventStickerSetChanged';
	/**
Previous identifier of the chat sticker set; 0 if none.
*/
	old_sticker_set_id: string;
	/**
New identifier of the chat sticker set; 0 if none.
*/
	new_sticker_set_id: string;
}

/**
The chat title was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventTitleChanged {
	'@type': 'chatEventTitleChanged';
	/**
Previous chat title.
*/
	old_title: string;
	/**
New chat title.
*/
	new_title: string;
}

/**
The chat username was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventUsernameChanged {
	'@type': 'chatEventUsernameChanged';
	/**
Previous chat username.
*/
	old_username: string;
	/**
New chat username.
*/
	new_username: string;
}

/**
The has_protected_content setting of a channel was toggled.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventHasProtectedContentToggled {
	'@type': 'chatEventHasProtectedContentToggled';
	/**
New value of has_protected_content.
*/
	has_protected_content?: boolean;
}

/**
The can_invite_users permission of a supergroup chat was toggled.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventInvitesToggled {
	'@type': 'chatEventInvitesToggled';
	/**
New value of can_invite_users permission.
*/
	can_invite_users?: boolean;
}

/**
The is_all_history_available setting of a supergroup was toggled.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventIsAllHistoryAvailableToggled {
	'@type': 'chatEventIsAllHistoryAvailableToggled';
	/**
New value of is_all_history_available.
*/
	is_all_history_available?: boolean;
}

/**
The sign_messages setting of a channel was toggled.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventSignMessagesToggled {
	'@type': 'chatEventSignMessagesToggled';
	/**
New value of sign_messages.
*/
	sign_messages?: boolean;
}

/**
A chat invite link was edited.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventInviteLinkEdited {
	'@type': 'chatEventInviteLinkEdited';
	/**
Previous information about the invite link.
*/
	old_invite_link: ChatInviteLink;
	/**
New information about the invite link.
*/
	new_invite_link: ChatInviteLink;
}

/**
A chat invite link was revoked.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventInviteLinkRevoked {
	'@type': 'chatEventInviteLinkRevoked';
	/**
The invite link.
*/
	invite_link: ChatInviteLink;
}

/**
A revoked chat invite link was deleted.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventInviteLinkDeleted {
	'@type': 'chatEventInviteLinkDeleted';
	/**
The invite link.
*/
	invite_link: ChatInviteLink;
}

/**
A video chat was created.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventVideoChatCreated {
	'@type': 'chatEventVideoChatCreated';
	/**
Identifier of the video chat. The video chat can be received through the method getGroupCall.
*/
	group_call_id: number;
}

/**
A video chat was ended.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventVideoChatEnded {
	'@type': 'chatEventVideoChatEnded';
	/**
Identifier of the video chat. The video chat can be received through the method getGroupCall.
*/
	group_call_id: number;
}

/**
The mute_new_participants setting of a video chat was toggled.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventVideoChatMuteNewParticipantsToggled {
	'@type': 'chatEventVideoChatMuteNewParticipantsToggled';
	/**
New value of the mute_new_participants setting.
*/
	mute_new_participants?: boolean;
}

/**
A video chat participant was muted or unmuted.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventVideoChatParticipantIsMutedToggled {
	'@type': 'chatEventVideoChatParticipantIsMutedToggled';
	/**
Identifier of the affected group call participant.
*/
	participant_id: MessageSender;
	/**
New value of is_muted.
*/
	is_muted?: boolean;
}

/**
A video chat participant volume level was changed.
Subtype of {@link ChatEventAction}.
*/
export interface ChatEventVideoChatParticipantVolumeLevelChanged {
	'@type': 'chatEventVideoChatParticipantVolumeLevelChanged';
	/**
Identifier of the affected group call participant.
*/
	participant_id: MessageSender;
	/**
New value of volume_level; 1-20000 in hundreds of percents.
*/
	volume_level: number;
}

/**
Represents a chat event.
*/
export interface ChatEvent {
	'@type': 'chatEvent';
	/**
Chat event identifier.
*/
	id: string;
	/**
Point in time (Unix timestamp) when the event happened.
*/
	date: number;
	/**
Identifier of the user or chat who performed the action.
*/
	member_id: MessageSender;
	/**
The action.
*/
	action: ChatEventAction;
}

/**
Contains a list of chat events.
*/
export interface ChatEvents {
	'@type': 'chatEvents';
	/**
List of events.
*/
	events: ChatEvent[];
}

/**
Represents a set of filters used to obtain a chat event log.
*/
export interface ChatEventLogFilters {
	'@type': 'chatEventLogFilters';
	/**
True, if message edits need to be returned.
*/
	message_edits?: boolean;
	/**
True, if message deletions need to be returned.
*/
	message_deletions?: boolean;
	/**
True, if pin/unpin events need to be returned.
*/
	message_pins?: boolean;
	/**
True, if members joining events need to be returned.
*/
	member_joins?: boolean;
	/**
True, if members leaving events need to be returned.
*/
	member_leaves?: boolean;
	/**
True, if invited member events need to be returned.
*/
	member_invites?: boolean;
	/**
True, if member promotion/demotion events need to be returned.
*/
	member_promotions?: boolean;
	/**
True, if member restricted/unrestricted/banned/unbanned events need to be returned.
*/
	member_restrictions?: boolean;
	/**
True, if changes in chat information need to be returned.
*/
	info_changes?: boolean;
	/**
True, if changes in chat settings need to be returned.
*/
	setting_changes?: boolean;
	/**
True, if changes to invite links need to be returned.
*/
	invite_link_changes?: boolean;
	/**
True, if video chat actions need to be returned.
*/
	video_chat_changes?: boolean;
}

/**
Represents the value of a string in a language pack.
Subtype of {@link LanguagePackStringValue}.
*/
export interface LanguagePackStringValueOrdinary {
	'@type': 'languagePackStringValueOrdinary';
	/**
String value.
*/
	value: string;
}

/**
A language pack string which has different forms based on the number of some object it mentions. See
https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html for more information.
Subtype of {@link LanguagePackStringValue}.
*/
export interface LanguagePackStringValuePluralized {
	'@type': 'languagePackStringValuePluralized';
	/**
Value for zero objects.
*/
	zero_value: string;
	/**
Value for one object.
*/
	one_value: string;
	/**
Value for two objects.
*/
	two_value: string;
	/**
Value for few objects.
*/
	few_value: string;
	/**
Value for many objects.
*/
	many_value: string;
	/**
Default value.
*/
	other_value: string;
}

/**
A deleted language pack string, the value must be taken from the built-in English language pack.
Subtype of {@link LanguagePackStringValue}.
*/
export interface LanguagePackStringValueDeleted {
	'@type': 'languagePackStringValueDeleted';

}

/**
Represents one language pack string.
*/
export interface LanguagePackString {
	'@type': 'languagePackString';
	/**
String key.
*/
	key: string;
	/**
String value; pass null if the string needs to be taken from the built-in English language pack.
*/
	value: LanguagePackStringValue;
}

/**
Contains a list of language pack strings.
*/
export interface LanguagePackStrings {
	'@type': 'languagePackStrings';
	/**
A list of language pack strings.
*/
	strings: LanguagePackString[];
}

/**
Contains information about a language pack.
*/
export interface LanguagePackInfo {
	'@type': 'languagePackInfo';
	/**
Unique language pack identifier.
*/
	id: string;
	/**
Identifier of a base language pack; may be empty. If a string is missed in the language pack, then it must be fetched
from base language pack. Unsupported in custom language packs.
*/
	base_language_pack_id: string;
	/**
Language name.
*/
	name: string;
	/**
Name of the language in that language.
*/
	native_name: string;
	/**
A language code to be used to apply plural forms. See
https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html for more information.
*/
	plural_code: string;
	/**
True, if the language pack is official.
*/
	is_official?: boolean;
	/**
True, if the language pack strings are RTL.
*/
	is_rtl?: boolean;
	/**
True, if the language pack is a beta language pack.
*/
	is_beta?: boolean;
	/**
True, if the language pack is installed by the current user.
*/
	is_installed?: boolean;
	/**
Total number of non-deleted strings from the language pack.
*/
	total_string_count: number;
	/**
Total number of translated strings from the language pack.
*/
	translated_string_count: number;
	/**
Total number of non-deleted strings from the language pack available locally.
*/
	local_string_count: number;
	/**
Link to language translation interface; empty for custom local language packs.
*/
	translation_url: string;
}

/**
Contains information about the current localization target.
*/
export interface LocalizationTargetInfo {
	'@type': 'localizationTargetInfo';
	/**
List of available language packs for this application.
*/
	language_packs: LanguagePackInfo[];
}

/**
Describes type of a limit, increased for Premium users.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeSupergroupCount {
	'@type': 'premiumLimitTypeSupergroupCount';

}

/**
The maximum number of pinned chats in the main chat list.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypePinnedChatCount {
	'@type': 'premiumLimitTypePinnedChatCount';

}

/**
The maximum number of created public chats.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeCreatedPublicChatCount {
	'@type': 'premiumLimitTypeCreatedPublicChatCount';

}

/**
The maximum number of saved animations.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeSavedAnimationCount {
	'@type': 'premiumLimitTypeSavedAnimationCount';

}

/**
The maximum number of favorite stickers.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeFavoriteStickerCount {
	'@type': 'premiumLimitTypeFavoriteStickerCount';

}

/**
The maximum number of chat filters.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeChatFilterCount {
	'@type': 'premiumLimitTypeChatFilterCount';

}

/**
The maximum number of pinned and always included, or always excluded chats in a chat filter.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeChatFilterChosenChatCount {
	'@type': 'premiumLimitTypeChatFilterChosenChatCount';

}

/**
The maximum number of pinned chats in the archive chat list.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypePinnedArchivedChatCount {
	'@type': 'premiumLimitTypePinnedArchivedChatCount';

}

/**
The maximum length of sent media caption.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeCaptionLength {
	'@type': 'premiumLimitTypeCaptionLength';

}

/**
The maximum length of the user's bio.
Subtype of {@link PremiumLimitType}.
*/
export interface PremiumLimitTypeBioLength {
	'@type': 'premiumLimitTypeBioLength';

}

/**
Describes a feature available to Premium users.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureIncreasedLimits {
	'@type': 'premiumFeatureIncreasedLimits';

}

/**
Increased maximum upload file size.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureIncreasedUploadFileSize {
	'@type': 'premiumFeatureIncreasedUploadFileSize';

}

/**
Improved download speed.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureImprovedDownloadSpeed {
	'@type': 'premiumFeatureImprovedDownloadSpeed';

}

/**
The ability to convert voice notes to text.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureVoiceRecognition {
	'@type': 'premiumFeatureVoiceRecognition';

}

/**
Disabled ads.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureDisabledAds {
	'@type': 'premiumFeatureDisabledAds';

}

/**
Allowed to use more reactions.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureUniqueReactions {
	'@type': 'premiumFeatureUniqueReactions';

}

/**
Allowed to use premium stickers with unique effects.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureUniqueStickers {
	'@type': 'premiumFeatureUniqueStickers';

}

/**
Allowed to use custom emoji stickers in message texts and captions.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureCustomEmoji {
	'@type': 'premiumFeatureCustomEmoji';

}

/**
Ability to change position of the main chat list, archive and mute all new chats from non-contacts, and completely
disable notifications about the user's contacts joined Telegram.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureAdvancedChatManagement {
	'@type': 'premiumFeatureAdvancedChatManagement';

}

/**
A badge in the user's profile.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureProfileBadge {
	'@type': 'premiumFeatureProfileBadge';

}

/**
A emoji status shown along with the user's name.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureEmojiStatus {
	'@type': 'premiumFeatureEmojiStatus';

}

/**
Profile photo animation on message and chat screens.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureAnimatedProfilePhoto {
	'@type': 'premiumFeatureAnimatedProfilePhoto';

}

/**
Allowed to set a premium appllication icons.
Subtype of {@link PremiumFeature}.
*/
export interface PremiumFeatureAppIcons {
	'@type': 'premiumFeatureAppIcons';

}

/**
Contains information about a limit, increased for Premium users.
*/
export interface PremiumLimit {
	'@type': 'premiumLimit';
	/**
The type of the limit.
*/
	type: PremiumLimitType;
	/**
Default value of the limit.
*/
	default_value: number;
	/**
Value of the limit for Premium users.
*/
	premium_value: number;
}

/**
Contains information about features, available to Premium users.
*/
export interface PremiumFeatures {
	'@type': 'premiumFeatures';
	/**
The list of available features.
*/
	features: PremiumFeature[];
	/**
The list of limits, increased for Premium users.
*/
	limits: PremiumLimit[];
	/**
An internal link to be opened to pay for Telegram Premium if store payment isn't possible; may be null if direct payment
isn't available.
*/
	payment_link: InternalLinkType;
}

/**
Describes a source from which the Premium features screen is opened.
Subtype of {@link PremiumSource}.
*/
export interface PremiumSourceLimitExceeded {
	'@type': 'premiumSourceLimitExceeded';
	/**
Type of the exceeded limit.
*/
	limit_type: PremiumLimitType;
}

/**
A user tried to use a Premium feature.
Subtype of {@link PremiumSource}.
*/
export interface PremiumSourceFeature {
	'@type': 'premiumSourceFeature';
	/**
The used feature.
*/
	feature: PremiumFeature;
}

/**
A user opened an internal link of the type internalLinkTypePremiumFeatures.
Subtype of {@link PremiumSource}.
*/
export interface PremiumSourceLink {
	'@type': 'premiumSourceLink';
	/**
The referrer from the link.
*/
	referrer: string;
}

/**
A user opened the Premium features screen from settings.
Subtype of {@link PremiumSource}.
*/
export interface PremiumSourceSettings {
	'@type': 'premiumSourceSettings';

}

/**
Describes a promotion animation for a Premium feature.
*/
export interface PremiumFeaturePromotionAnimation {
	'@type': 'premiumFeaturePromotionAnimation';
	/**
Premium feature.
*/
	feature: PremiumFeature;
	/**
Promotion animation for the feature.
*/
	animation: Animation;
}

/**
Contains state of Telegram Premium subscription and promotion videos for Premium features.
*/
export interface PremiumState {
	'@type': 'premiumState';
	/**
Text description of the state of the current Premium subscription; may be empty if the current user has no Telegram
Premium subscription.
*/
	state: FormattedText;
	/**
The list of available options for buying Telegram Premium.
*/
	payment_options: PremiumPaymentOption[];
	/**
The list of available promotion animations for Premium features.
*/
	animations: PremiumFeaturePromotionAnimation[];
}

/**
Describes a purpose of an in-store payment.
Subtype of {@link StorePaymentPurpose}.
*/
export interface StorePaymentPurposePremiumSubscription {
	'@type': 'storePaymentPurposePremiumSubscription';
	/**
Pass true if this is a restore of a Telegram Premium purchase; only for App Store.
*/
	is_restore?: boolean;
}

/**
The user gifted Telegram Premium to another user.
Subtype of {@link StorePaymentPurpose}.
*/
export interface StorePaymentPurposeGiftedPremium {
	'@type': 'storePaymentPurposeGiftedPremium';
	/**
Identifier of the user for which Premium was gifted.
*/
	user_id: number;
	/**
ISO 4217 currency code of the payment currency.
*/
	currency: string;
	/**
Paid amount, in the smallest units of the currency.
*/
	amount: number;
}

/**
Represents a data needed to subscribe for push notifications through registerDevice method. To use specific push
notification service, the correct application platform must be specified and a valid server authentication data must be
uploaded at https://my.telegram.org.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenFirebaseCloudMessaging {
	'@type': 'deviceTokenFirebaseCloudMessaging';
	/**
Device registration token; may be empty to deregister a device.
*/
	token: string;
	/**
True, if push notifications must be additionally encrypted.
*/
	encrypt?: boolean;
}

/**
A token for Apple Push Notification service.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenApplePush {
	'@type': 'deviceTokenApplePush';
	/**
Device token; may be empty to deregister a device.
*/
	device_token: string;
	/**
True, if App Sandbox is enabled.
*/
	is_app_sandbox?: boolean;
}

/**
A token for Apple Push Notification service VoIP notifications.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenApplePushVoIp {
	'@type': 'deviceTokenApplePushVoIP';
	/**
Device token; may be empty to deregister a device.
*/
	device_token: string;
	/**
True, if App Sandbox is enabled.
*/
	is_app_sandbox?: boolean;
	/**
True, if push notifications must be additionally encrypted.
*/
	encrypt?: boolean;
}

/**
A token for Windows Push Notification Services.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenWindowsPush {
	'@type': 'deviceTokenWindowsPush';
	/**
The access token that will be used to send notifications; may be empty to deregister a device.
*/
	access_token: string;
}

/**
A token for Microsoft Push Notification Service.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenMicrosoftPush {
	'@type': 'deviceTokenMicrosoftPush';
	/**
Push notification channel URI; may be empty to deregister a device.
*/
	channel_uri: string;
}

/**
A token for Microsoft Push Notification Service VoIP channel.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenMicrosoftPushVoIp {
	'@type': 'deviceTokenMicrosoftPushVoIP';
	/**
Push notification channel URI; may be empty to deregister a device.
*/
	channel_uri: string;
}

/**
A token for web Push API.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenWebPush {
	'@type': 'deviceTokenWebPush';
	/**
Absolute URL exposed by the push service where the application server can send push messages; may be empty to deregister
a device.
*/
	endpoint: string;
	/**
Base64url-encoded P-256 elliptic curve Diffie-Hellman public key.
*/
	p256dh_base64url: string;
	/**
Base64url-encoded authentication secret.
*/
	auth_base64url: string;
}

/**
A token for Simple Push API for Firefox OS.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenSimplePush {
	'@type': 'deviceTokenSimplePush';
	/**
Absolute URL exposed by the push service where the application server can send push messages; may be empty to deregister
a device.
*/
	endpoint: string;
}

/**
A token for Ubuntu Push Client service.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenUbuntuPush {
	'@type': 'deviceTokenUbuntuPush';
	/**
Token; may be empty to deregister a device.
*/
	token: string;
}

/**
A token for BlackBerry Push Service.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenBlackBerryPush {
	'@type': 'deviceTokenBlackBerryPush';
	/**
Token; may be empty to deregister a device.
*/
	token: string;
}

/**
A token for Tizen Push Service.
Subtype of {@link DeviceToken}.
*/
export interface DeviceTokenTizenPush {
	'@type': 'deviceTokenTizenPush';
	/**
Push service registration identifier; may be empty to deregister a device.
*/
	reg_id: string;
}

/**
Contains a globally unique push receiver identifier, which can be used to identify which account has received a push
notification.
*/
export interface PushReceiverId {
	'@type': 'pushReceiverId';
	/**
The globally unique identifier of push notification subscription.
*/
	id: string;
}

/**
Describes a fill of a background.
Subtype of {@link BackgroundFill}.
*/
export interface BackgroundFillSolid {
	'@type': 'backgroundFillSolid';
	/**
A color of the background in the RGB24 format.
*/
	color: number;
}

/**
Describes a gradient fill of a background.
Subtype of {@link BackgroundFill}.
*/
export interface BackgroundFillGradient {
	'@type': 'backgroundFillGradient';
	/**
A top color of the background in the RGB24 format.
*/
	top_color: number;
	/**
A bottom color of the background in the RGB24 format.
*/
	bottom_color: number;
	/**
Clockwise rotation angle of the gradient, in degrees; 0-359. Must always be divisible by 45.
*/
	rotation_angle: number;
}

/**
Describes a freeform gradient fill of a background.
Subtype of {@link BackgroundFill}.
*/
export interface BackgroundFillFreeformGradient {
	'@type': 'backgroundFillFreeformGradient';
	/**
A list of 3 or 4 colors of the freeform gradients in the RGB24 format.
*/
	colors: number[];
}

/**
Describes the type of a background.
Subtype of {@link BackgroundType}.
*/
export interface BackgroundTypeWallpaper {
	'@type': 'backgroundTypeWallpaper';
	/**
True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred with radius 12.
*/
	is_blurred?: boolean;
	/**
True, if the background needs to be slightly moved when device is tilted.
*/
	is_moving?: boolean;
}

/**
A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern") pattern to be combined with the
background fill chosen by the user.
Subtype of {@link BackgroundType}.
*/
export interface BackgroundTypePattern {
	'@type': 'backgroundTypePattern';
	/**
Fill of the background.
*/
	fill: BackgroundFill;
	/**
Intensity of the pattern when it is shown above the filled background; 0-100.
*/
	intensity: number;
	/**
True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For
dark themes only.
*/
	is_inverted?: boolean;
	/**
True, if the background needs to be slightly moved when device is tilted.
*/
	is_moving?: boolean;
}

/**
A filled background.
Subtype of {@link BackgroundType}.
*/
export interface BackgroundTypeFill {
	'@type': 'backgroundTypeFill';
	/**
The background fill.
*/
	fill: BackgroundFill;
}

/**
Describes a chat background.
*/
export interface Background {
	'@type': 'background';
	/**
Unique background identifier.
*/
	id: string;
	/**
True, if this is one of default backgrounds.
*/
	is_default?: boolean;
	/**
True, if the background is dark and is recommended to be used with dark theme.
*/
	is_dark?: boolean;
	/**
Unique background name.
*/
	name: string;
	/**
Document with the background; may be null. Null only for filled backgrounds.
*/
	document: Document;
	/**
Type of the background.
*/
	type: BackgroundType;
}

/**
Contains a list of backgrounds.
*/
export interface Backgrounds {
	'@type': 'backgrounds';
	/**
A list of backgrounds.
*/
	backgrounds: Background[];
}

/**
Contains information about background to set.
Subtype of {@link InputBackground}.
*/
export interface InputBackgroundLocal {
	'@type': 'inputBackgroundLocal';
	/**
Background file to use. Only inputFileLocal and inputFileGenerated are supported. The file must be in JPEG format for
wallpapers and in PNG format for patterns.
*/
	background: InputFile;
}

/**
A background from the server.
Subtype of {@link InputBackground}.
*/
export interface InputBackgroundRemote {
	'@type': 'inputBackgroundRemote';
	/**
The background identifier.
*/
	background_id: string;
}

/**
Describes theme settings.
*/
export interface ThemeSettings {
	'@type': 'themeSettings';
	/**
Theme accent color in ARGB format.
*/
	accent_color: number;
	/**
The background to be used in chats; may be null.
*/
	background: Background;
	/**
The fill to be used as a background for outgoing messages.
*/
	outgoing_message_fill: BackgroundFill;
	/**
If true, the freeform gradient fill needs to be animated on every sent message.
*/
	animate_outgoing_message_fill?: boolean;
	/**
Accent color of outgoing messages in ARGB format.
*/
	outgoing_message_accent_color: number;
}

/**
Describes a chat theme.
*/
export interface ChatTheme {
	'@type': 'chatTheme';
	/**
Theme name.
*/
	name: string;
	/**
Theme settings for a light chat theme.
*/
	light_settings: ThemeSettings;
	/**
Theme settings for a dark chat theme.
*/
	dark_settings: ThemeSettings;
}

/**
Contains a list of hashtags.
*/
export interface Hashtags {
	'@type': 'hashtags';
	/**
A list of hashtags.
*/
	hashtags: string[];
}

/**
Represents result of checking whether the current session can be used to transfer a chat ownership to another user.
Subtype of {@link CanTransferOwnershipResult}.
*/
export interface CanTransferOwnershipResultOk {
	'@type': 'canTransferOwnershipResultOk';

}

/**
The 2-step verification needs to be enabled first.
Subtype of {@link CanTransferOwnershipResult}.
*/
export interface CanTransferOwnershipResultPasswordNeeded {
	'@type': 'canTransferOwnershipResultPasswordNeeded';

}

/**
The 2-step verification was enabled recently, user needs to wait.
Subtype of {@link CanTransferOwnershipResult}.
*/
export interface CanTransferOwnershipResultPasswordTooFresh {
	'@type': 'canTransferOwnershipResultPasswordTooFresh';
	/**
Time left before the session can be used to transfer ownership of a chat, in seconds.
*/
	retry_after: number;
}

/**
The session was created recently, user needs to wait.
Subtype of {@link CanTransferOwnershipResult}.
*/
export interface CanTransferOwnershipResultSessionTooFresh {
	'@type': 'canTransferOwnershipResultSessionTooFresh';
	/**
Time left before the session can be used to transfer ownership of a chat, in seconds.
*/
	retry_after: number;
}

/**
Represents result of checking whether a username can be set for a chat.
Subtype of {@link CheckChatUsernameResult}.
*/
export interface CheckChatUsernameResultOk {
	'@type': 'checkChatUsernameResultOk';

}

/**
The username is invalid.
Subtype of {@link CheckChatUsernameResult}.
*/
export interface CheckChatUsernameResultUsernameInvalid {
	'@type': 'checkChatUsernameResultUsernameInvalid';

}

/**
The username is occupied.
Subtype of {@link CheckChatUsernameResult}.
*/
export interface CheckChatUsernameResultUsernameOccupied {
	'@type': 'checkChatUsernameResultUsernameOccupied';

}

/**
The user has too many chats with username, one of them must be made private first.
Subtype of {@link CheckChatUsernameResult}.
*/
export interface CheckChatUsernameResultPublicChatsTooMuch {
	'@type': 'checkChatUsernameResultPublicChatsTooMuch';

}

/**
The user can't be a member of a public supergroup.
Subtype of {@link CheckChatUsernameResult}.
*/
export interface CheckChatUsernameResultPublicGroupsUnavailable {
	'@type': 'checkChatUsernameResultPublicGroupsUnavailable';

}

/**
Represents result of checking whether a name can be used for a new sticker set.
Subtype of {@link CheckStickerSetNameResult}.
*/
export interface CheckStickerSetNameResultOk {
	'@type': 'checkStickerSetNameResultOk';

}

/**
The name is invalid.
Subtype of {@link CheckStickerSetNameResult}.
*/
export interface CheckStickerSetNameResultNameInvalid {
	'@type': 'checkStickerSetNameResultNameInvalid';

}

/**
The name is occupied.
Subtype of {@link CheckStickerSetNameResult}.
*/
export interface CheckStickerSetNameResultNameOccupied {
	'@type': 'checkStickerSetNameResultNameOccupied';

}

/**
Represents result of 2-step verification password reset.
Subtype of {@link ResetPasswordResult}.
*/
export interface ResetPasswordResultOk {
	'@type': 'resetPasswordResultOk';

}

/**
The password reset request is pending.
Subtype of {@link ResetPasswordResult}.
*/
export interface ResetPasswordResultPending {
	'@type': 'resetPasswordResultPending';
	/**
Point in time (Unix timestamp) after which the password can be reset immediately using resetPassword.
*/
	pending_reset_date: number;
}

/**
The password reset request was declined.
Subtype of {@link ResetPasswordResult}.
*/
export interface ResetPasswordResultDeclined {
	'@type': 'resetPasswordResultDeclined';
	/**
Point in time (Unix timestamp) when the password reset can be retried.
*/
	retry_date: number;
}

/**
Contains information about a file with messages exported from another app.
Subtype of {@link MessageFileType}.
*/
export interface MessageFileTypePrivate {
	'@type': 'messageFileTypePrivate';
	/**
Name of the other party; may be empty if unrecognized.
*/
	name: string;
}

/**
The messages was exported from a group chat.
Subtype of {@link MessageFileType}.
*/
export interface MessageFileTypeGroup {
	'@type': 'messageFileTypeGroup';
	/**
Title of the group chat; may be empty if unrecognized.
*/
	title: string;
}

/**
The messages was exported from a chat of unknown type.
Subtype of {@link MessageFileType}.
*/
export interface MessageFileTypeUnknown {
	'@type': 'messageFileTypeUnknown';

}

/**
Contains content of a push message notification.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentHidden {
	'@type': 'pushMessageContentHidden';
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
An animation message (GIF-style).
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentAnimation {
	'@type': 'pushMessageContentAnimation';
	/**
Message content; may be null.
*/
	animation: Animation;
	/**
Animation caption.
*/
	caption: string;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
An audio message.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentAudio {
	'@type': 'pushMessageContentAudio';
	/**
Message content; may be null.
*/
	audio: Audio;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A message with a user contact.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentContact {
	'@type': 'pushMessageContentContact';
	/**
Contact's name.
*/
	name: string;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A contact has registered with Telegram.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentContactRegistered {
	'@type': 'pushMessageContentContactRegistered';

}

/**
A document message (a general file).
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentDocument {
	'@type': 'pushMessageContentDocument';
	/**
Message content; may be null.
*/
	document: Document;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A message with a game.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentGame {
	'@type': 'pushMessageContentGame';
	/**
Game title, empty for pinned game message.
*/
	title: string;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A new high score was achieved in a game.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentGameScore {
	'@type': 'pushMessageContentGameScore';
	/**
Game title, empty for pinned message.
*/
	title: string;
	/**
New score, 0 for pinned message.
*/
	score: number;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A message with an invoice from a bot.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentInvoice {
	'@type': 'pushMessageContentInvoice';
	/**
Product price.
*/
	price: string;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A message with a location.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentLocation {
	'@type': 'pushMessageContentLocation';
	/**
True, if the location is live.
*/
	is_live?: boolean;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A photo message.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentPhoto {
	'@type': 'pushMessageContentPhoto';
	/**
Message content; may be null.
*/
	photo: Photo;
	/**
Photo caption.
*/
	caption: string;
	/**
True, if the photo is secret.
*/
	is_secret?: boolean;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A message with a poll.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentPoll {
	'@type': 'pushMessageContentPoll';
	/**
Poll question.
*/
	question: string;
	/**
True, if the poll is regular and not in quiz mode.
*/
	is_regular?: boolean;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A screenshot of a message in the chat has been taken.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentScreenshotTaken {
	'@type': 'pushMessageContentScreenshotTaken';

}

/**
A message with a sticker.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentSticker {
	'@type': 'pushMessageContentSticker';
	/**
Message content; may be null.
*/
	sticker: Sticker;
	/**
Emoji corresponding to the sticker; may be empty.
*/
	emoji: string;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A text message.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentText {
	'@type': 'pushMessageContentText';
	/**
Message text.
*/
	text: string;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A video message.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentVideo {
	'@type': 'pushMessageContentVideo';
	/**
Message content; may be null.
*/
	video: Video;
	/**
Video caption.
*/
	caption: string;
	/**
True, if the video is secret.
*/
	is_secret?: boolean;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A video note message.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentVideoNote {
	'@type': 'pushMessageContentVideoNote';
	/**
Message content; may be null.
*/
	video_note: VideoNote;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A voice note message.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentVoiceNote {
	'@type': 'pushMessageContentVoiceNote';
	/**
Message content; may be null.
*/
	voice_note: VoiceNote;
	/**
True, if the message is a pinned message with the specified content.
*/
	is_pinned?: boolean;
}

/**
A newly created basic group.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentBasicGroupChatCreate {
	'@type': 'pushMessageContentBasicGroupChatCreate';

}

/**
New chat members were invited to a group.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatAddMembers {
	'@type': 'pushMessageContentChatAddMembers';
	/**
Name of the added member.
*/
	member_name: string;
	/**
True, if the current user was added to the group.
*/
	is_current_user?: boolean;
	/**
True, if the user has returned to the group themselves.
*/
	is_returned?: boolean;
}

/**
A chat photo was edited.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatChangePhoto {
	'@type': 'pushMessageContentChatChangePhoto';

}

/**
A chat title was edited.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatChangeTitle {
	'@type': 'pushMessageContentChatChangeTitle';
	/**
New chat title.
*/
	title: string;
}

/**
A chat theme was edited.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatSetTheme {
	'@type': 'pushMessageContentChatSetTheme';
	/**
If non-empty, name of a new theme, set for the chat. Otherwise chat theme was reset to the default one.
*/
	theme_name: string;
}

/**
A chat member was deleted.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatDeleteMember {
	'@type': 'pushMessageContentChatDeleteMember';
	/**
Name of the deleted member.
*/
	member_name: string;
	/**
True, if the current user was deleted from the group.
*/
	is_current_user?: boolean;
	/**
True, if the user has left the group themselves.
*/
	is_left?: boolean;
}

/**
A new member joined the chat via an invite link.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatJoinByLink {
	'@type': 'pushMessageContentChatJoinByLink';

}

/**
A new member was accepted to the chat by an administrator.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentChatJoinByRequest {
	'@type': 'pushMessageContentChatJoinByRequest';

}

/**
A new recurrent payment was made by the current user.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentRecurringPayment {
	'@type': 'pushMessageContentRecurringPayment';
	/**
The paid amount.
*/
	amount: string;
}

/**
A forwarded messages.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentMessageForwards {
	'@type': 'pushMessageContentMessageForwards';
	/**
Number of forwarded messages.
*/
	total_count: number;
}

/**
A media album.
Subtype of {@link PushMessageContent}.
*/
export interface PushMessageContentMediaAlbum {
	'@type': 'pushMessageContentMediaAlbum';
	/**
Number of messages in the album.
*/
	total_count: number;
	/**
True, if the album has at least one photo.
*/
	has_photos?: boolean;
	/**
True, if the album has at least one video.
*/
	has_videos?: boolean;
	/**
True, if the album has at least one audio file.
*/
	has_audios?: boolean;
	/**
True, if the album has at least one document.
*/
	has_documents?: boolean;
}

/**
Contains detailed information about a notification.
Subtype of {@link NotificationType}.
*/
export interface NotificationTypeNewMessage {
	'@type': 'notificationTypeNewMessage';
	/**
The message.
*/
	message: Message;
	/**
True, if message content must be displayed in notifications.
*/
	show_preview?: boolean;
}

/**
New secret chat was created.
Subtype of {@link NotificationType}.
*/
export interface NotificationTypeNewSecretChat {
	'@type': 'notificationTypeNewSecretChat';

}

/**
New call was received.
Subtype of {@link NotificationType}.
*/
export interface NotificationTypeNewCall {
	'@type': 'notificationTypeNewCall';
	/**
Call identifier.
*/
	call_id: number;
}

/**
New message was received through a push notification.
Subtype of {@link NotificationType}.
*/
export interface NotificationTypeNewPushMessage {
	'@type': 'notificationTypeNewPushMessage';
	/**
The message identifier. The message will not be available in the chat history, but the ID can be used in viewMessages,
or as reply_to_message_id.
*/
	message_id: number;
	/**
Identifier of the sender of the message. Corresponding user or chat may be inaccessible.
*/
	sender_id: MessageSender;
	/**
Name of the sender.
*/
	sender_name: string;
	/**
True, if the message is outgoing.
*/
	is_outgoing?: boolean;
	/**
Push message content.
*/
	content: PushMessageContent;
}

/**
Describes the type of notifications in a notification group.
Subtype of {@link NotificationGroupType}.
*/
export interface NotificationGroupTypeMessages {
	'@type': 'notificationGroupTypeMessages';

}

/**
A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage with unread
mentions of the current user, replies to their messages, or a pinned message.
Subtype of {@link NotificationGroupType}.
*/
export interface NotificationGroupTypeMentions {
	'@type': 'notificationGroupTypeMentions';

}

/**
A group containing a notification of type notificationTypeNewSecretChat.
Subtype of {@link NotificationGroupType}.
*/
export interface NotificationGroupTypeSecretChat {
	'@type': 'notificationGroupTypeSecretChat';

}

/**
A group containing notifications of type notificationTypeNewCall.
Subtype of {@link NotificationGroupType}.
*/
export interface NotificationGroupTypeCalls {
	'@type': 'notificationGroupTypeCalls';

}

/**
Describes a notification sound in MP3 format.
*/
export interface NotificationSound {
	'@type': 'notificationSound';
	/**
Unique identifier of the notification sound.
*/
	id: string;
	/**
Duration of the sound, in seconds.
*/
	duration: number;
	/**
Point in time (Unix timestamp) when the sound was created.
*/
	date: number;
	/**
Title of the notification sound.
*/
	title: string;
	/**
Arbitrary data, defined while the sound was uploaded.
*/
	data: string;
	/**
File containing the sound.
*/
	sound: File;
}

/**
Contains a list of notification sounds.
*/
export interface NotificationSounds {
	'@type': 'notificationSounds';
	/**
A list of notification sounds.
*/
	notification_sounds: NotificationSound[];
}

/**
Contains information about a notification.
*/
export interface Notification {
	'@type': 'notification';
	/**
Unique persistent identifier of this notification.
*/
	id: number;
	/**
Notification date.
*/
	date: number;
	/**
True, if the notification was explicitly sent without sound.
*/
	is_silent?: boolean;
	/**
Notification type.
*/
	type: NotificationType;
}

/**
Describes a group of notifications.
*/
export interface NotificationGroup {
	'@type': 'notificationGroup';
	/**
Unique persistent auto-incremented from 1 identifier of the notification group.
*/
	id: number;
	/**
Type of the group.
*/
	type: NotificationGroupType;
	/**
Identifier of a chat to which all notifications in the group belong.
*/
	chat_id: number;
	/**
Total number of active notifications in the group.
*/
	total_count: number;
	/**
The list of active notifications.
*/
	notifications: Notification[];
}

/**
Represents the value of an option.
Subtype of {@link OptionValue}.
*/
export interface OptionValueBoolean {
	'@type': 'optionValueBoolean';
	/**
The value of the option.
*/
	value?: boolean;
}

/**
Represents an unknown option or an option which has a default value.
Subtype of {@link OptionValue}.
*/
export interface OptionValueEmpty {
	'@type': 'optionValueEmpty';

}

/**
Represents an integer option.
Subtype of {@link OptionValue}.
*/
export interface OptionValueInteger {
	'@type': 'optionValueInteger';
	/**
The value of the option.
*/
	value: string;
}

/**
Represents a string option.
Subtype of {@link OptionValue}.
*/
export interface OptionValueString {
	'@type': 'optionValueString';
	/**
The value of the option.
*/
	value: string;
}

/**
Represents one member of a JSON object.
*/
export interface JsonObjectMember {
	'@type': 'jsonObjectMember';
	/**
Member's key.
*/
	key: string;
	/**
Member's value.
*/
	value: JsonValue;
}

/**
Represents a JSON value.
Subtype of {@link JsonValue}.
*/
export interface JsonValueNull {
	'@type': 'jsonValueNull';

}

/**
Represents a boolean JSON value.
Subtype of {@link JsonValue}.
*/
export interface JsonValueBoolean {
	'@type': 'jsonValueBoolean';
	/**
The value.
*/
	value?: boolean;
}

/**
Represents a numeric JSON value.
Subtype of {@link JsonValue}.
*/
export interface JsonValueNumber {
	'@type': 'jsonValueNumber';
	/**
The value.
*/
	value: number;
}

/**
Represents a string JSON value.
Subtype of {@link JsonValue}.
*/
export interface JsonValueString {
	'@type': 'jsonValueString';
	/**
The value.
*/
	value: string;
}

/**
Represents a JSON array.
Subtype of {@link JsonValue}.
*/
export interface JsonValueArray {
	'@type': 'jsonValueArray';
	/**
The list of array elements.
*/
	values: JsonValue[];
}

/**
Represents a JSON object.
Subtype of {@link JsonValue}.
*/
export interface JsonValueObject {
	'@type': 'jsonValueObject';
	/**
The list of object members.
*/
	members: JsonObjectMember[];
}

/**
Represents a single rule for managing privacy settings.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleAllowAll {
	'@type': 'userPrivacySettingRuleAllowAll';

}

/**
A rule to allow all of a user's contacts to do something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleAllowContacts {
	'@type': 'userPrivacySettingRuleAllowContacts';

}

/**
A rule to allow certain specified users to do something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleAllowUsers {
	'@type': 'userPrivacySettingRuleAllowUsers';
	/**
The user identifiers, total number of users in all rules must not exceed 1000.
*/
	user_ids: number[];
}

/**
A rule to allow all members of certain specified basic groups and supergroups to doing something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleAllowChatMembers {
	'@type': 'userPrivacySettingRuleAllowChatMembers';
	/**
The chat identifiers, total number of chats in all rules must not exceed 20.
*/
	chat_ids: number[];
}

/**
A rule to restrict all users from doing something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleRestrictAll {
	'@type': 'userPrivacySettingRuleRestrictAll';

}

/**
A rule to restrict all contacts of a user from doing something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleRestrictContacts {
	'@type': 'userPrivacySettingRuleRestrictContacts';

}

/**
A rule to restrict all specified users from doing something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleRestrictUsers {
	'@type': 'userPrivacySettingRuleRestrictUsers';
	/**
The user identifiers, total number of users in all rules must not exceed 1000.
*/
	user_ids: number[];
}

/**
A rule to restrict all members of specified basic groups and supergroups from doing something.
Subtype of {@link UserPrivacySettingRule}.
*/
export interface UserPrivacySettingRuleRestrictChatMembers {
	'@type': 'userPrivacySettingRuleRestrictChatMembers';
	/**
The chat identifiers, total number of chats in all rules must not exceed 20.
*/
	chat_ids: number[];
}

/**
A list of privacy rules. Rules are matched in the specified order. The first matched rule defines the privacy setting
for a given user. If no rule matches, the action is not allowed.
*/
export interface UserPrivacySettingRules {
	'@type': 'userPrivacySettingRules';
	/**
A list of rules.
*/
	rules: UserPrivacySettingRule[];
}

/**
Describes available user privacy settings.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingShowStatus {
	'@type': 'userPrivacySettingShowStatus';

}

/**
A privacy setting for managing whether the user's profile photo is visible.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingShowProfilePhoto {
	'@type': 'userPrivacySettingShowProfilePhoto';

}

/**
A privacy setting for managing whether a link to the user's account is included in forwarded messages.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingShowLinkInForwardedMessages {
	'@type': 'userPrivacySettingShowLinkInForwardedMessages';

}

/**
A privacy setting for managing whether the user's phone number is visible.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingShowPhoneNumber {
	'@type': 'userPrivacySettingShowPhoneNumber';

}

/**
A privacy setting for managing whether the user can be invited to chats.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingAllowChatInvites {
	'@type': 'userPrivacySettingAllowChatInvites';

}

/**
A privacy setting for managing whether the user can be called.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingAllowCalls {
	'@type': 'userPrivacySettingAllowCalls';

}

/**
A privacy setting for managing whether peer-to-peer connections can be used for calls.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingAllowPeerToPeerCalls {
	'@type': 'userPrivacySettingAllowPeerToPeerCalls';

}

/**
A privacy setting for managing whether the user can be found by their phone number. Checked only if the phone number is
not known to the other user. Can be set only to "Allow contacts" or "Allow all".
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingAllowFindingByPhoneNumber {
	'@type': 'userPrivacySettingAllowFindingByPhoneNumber';

}

/**
A privacy setting for managing whether the user can receive voice and video messages in private chats.
Subtype of {@link UserPrivacySetting}.
*/
export interface UserPrivacySettingAllowPrivateVoiceAndVideoNoteMessages {
	'@type': 'userPrivacySettingAllowPrivateVoiceAndVideoNoteMessages';

}

/**
Contains information about the period of inactivity after which the current user's account will automatically be
deleted.
*/
export interface AccountTtl {
	'@type': 'accountTtl';
	/**
Number of days of inactivity before the account will be flagged for deletion; 30-366 days.
*/
	days: number;
}

/**
Represents the type of a session.
Subtype of {@link SessionType}.
*/
export interface SessionTypeAndroid {
	'@type': 'sessionTypeAndroid';

}

/**
The session is running on a generic Apple device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeApple {
	'@type': 'sessionTypeApple';

}

/**
The session is running on the Brave browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeBrave {
	'@type': 'sessionTypeBrave';

}

/**
The session is running on the Chrome browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeChrome {
	'@type': 'sessionTypeChrome';

}

/**
The session is running on the Edge browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeEdge {
	'@type': 'sessionTypeEdge';

}

/**
The session is running on the Firefox browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeFirefox {
	'@type': 'sessionTypeFirefox';

}

/**
The session is running on an iPad device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeIpad {
	'@type': 'sessionTypeIpad';

}

/**
The session is running on an iPhone device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeIphone {
	'@type': 'sessionTypeIphone';

}

/**
The session is running on a Linux device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeLinux {
	'@type': 'sessionTypeLinux';

}

/**
The session is running on a Mac device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeMac {
	'@type': 'sessionTypeMac';

}

/**
The session is running on the Opera browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeOpera {
	'@type': 'sessionTypeOpera';

}

/**
The session is running on the Safari browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeSafari {
	'@type': 'sessionTypeSafari';

}

/**
The session is running on an Ubuntu device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeUbuntu {
	'@type': 'sessionTypeUbuntu';

}

/**
The session is running on an unknown type of device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeUnknown {
	'@type': 'sessionTypeUnknown';

}

/**
The session is running on the Vivaldi browser.
Subtype of {@link SessionType}.
*/
export interface SessionTypeVivaldi {
	'@type': 'sessionTypeVivaldi';

}

/**
The session is running on a Windows device.
Subtype of {@link SessionType}.
*/
export interface SessionTypeWindows {
	'@type': 'sessionTypeWindows';

}

/**
The session is running on an Xbox console.
Subtype of {@link SessionType}.
*/
export interface SessionTypeXbox {
	'@type': 'sessionTypeXbox';

}

/**
Contains information about one session in a Telegram application used by the current user. Sessions must be shown to the
user in the returned order.
*/
export interface Session {
	'@type': 'session';
	/**
Session identifier.
*/
	id: string;
	/**
True, if this session is the current session.
*/
	is_current?: boolean;
	/**
True, if a 2-step verification password is needed to complete authorization of the session.
*/
	is_password_pending?: boolean;
	/**
True, if incoming secret chats can be accepted by the session.
*/
	can_accept_secret_chats?: boolean;
	/**
True, if incoming calls can be accepted by the session.
*/
	can_accept_calls?: boolean;
	/**
Session type based on the system and application version, which can be used to display a corresponding icon.
*/
	type: SessionType;
	/**
Telegram API identifier, as provided by the application.
*/
	api_id: number;
	/**
Name of the application, as provided by the application.
*/
	application_name: string;
	/**
The version of the application, as provided by the application.
*/
	application_version: string;
	/**
True, if the application is an official application or uses the api_id of an official application.
*/
	is_official_application?: boolean;
	/**
Model of the device the application has been run or is running on, as provided by the application.
*/
	device_model: string;
	/**
Operating system the application has been run or is running on, as provided by the application.
*/
	platform: string;
	/**
Version of the operating system the application has been run or is running on, as provided by the application.
*/
	system_version: string;
	/**
Point in time (Unix timestamp) when the user has logged in.
*/
	log_in_date: number;
	/**
Point in time (Unix timestamp) when the session was last used.
*/
	last_active_date: number;
	/**
IP address from which the session was created, in human-readable format.
*/
	ip: string;
	/**
A two-letter country code for the country from which the session was created, based on the IP address.
*/
	country: string;
	/**
Region code from which the session was created, based on the IP address.
*/
	region: string;
}

/**
Contains a list of sessions.
*/
export interface Sessions {
	'@type': 'sessions';
	/**
List of sessions.
*/
	sessions: Session[];
	/**
Number of days of inactivity before sessions will automatically be terminated; 1-366 days.
*/
	inactive_session_ttl_days: number;
}

/**
Contains information about one website the current user is logged in with Telegram.
*/
export interface ConnectedWebsite {
	'@type': 'connectedWebsite';
	/**
Website identifier.
*/
	id: string;
	/**
The domain name of the website.
*/
	domain_name: string;
	/**
User identifier of a bot linked with the website.
*/
	bot_user_id: number;
	/**
The version of a browser used to log in.
*/
	browser: string;
	/**
Operating system the browser is running on.
*/
	platform: string;
	/**
Point in time (Unix timestamp) when the user was logged in.
*/
	log_in_date: number;
	/**
Point in time (Unix timestamp) when obtained authorization was last used.
*/
	last_active_date: number;
	/**
IP address from which the user was logged in, in human-readable format.
*/
	ip: string;
	/**
Human-readable description of a country and a region from which the user was logged in, based on the IP address.
*/
	location: string;
}

/**
Contains a list of websites the current user is logged in with Telegram.
*/
export interface ConnectedWebsites {
	'@type': 'connectedWebsites';
	/**
List of connected websites.
*/
	websites: ConnectedWebsite[];
}

/**
Describes the reason why a chat is reported.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonSpam {
	'@type': 'chatReportReasonSpam';

}

/**
The chat promotes violence.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonViolence {
	'@type': 'chatReportReasonViolence';

}

/**
The chat contains pornographic messages.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonPornography {
	'@type': 'chatReportReasonPornography';

}

/**
The chat has child abuse related content.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonChildAbuse {
	'@type': 'chatReportReasonChildAbuse';

}

/**
The chat contains copyrighted content.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonCopyright {
	'@type': 'chatReportReasonCopyright';

}

/**
The location-based chat is unrelated to its stated location.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonUnrelatedLocation {
	'@type': 'chatReportReasonUnrelatedLocation';

}

/**
The chat represents a fake account.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonFake {
	'@type': 'chatReportReasonFake';

}

/**
The chat has illegal drugs related content.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonIllegalDrugs {
	'@type': 'chatReportReasonIllegalDrugs';

}

/**
The chat contains messages with personal details.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonPersonalDetails {
	'@type': 'chatReportReasonPersonalDetails';

}

/**
A custom reason provided by the user.
Subtype of {@link ChatReportReason}.
*/
export interface ChatReportReasonCustom {
	'@type': 'chatReportReasonCustom';

}

/**
Describes the target chat to be opened.
Subtype of {@link TargetChat}.
*/
export interface TargetChatCurrent {
	'@type': 'targetChatCurrent';

}

/**
The chat needs to be chosen by the user among chats of the specified types.
Subtype of {@link TargetChat}.
*/
export interface TargetChatChosen {
	'@type': 'targetChatChosen';
	/**
True, if private chats with ordinary users are allowed.
*/
	allow_user_chats?: boolean;
	/**
True, if private chats with other bots are allowed.
*/
	allow_bot_chats?: boolean;
	/**
True, if basic group and supergroup chats are allowed.
*/
	allow_group_chats?: boolean;
	/**
True, if channel chats are allowed.
*/
	allow_channel_chats?: boolean;
}

/**
The chat needs to be open with the provided internal link.
Subtype of {@link TargetChat}.
*/
export interface TargetChatInternalLink {
	'@type': 'targetChatInternalLink';
	/**
An internal link pointing to the chat.
*/
	link: InternalLinkType;
}

/**
Describes an internal https://t.me or tg: link, which must be processed by the application in a special way.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeActiveSessions {
	'@type': 'internalLinkTypeActiveSessions';

}

/**
The link is a link to an attachment menu bot to be opened in the specified or a chosen chat. Process given target_chat
to open the chat. Then call searchPublicChat with the given bot username, check that the user is a bot and can be added
to attachment menu. Then use getAttachmentMenuBot to receive information about the bot. If the bot isn't added to
attachment menu, then user needs to confirm adding the bot to attachment menu. If user confirms adding, then use
toggleBotIsAddedToAttachmentMenu to add it. If the attachment menu bot can't be used in the opened chat, show an error
to the user. If the bot is added to attachment menu and can be used in the chat, then use openWebApp with the given URL.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeAttachmentMenuBot {
	'@type': 'internalLinkTypeAttachmentMenuBot';
	/**
Target chat to be opened.
*/
	target_chat: TargetChat;
	/**
Username of the bot.
*/
	bot_username: string;
	/**
URL to be passed to openWebApp.
*/
	url: string;
}

/**
The link contains an authentication code. Call checkAuthenticationCode with the code if the current authorization state
is authorizationStateWaitCode.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeAuthenticationCode {
	'@type': 'internalLinkTypeAuthenticationCode';
	/**
The authentication code.
*/
	code: string;
}

/**
The link is a link to a background. Call searchBackground with the given background name to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeBackground {
	'@type': 'internalLinkTypeBackground';
	/**
Name of the background.
*/
	background_name: string;
}

/**
The link is a link to a chat with a Telegram bot. Call searchPublicChat with the given bot username, check that the user
is a bot, show START button in the chat with the bot, and then call sendBotStartMessage with the given start parameter
after the button is pressed.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeBotStart {
	'@type': 'internalLinkTypeBotStart';
	/**
Username of the bot.
*/
	bot_username: string;
	/**
The parameter to be passed to sendBotStartMessage.
*/
	start_parameter: string;
	/**
True, if sendBotStartMessage must be called automatically without showing the START button.
*/
	autostart?: boolean;
}

/**
The link is a link to a Telegram bot, which is supposed to be added to a group chat. Call searchPublicChat with the
given bot username, check that the user is a bot and can be added to groups, ask the current user to select a basic
group or a supergroup chat to add the bot to, taking into account that bots can be added to a public supergroup only by
administrators of the supergroup. If administrator rights are provided by the link, call getChatMember to receive the
current bot rights in the chat and if the bot already is an administrator, check that the current user can edit its
administrator rights, combine received rights with the requested administrator rights, show confirmation box to the
user, and call setChatMemberStatus with the chosen chat and confirmed administrator rights. Before call to
setChatMemberStatus it may be required to upgrade the chosen basic group chat to a supergroup chat. Then if
start_parameter isn't empty, call sendBotStartMessage with the given start parameter and the chosen chat, otherwise just
send /start message with bot's username added to the chat.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeBotStartInGroup {
	'@type': 'internalLinkTypeBotStartInGroup';
	/**
Username of the bot.
*/
	bot_username: string;
	/**
The parameter to be passed to sendBotStartMessage.
*/
	start_parameter: string;
	/**
Expected administrator rights for the bot; may be null.
*/
	administrator_rights: ChatAdministratorRights;
}

/**
The link is a link to a Telegram bot, which is supposed to be added to a channel chat as an administrator. Call
searchPublicChat with the given bot username and check that the user is a bot, ask the current user to select a channel
chat to add the bot to as an administrator. Then call getChatMember to receive the current bot rights in the chat and if
the bot already is an administrator, check that the current user can edit its administrator rights and combine received
rights with the requested administrator rights. Then show confirmation box to the user, and call setChatMemberStatus
with the chosen chat and confirmed rights.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeBotAddToChannel {
	'@type': 'internalLinkTypeBotAddToChannel';
	/**
Username of the bot.
*/
	bot_username: string;
	/**
Expected administrator rights for the bot.
*/
	administrator_rights: ChatAdministratorRights;
}

/**
The link is a link to the change phone number section of the app.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeChangePhoneNumber {
	'@type': 'internalLinkTypeChangePhoneNumber';

}

/**
The link is a chat invite link. Call checkChatInviteLink with the given invite link to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeChatInvite {
	'@type': 'internalLinkTypeChatInvite';
	/**
Internal representation of the invite link.
*/
	invite_link: string;
}

/**
The link is a link to the filter settings section of the app.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeFilterSettings {
	'@type': 'internalLinkTypeFilterSettings';

}

/**
The link is a link to a game. Call searchPublicChat with the given bot username, check that the user is a bot, ask the
current user to select a chat to send the game, and then call sendMessage with inputMessageGame.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeGame {
	'@type': 'internalLinkTypeGame';
	/**
Username of the bot that owns the game.
*/
	bot_username: string;
	/**
Short name of the game.
*/
	game_short_name: string;
}

/**
The link must be opened in an Instant View. Call getWebPageInstantView with the given URL to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeInstantView {
	'@type': 'internalLinkTypeInstantView';
	/**
URL to be passed to getWebPageInstantView.
*/
	url: string;
	/**
An URL to open if getWebPageInstantView fails.
*/
	fallback_url: string;
}

/**
The link is a link to an invoice. Call getPaymentForm with the given invoice name to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeInvoice {
	'@type': 'internalLinkTypeInvoice';
	/**
Name of the invoice.
*/
	invoice_name: string;
}

/**
The link is a link to a language pack. Call getLanguagePackInfo with the given language pack identifier to process the
link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeLanguagePack {
	'@type': 'internalLinkTypeLanguagePack';
	/**
Language pack identifier.
*/
	language_pack_id: string;
}

/**
The link is a link to the language settings section of the app.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeLanguageSettings {
	'@type': 'internalLinkTypeLanguageSettings';

}

/**
The link is a link to a Telegram message. Call getMessageLinkInfo with the given URL to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeMessage {
	'@type': 'internalLinkTypeMessage';
	/**
URL to be passed to getMessageLinkInfo.
*/
	url: string;
}

/**
The link contains a message draft text. A share screen needs to be shown to the user, then the chosen chat must be
opened and the text is added to the input field.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeMessageDraft {
	'@type': 'internalLinkTypeMessageDraft';
	/**
Message draft text.
*/
	text: FormattedText;
	/**
True, if the first line of the text contains a link. If true, the input field needs to be focused and the text after the
link must be selected.
*/
	contains_link?: boolean;
}

/**
The link contains a request of Telegram passport data. Call getPassportAuthorizationForm with the given parameters to
process the link if the link was received from outside of the application, otherwise ignore it.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypePassportDataRequest {
	'@type': 'internalLinkTypePassportDataRequest';
	/**
User identifier of the service's bot.
*/
	bot_user_id: number;
	/**
Telegram Passport element types requested by the service.
*/
	scope: string;
	/**
Service's public key.
*/
	public_key: string;
	/**
Unique request identifier provided by the service.
*/
	nonce: string;
	/**
An HTTP URL to open once the request is finished or canceled with the parameter tg_passport=success or
tg_passport=cancel respectively. If empty, then the link tgbot{bot_user_id}://passport/success or
tgbot{bot_user_id}://passport/cancel needs to be opened instead.
*/
	callback_url: string;
}

/**
The link can be used to confirm ownership of a phone number to prevent account deletion. Call
sendPhoneNumberConfirmationCode with the given hash and phone number to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypePhoneNumberConfirmation {
	'@type': 'internalLinkTypePhoneNumberConfirmation';
	/**
Hash value from the link.
*/
	hash: string;
	/**
Phone number value from the link.
*/
	phone_number: string;
}

/**
The link is a link to the Premium features screen of the applcation from which the user can subscribe to Telegram
Premium. Call getPremiumFeatures with the given referrer to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypePremiumFeatures {
	'@type': 'internalLinkTypePremiumFeatures';
	/**
Referrer specified in the link.
*/
	referrer: string;
}

/**
The link is a link to the privacy and security settings section of the app.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypePrivacyAndSecuritySettings {
	'@type': 'internalLinkTypePrivacyAndSecuritySettings';

}

/**
The link is a link to a proxy. Call addProxy with the given parameters to process the link and add the proxy.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeProxy {
	'@type': 'internalLinkTypeProxy';
	/**
Proxy server IP address.
*/
	server: string;
	/**
Proxy server port.
*/
	port: number;
	/**
Type of the proxy.
*/
	type: ProxyType;
}

/**
The link is a link to a chat by its username. Call searchPublicChat with the given chat username to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypePublicChat {
	'@type': 'internalLinkTypePublicChat';
	/**
Username of the chat.
*/
	chat_username: string;
}

/**
The link can be used to login the current user on another device, but it must be scanned from QR-code using in-app
camera. An alert similar to "This code can be used to allow someone to log in to your Telegram account. To confirm
Telegram login, please go to Settings > Devices > Scan QR and scan the code" needs to be shown.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeQrCodeAuthentication {
	'@type': 'internalLinkTypeQrCodeAuthentication';

}

/**
The link forces restore of App Store purchases when opened. For official iOS application only.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeRestorePurchases {
	'@type': 'internalLinkTypeRestorePurchases';

}

/**
The link is a link to application settings.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeSettings {
	'@type': 'internalLinkTypeSettings';

}

/**
The link is a link to a sticker set. Call searchStickerSet with the given sticker set name to process the link and show
the sticker set.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeStickerSet {
	'@type': 'internalLinkTypeStickerSet';
	/**
Name of the sticker set.
*/
	sticker_set_name: string;
}

/**
The link is a link to a theme. TDLib has no theme support yet.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeTheme {
	'@type': 'internalLinkTypeTheme';
	/**
Name of the theme.
*/
	theme_name: string;
}

/**
The link is a link to the theme settings section of the app.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeThemeSettings {
	'@type': 'internalLinkTypeThemeSettings';

}

/**
The link is an unknown tg: link. Call getDeepLinkInfo to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeUnknownDeepLink {
	'@type': 'internalLinkTypeUnknownDeepLink';
	/**
Link to be passed to getDeepLinkInfo.
*/
	link: string;
}

/**
The link is a link to an unsupported proxy. An alert can be shown to the user.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeUnsupportedProxy {
	'@type': 'internalLinkTypeUnsupportedProxy';

}

/**
The link is a link to a user by its phone number. Call searchUserByPhoneNumber with the given phone number to process
the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeUserPhoneNumber {
	'@type': 'internalLinkTypeUserPhoneNumber';
	/**
Phone number of the user.
*/
	phone_number: string;
}

/**
The link is a link to a video chat. Call searchPublicChat with the given chat username, and then joinGroupCall with the
given invite hash to process the link.
Subtype of {@link InternalLinkType}.
*/
export interface InternalLinkTypeVideoChat {
	'@type': 'internalLinkTypeVideoChat';
	/**
Username of the chat with the video chat.
*/
	chat_username: string;
	/**
If non-empty, invite hash to be used to join the video chat without being muted by administrators.
*/
	invite_hash: string;
	/**
True, if the video chat is expected to be a live stream in a channel or a broadcast group.
*/
	is_live_stream?: boolean;
}

/**
Contains an HTTPS link to a message in a supergroup or channel.
*/
export interface MessageLink {
	'@type': 'messageLink';
	/**
Message link.
*/
	link: string;
	/**
True, if the link will work for non-members of the chat.
*/
	is_public?: boolean;
}

/**
Contains information about a link to a message in a chat.
*/
export interface MessageLinkInfo {
	'@type': 'messageLinkInfo';
	/**
True, if the link is a public link for a message in a chat.
*/
	is_public?: boolean;
	/**
If found, identifier of the chat to which the message belongs, 0 otherwise.
*/
	chat_id: number;
	/**
If found, the linked message; may be null.
*/
	message: Message;
	/**
Timestamp from which the video/audio/video note/voice note playing must start, in seconds; 0 if not specified. The media
can be in the message content or in its web page preview.
*/
	media_timestamp: number;
	/**
True, if the whole media album to which the message belongs is linked.
*/
	for_album?: boolean;
	/**
True, if the message is linked as a channel post comment or from a message thread.
*/
	for_comment?: boolean;
}

/**
Contains a part of a file.
*/
export interface FilePart {
	'@type': 'filePart';
	/**
File bytes.
*/
	data: string;
}

/**
Represents the type of a file.
Subtype of {@link FileType}.
*/
export interface FileTypeNone {
	'@type': 'fileTypeNone';

}

/**
The file is an animation.
Subtype of {@link FileType}.
*/
export interface FileTypeAnimation {
	'@type': 'fileTypeAnimation';

}

/**
The file is an audio file.
Subtype of {@link FileType}.
*/
export interface FileTypeAudio {
	'@type': 'fileTypeAudio';

}

/**
The file is a document.
Subtype of {@link FileType}.
*/
export interface FileTypeDocument {
	'@type': 'fileTypeDocument';

}

/**
The file is a notification sound.
Subtype of {@link FileType}.
*/
export interface FileTypeNotificationSound {
	'@type': 'fileTypeNotificationSound';

}

/**
The file is a photo.
Subtype of {@link FileType}.
*/
export interface FileTypePhoto {
	'@type': 'fileTypePhoto';

}

/**
The file is a profile photo.
Subtype of {@link FileType}.
*/
export interface FileTypeProfilePhoto {
	'@type': 'fileTypeProfilePhoto';

}

/**
The file was sent to a secret chat (the file type is not known to the server).
Subtype of {@link FileType}.
*/
export interface FileTypeSecret {
	'@type': 'fileTypeSecret';

}

/**
The file is a thumbnail of a file from a secret chat.
Subtype of {@link FileType}.
*/
export interface FileTypeSecretThumbnail {
	'@type': 'fileTypeSecretThumbnail';

}

/**
The file is a file from Secure storage used for storing Telegram Passport files.
Subtype of {@link FileType}.
*/
export interface FileTypeSecure {
	'@type': 'fileTypeSecure';

}

/**
The file is a sticker.
Subtype of {@link FileType}.
*/
export interface FileTypeSticker {
	'@type': 'fileTypeSticker';

}

/**
The file is a thumbnail of another file.
Subtype of {@link FileType}.
*/
export interface FileTypeThumbnail {
	'@type': 'fileTypeThumbnail';

}

/**
The file type is not yet known.
Subtype of {@link FileType}.
*/
export interface FileTypeUnknown {
	'@type': 'fileTypeUnknown';

}

/**
The file is a video.
Subtype of {@link FileType}.
*/
export interface FileTypeVideo {
	'@type': 'fileTypeVideo';

}

/**
The file is a video note.
Subtype of {@link FileType}.
*/
export interface FileTypeVideoNote {
	'@type': 'fileTypeVideoNote';

}

/**
The file is a voice note.
Subtype of {@link FileType}.
*/
export interface FileTypeVoiceNote {
	'@type': 'fileTypeVoiceNote';

}

/**
The file is a wallpaper or a background pattern.
Subtype of {@link FileType}.
*/
export interface FileTypeWallpaper {
	'@type': 'fileTypeWallpaper';

}

/**
Contains the storage usage statistics for a specific file type.
*/
export interface StorageStatisticsByFileType {
	'@type': 'storageStatisticsByFileType';
	/**
File type.
*/
	file_type: FileType;
	/**
Total size of the files, in bytes.
*/
	size: number;
	/**
Total number of files.
*/
	count: number;
}

/**
Contains the storage usage statistics for a specific chat.
*/
export interface StorageStatisticsByChat {
	'@type': 'storageStatisticsByChat';
	/**
Chat identifier; 0 if none.
*/
	chat_id: number;
	/**
Total size of the files in the chat, in bytes.
*/
	size: number;
	/**
Total number of files in the chat.
*/
	count: number;
	/**
Statistics split by file types.
*/
	by_file_type: StorageStatisticsByFileType[];
}

/**
Contains the exact storage usage statistics split by chats and file type.
*/
export interface StorageStatistics {
	'@type': 'storageStatistics';
	/**
Total size of files, in bytes.
*/
	size: number;
	/**
Total number of files.
*/
	count: number;
	/**
Statistics split by chats.
*/
	by_chat: StorageStatisticsByChat[];
}

/**
Contains approximate storage usage statistics, excluding files of unknown file type.
*/
export interface StorageStatisticsFast {
	'@type': 'storageStatisticsFast';
	/**
Approximate total size of files, in bytes.
*/
	files_size: number;
	/**
Approximate number of files.
*/
	file_count: number;
	/**
Size of the database.
*/
	database_size: number;
	/**
Size of the language pack database.
*/
	language_pack_database_size: number;
	/**
Size of the TDLib internal log.
*/
	log_size: number;
}

/**
Contains database statistics.
*/
export interface DatabaseStatistics {
	'@type': 'databaseStatistics';
	/**
Database statistics in an unspecified human-readable format.
*/
	statistics: string;
}

/**
Represents the type of a network.
Subtype of {@link NetworkType}.
*/
export interface NetworkTypeNone {
	'@type': 'networkTypeNone';

}

/**
A mobile network.
Subtype of {@link NetworkType}.
*/
export interface NetworkTypeMobile {
	'@type': 'networkTypeMobile';

}

/**
A mobile roaming network.
Subtype of {@link NetworkType}.
*/
export interface NetworkTypeMobileRoaming {
	'@type': 'networkTypeMobileRoaming';

}

/**
A Wi-Fi network.
Subtype of {@link NetworkType}.
*/
export interface NetworkTypeWiFi {
	'@type': 'networkTypeWiFi';

}

/**
A different network type (e.g., Ethernet network).
Subtype of {@link NetworkType}.
*/
export interface NetworkTypeOther {
	'@type': 'networkTypeOther';

}

/**
Contains statistics about network usage.
Subtype of {@link NetworkStatisticsEntry}.
*/
export interface NetworkStatisticsEntryFile {
	'@type': 'networkStatisticsEntryFile';
	/**
Type of the file the data is part of; pass null if the data isn't related to files.
*/
	file_type: FileType;
	/**
Type of the network the data was sent through. Call setNetworkType to maintain the actual network type.
*/
	network_type: NetworkType;
	/**
Total number of bytes sent.
*/
	sent_bytes: number;
	/**
Total number of bytes received.
*/
	received_bytes: number;
}

/**
Contains information about the total amount of data that was used for calls.
Subtype of {@link NetworkStatisticsEntry}.
*/
export interface NetworkStatisticsEntryCall {
	'@type': 'networkStatisticsEntryCall';
	/**
Type of the network the data was sent through. Call setNetworkType to maintain the actual network type.
*/
	network_type: NetworkType;
	/**
Total number of bytes sent.
*/
	sent_bytes: number;
	/**
Total number of bytes received.
*/
	received_bytes: number;
	/**
Total call duration, in seconds.
*/
	duration: number;
}

/**
A full list of available network statistic entries.
*/
export interface NetworkStatistics {
	'@type': 'networkStatistics';
	/**
Point in time (Unix timestamp) from which the statistics are collected.
*/
	since_date: number;
	/**
Network statistics entries.
*/
	entries: NetworkStatisticsEntry[];
}

/**
Contains auto-download settings.
*/
export interface AutoDownloadSettings {
	'@type': 'autoDownloadSettings';
	/**
True, if the auto-download is enabled.
*/
	is_auto_download_enabled?: boolean;
	/**
The maximum size of a photo file to be auto-downloaded, in bytes.
*/
	max_photo_file_size: number;
	/**
The maximum size of a video file to be auto-downloaded, in bytes.
*/
	max_video_file_size: number;
	/**
The maximum size of other file types to be auto-downloaded, in bytes.
*/
	max_other_file_size: number;
	/**
The maximum suggested bitrate for uploaded videos, in kbit/s.
*/
	video_upload_bitrate: number;
	/**
True, if the beginning of video files needs to be preloaded for instant playback.
*/
	preload_large_videos?: boolean;
	/**
True, if the next audio track needs to be preloaded while the user is listening to an audio file.
*/
	preload_next_audio?: boolean;
	/**
True, if "use less data for calls" option needs to be enabled.
*/
	use_less_data_for_calls?: boolean;
}

/**
Contains auto-download settings presets for the current user.
*/
export interface AutoDownloadSettingsPresets {
	'@type': 'autoDownloadSettingsPresets';
	/**
Preset with lowest settings; supposed to be used by default when roaming.
*/
	low: AutoDownloadSettings;
	/**
Preset with medium settings; supposed to be used by default when using mobile data.
*/
	medium: AutoDownloadSettings;
	/**
Preset with highest settings; supposed to be used by default when connected on Wi-Fi.
*/
	high: AutoDownloadSettings;
}

/**
Describes the current state of the connection to Telegram servers.
Subtype of {@link ConnectionState}.
*/
export interface ConnectionStateWaitingForNetwork {
	'@type': 'connectionStateWaitingForNetwork';

}

/**
Currently establishing a connection with a proxy server.
Subtype of {@link ConnectionState}.
*/
export interface ConnectionStateConnectingToProxy {
	'@type': 'connectionStateConnectingToProxy';

}

/**
Currently establishing a connection to the Telegram servers.
Subtype of {@link ConnectionState}.
*/
export interface ConnectionStateConnecting {
	'@type': 'connectionStateConnecting';

}

/**
Downloading data received while the application was offline.
Subtype of {@link ConnectionState}.
*/
export interface ConnectionStateUpdating {
	'@type': 'connectionStateUpdating';

}

/**
There is a working connection to the Telegram servers.
Subtype of {@link ConnectionState}.
*/
export interface ConnectionStateReady {
	'@type': 'connectionStateReady';

}

/**
Represents the categories of chats for which a list of frequently used chats can be retrieved.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryUsers {
	'@type': 'topChatCategoryUsers';

}

/**
A category containing frequently used private chats with bot users.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryBots {
	'@type': 'topChatCategoryBots';

}

/**
A category containing frequently used basic groups and supergroups.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryGroups {
	'@type': 'topChatCategoryGroups';

}

/**
A category containing frequently used channels.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryChannels {
	'@type': 'topChatCategoryChannels';

}

/**
A category containing frequently used chats with inline bots sorted by their usage in inline mode.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryInlineBots {
	'@type': 'topChatCategoryInlineBots';

}

/**
A category containing frequently used chats used for calls.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryCalls {
	'@type': 'topChatCategoryCalls';

}

/**
A category containing frequently used chats used to forward messages.
Subtype of {@link TopChatCategory}.
*/
export interface TopChatCategoryForwardChats {
	'@type': 'topChatCategoryForwardChats';

}

/**
Describes the type of a URL linking to an internal Telegram entity.
Subtype of {@link TMeUrlType}.
*/
export interface TMeUrlTypeUser {
	'@type': 'tMeUrlTypeUser';
	/**
Identifier of the user.
*/
	user_id: number;
}

/**
A URL linking to a public supergroup or channel.
Subtype of {@link TMeUrlType}.
*/
export interface TMeUrlTypeSupergroup {
	'@type': 'tMeUrlTypeSupergroup';
	/**
Identifier of the supergroup or channel.
*/
	supergroup_id: number;
}

/**
A chat invite link.
Subtype of {@link TMeUrlType}.
*/
export interface TMeUrlTypeChatInvite {
	'@type': 'tMeUrlTypeChatInvite';
	/**
Information about the chat invite link.
*/
	info: ChatInviteLinkInfo;
}

/**
A URL linking to a sticker set.
Subtype of {@link TMeUrlType}.
*/
export interface TMeUrlTypeStickerSet {
	'@type': 'tMeUrlTypeStickerSet';
	/**
Identifier of the sticker set.
*/
	sticker_set_id: string;
}

/**
Represents a URL linking to an internal Telegram entity.
*/
export interface TMeUrl {
	'@type': 'tMeUrl';
	/**
URL.
*/
	url: string;
	/**
Type of the URL.
*/
	type: TMeUrlType;
}

/**
Contains a list of t.me URLs.
*/
export interface TMeUrls {
	'@type': 'tMeUrls';
	/**
List of URLs.
*/
	urls: TMeUrl[];
}

/**
Describes an action suggested to the current user.
Subtype of {@link SuggestedAction}.
*/
export interface SuggestedActionEnableArchiveAndMuteNewChats {
	'@type': 'suggestedActionEnableArchiveAndMuteNewChats';

}

/**
Suggests the user to check whether they still remember their 2-step verification password.
Subtype of {@link SuggestedAction}.
*/
export interface SuggestedActionCheckPassword {
	'@type': 'suggestedActionCheckPassword';

}

/**
Suggests the user to check whether authorization phone number is correct and change the phone number if it is
inaccessible.
Subtype of {@link SuggestedAction}.
*/
export interface SuggestedActionCheckPhoneNumber {
	'@type': 'suggestedActionCheckPhoneNumber';

}

/**
Suggests the user to view a hint about the meaning of one and two check marks on sent messages.
Subtype of {@link SuggestedAction}.
*/
export interface SuggestedActionViewChecksHint {
	'@type': 'suggestedActionViewChecksHint';

}

/**
Suggests the user to convert specified supergroup to a broadcast group.
Subtype of {@link SuggestedAction}.
*/
export interface SuggestedActionConvertToBroadcastGroup {
	'@type': 'suggestedActionConvertToBroadcastGroup';
	/**
Supergroup identifier.
*/
	supergroup_id: number;
}

/**
Suggests the user to set a 2-step verification password to be able to log in again.
Subtype of {@link SuggestedAction}.
*/
export interface SuggestedActionSetPassword {
	'@type': 'suggestedActionSetPassword';
	/**
The number of days to pass between consecutive authorizations if the user declines to set password.
*/
	authorization_delay: number;
}

/**
Contains a counter.
*/
export interface Count {
	'@type': 'count';
	/**
Count.
*/
	count: number;
}

/**
Contains some text.
*/
export interface Text {
	'@type': 'text';
	/**
Text.
*/
	text: string;
}

/**
Contains a value representing a number of seconds.
*/
export interface Seconds {
	'@type': 'seconds';
	/**
Number of seconds.
*/
	seconds: number;
}

/**
Contains size of downloaded prefix of a file.
*/
export interface FileDownloadedPrefixSize {
	'@type': 'fileDownloadedPrefixSize';
	/**
The prefix size, in bytes.
*/
	size: number;
}

/**
Contains information about a tg: deep link.
*/
export interface DeepLinkInfo {
	'@type': 'deepLinkInfo';
	/**
Text to be shown to the user.
*/
	text: FormattedText;
	/**
True, if the user must be asked to update the application.
*/
	need_update_application?: boolean;
}

/**
Describes the way the text needs to be parsed for TextEntities.
Subtype of {@link TextParseMode}.
*/
export interface TextParseModeMarkdown {
	'@type': 'textParseModeMarkdown';
	/**
Version of the parser: 0 or 1 - Telegram Bot API "Markdown" parse mode, 2 - Telegram Bot API "MarkdownV2" parse mode.
*/
	version: number;
}

/**
The text uses HTML-style formatting. The same as Telegram Bot API "HTML" parse mode.
Subtype of {@link TextParseMode}.
*/
export interface TextParseModeHtml {
	'@type': 'textParseModeHTML';

}

/**
Describes the type of a proxy server.
Subtype of {@link ProxyType}.
*/
export interface ProxyTypeSocks5 {
	'@type': 'proxyTypeSocks5';
	/**
Username for logging in; may be empty.
*/
	username: string;
	/**
Password for logging in; may be empty.
*/
	password: string;
}

/**
A HTTP transparent proxy server.
Subtype of {@link ProxyType}.
*/
export interface ProxyTypeHttp {
	'@type': 'proxyTypeHttp';
	/**
Username for logging in; may be empty.
*/
	username: string;
	/**
Password for logging in; may be empty.
*/
	password: string;
	/**
Pass true if the proxy supports only HTTP requests and doesn't support transparent TCP connections via HTTP CONNECT
method.
*/
	http_only?: boolean;
}

/**
An MTProto proxy server.
Subtype of {@link ProxyType}.
*/
export interface ProxyTypeMtproto {
	'@type': 'proxyTypeMtproto';
	/**
The proxy's secret in hexadecimal encoding.
*/
	secret: string;
}

/**
Contains information about a proxy server.
*/
export interface Proxy {
	'@type': 'proxy';
	/**
Unique identifier of the proxy.
*/
	id: number;
	/**
Proxy server IP address.
*/
	server: string;
	/**
Proxy server port.
*/
	port: number;
	/**
Point in time (Unix timestamp) when the proxy was last used; 0 if never.
*/
	last_used_date: number;
	/**
True, if the proxy is enabled now.
*/
	is_enabled?: boolean;
	/**
Type of the proxy.
*/
	type: ProxyType;
}

/**
Represents a list of proxy servers.
*/
export interface Proxies {
	'@type': 'proxies';
	/**
List of proxy servers.
*/
	proxies: Proxy[];
}

/**
A sticker to be added to a sticker set.
*/
export interface InputSticker {
	'@type': 'inputSticker';
	/**
File with the sticker; must fit in a 512x512 square. For WEBP stickers and masks the file must be in PNG format, which
will be converted to WEBP server-side. Otherwise, the file must be local or uploaded within a week. See
https://core.telegram.org/animated_stickers#technical-requirements for technical requirements.
*/
	sticker: InputFile;
	/**
Emojis corresponding to the sticker.
*/
	emojis: string;
	/**
Sticker format.
*/
	format: StickerFormat;
	/**
Position where the mask is placed; pass null if not specified.
*/
	mask_position: MaskPosition;
}

/**
Represents a date range.
*/
export interface DateRange {
	'@type': 'dateRange';
	/**
Point in time (Unix timestamp) at which the date range begins.
*/
	start_date: number;
	/**
Point in time (Unix timestamp) at which the date range ends.
*/
	end_date: number;
}

/**
A value with information about its recent changes.
*/
export interface StatisticalValue {
	'@type': 'statisticalValue';
	/**
The current value.
*/
	value: number;
	/**
The value for the previous day.
*/
	previous_value: number;
	/**
The growth rate of the value, as a percentage.
*/
	growth_rate_percentage: number;
}

/**
Describes a statistical graph.
Subtype of {@link StatisticalGraph}.
*/
export interface StatisticalGraphData {
	'@type': 'statisticalGraphData';
	/**
Graph data in JSON format.
*/
	json_data: string;
	/**
If non-empty, a token which can be used to receive a zoomed in graph.
*/
	zoom_token: string;
}

/**
The graph data to be asynchronously loaded through getStatisticalGraph.
Subtype of {@link StatisticalGraph}.
*/
export interface StatisticalGraphAsync {
	'@type': 'statisticalGraphAsync';
	/**
The token to use for data loading.
*/
	token: string;
}

/**
An error message to be shown to the user instead of the graph.
Subtype of {@link StatisticalGraph}.
*/
export interface StatisticalGraphError {
	'@type': 'statisticalGraphError';
	/**
The error message.
*/
	error_message: string;
}

/**
Contains statistics about interactions with a message.
*/
export interface ChatStatisticsMessageInteractionInfo {
	'@type': 'chatStatisticsMessageInteractionInfo';
	/**
Message identifier.
*/
	message_id: number;
	/**
Number of times the message was viewed.
*/
	view_count: number;
	/**
Number of times the message was forwarded.
*/
	forward_count: number;
}

/**
Contains statistics about messages sent by a user.
*/
export interface ChatStatisticsMessageSenderInfo {
	'@type': 'chatStatisticsMessageSenderInfo';
	/**
User identifier.
*/
	user_id: number;
	/**
Number of sent messages.
*/
	sent_message_count: number;
	/**
Average number of characters in sent messages; 0 if unknown.
*/
	average_character_count: number;
}

/**
Contains statistics about administrator actions done by a user.
*/
export interface ChatStatisticsAdministratorActionsInfo {
	'@type': 'chatStatisticsAdministratorActionsInfo';
	/**
Administrator user identifier.
*/
	user_id: number;
	/**
Number of messages deleted by the administrator.
*/
	deleted_message_count: number;
	/**
Number of users banned by the administrator.
*/
	banned_user_count: number;
	/**
Number of users restricted by the administrator.
*/
	restricted_user_count: number;
}

/**
Contains statistics about number of new members invited by a user.
*/
export interface ChatStatisticsInviterInfo {
	'@type': 'chatStatisticsInviterInfo';
	/**
User identifier.
*/
	user_id: number;
	/**
Number of new members invited by the user.
*/
	added_member_count: number;
}

/**
Contains a detailed statistics about a chat.
Subtype of {@link ChatStatistics}.
*/
export interface ChatStatisticsSupergroup {
	'@type': 'chatStatisticsSupergroup';
	/**
A period to which the statistics applies.
*/
	period: DateRange;
	/**
Number of members in the chat.
*/
	member_count: StatisticalValue;
	/**
Number of messages sent to the chat.
*/
	message_count: StatisticalValue;
	/**
Number of users who viewed messages in the chat.
*/
	viewer_count: StatisticalValue;
	/**
Number of users who sent messages to the chat.
*/
	sender_count: StatisticalValue;
	/**
A graph containing number of members in the chat.
*/
	member_count_graph: StatisticalGraph;
	/**
A graph containing number of members joined and left the chat.
*/
	join_graph: StatisticalGraph;
	/**
A graph containing number of new member joins per source.
*/
	join_by_source_graph: StatisticalGraph;
	/**
A graph containing distribution of active users per language.
*/
	language_graph: StatisticalGraph;
	/**
A graph containing distribution of sent messages by content type.
*/
	message_content_graph: StatisticalGraph;
	/**
A graph containing number of different actions in the chat.
*/
	action_graph: StatisticalGraph;
	/**
A graph containing distribution of message views per hour.
*/
	day_graph: StatisticalGraph;
	/**
A graph containing distribution of message views per day of week.
*/
	week_graph: StatisticalGraph;
	/**
List of users sent most messages in the last week.
*/
	top_senders: ChatStatisticsMessageSenderInfo[];
	/**
List of most active administrators in the last week.
*/
	top_administrators: ChatStatisticsAdministratorActionsInfo[];
	/**
List of most active inviters of new members in the last week.
*/
	top_inviters: ChatStatisticsInviterInfo[];
}

/**
A detailed statistics about a channel chat.
Subtype of {@link ChatStatistics}.
*/
export interface ChatStatisticsChannel {
	'@type': 'chatStatisticsChannel';
	/**
A period to which the statistics applies.
*/
	period: DateRange;
	/**
Number of members in the chat.
*/
	member_count: StatisticalValue;
	/**
Mean number of times the recently sent messages was viewed.
*/
	mean_view_count: StatisticalValue;
	/**
Mean number of times the recently sent messages was shared.
*/
	mean_share_count: StatisticalValue;
	/**
A percentage of users with enabled notifications for the chat.
*/
	enabled_notifications_percentage: number;
	/**
A graph containing number of members in the chat.
*/
	member_count_graph: StatisticalGraph;
	/**
A graph containing number of members joined and left the chat.
*/
	join_graph: StatisticalGraph;
	/**
A graph containing number of members muted and unmuted the chat.
*/
	mute_graph: StatisticalGraph;
	/**
A graph containing number of message views in a given hour in the last two weeks.
*/
	view_count_by_hour_graph: StatisticalGraph;
	/**
A graph containing number of message views per source.
*/
	view_count_by_source_graph: StatisticalGraph;
	/**
A graph containing number of new member joins per source.
*/
	join_by_source_graph: StatisticalGraph;
	/**
A graph containing number of users viewed chat messages per language.
*/
	language_graph: StatisticalGraph;
	/**
A graph containing number of chat message views and shares.
*/
	message_interaction_graph: StatisticalGraph;
	/**
A graph containing number of views of associated with the chat instant views.
*/
	instant_view_interaction_graph: StatisticalGraph;
	/**
Detailed statistics about number of views and shares of recently sent messages.
*/
	recent_message_interactions: ChatStatisticsMessageInteractionInfo[];
}

/**
A detailed statistics about a message.
*/
export interface MessageStatistics {
	'@type': 'messageStatistics';
	/**
A graph containing number of message views and shares.
*/
	message_interaction_graph: StatisticalGraph;
}

/**
A point on a Cartesian plane.
*/
export interface Point {
	'@type': 'point';
	/**
The point's first coordinate.
*/
	x: number;
	/**
The point's second coordinate.
*/
	y: number;
}

/**
Represents a vector path command.
Subtype of {@link VectorPathCommand}.
*/
export interface VectorPathCommandLine {
	'@type': 'vectorPathCommandLine';
	/**
The end point of the straight line.
*/
	end_point: Point;
}

/**
A cubic Bézier curve to a given point.
Subtype of {@link VectorPathCommand}.
*/
export interface VectorPathCommandCubicBezierCurve {
	'@type': 'vectorPathCommandCubicBezierCurve';
	/**
The start control point of the curve.
*/
	start_control_point: Point;
	/**
The end control point of the curve.
*/
	end_control_point: Point;
	/**
The end point of the curve.
*/
	end_point: Point;
}

/**
Represents the scope to which bot commands are relevant.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeDefault {
	'@type': 'botCommandScopeDefault';

}

/**
A scope covering all private chats.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeAllPrivateChats {
	'@type': 'botCommandScopeAllPrivateChats';

}

/**
A scope covering all group and supergroup chats.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeAllGroupChats {
	'@type': 'botCommandScopeAllGroupChats';

}

/**
A scope covering all group and supergroup chat administrators.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeAllChatAdministrators {
	'@type': 'botCommandScopeAllChatAdministrators';

}

/**
A scope covering all members of a chat.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeChat {
	'@type': 'botCommandScopeChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
A scope covering all administrators of a chat.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeChatAdministrators {
	'@type': 'botCommandScopeChatAdministrators';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
A scope covering a member of a chat.
Subtype of {@link BotCommandScope}.
*/
export interface BotCommandScopeChatMember {
	'@type': 'botCommandScopeChatMember';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
User identifier.
*/
	user_id: number;
}

/**
Contains notifications about data changes.
Subtype of {@link Update}.
*/
export interface UpdateAuthorizationState {
	'@type': 'updateAuthorizationState';
	/**
New authorization state.
*/
	authorization_state: AuthorizationState;
}

/**
A new message was received; can also be an outgoing message.
Subtype of {@link Update}.
*/
export interface UpdateNewMessage {
	'@type': 'updateNewMessage';
	/**
The new message.
*/
	message: Message;
}

/**
A request to send a message has reached the Telegram server. This doesn't mean that the message will be sent
successfully or even that the send message request will be processed. This update will be sent only if the option
"use_quick_ack" is set to true. This update may be sent multiple times for the same message.
Subtype of {@link Update}.
*/
export interface UpdateMessageSendAcknowledged {
	'@type': 'updateMessageSendAcknowledged';
	/**
The chat identifier of the sent message.
*/
	chat_id: number;
	/**
A temporary message identifier.
*/
	message_id: number;
}

/**
A message has been successfully sent.
Subtype of {@link Update}.
*/
export interface UpdateMessageSendSucceeded {
	'@type': 'updateMessageSendSucceeded';
	/**
The sent message. Usually only the message identifier, date, and content are changed, but almost all other fields can
also change.
*/
	message: Message;
	/**
The previous temporary message identifier.
*/
	old_message_id: number;
}

/**
A message failed to send. Be aware that some messages being sent can be irrecoverably deleted, in which case
updateDeleteMessages will be received instead of this update.
Subtype of {@link Update}.
*/
export interface UpdateMessageSendFailed {
	'@type': 'updateMessageSendFailed';
	/**
The failed to send message.
*/
	message: Message;
	/**
The previous temporary message identifier.
*/
	old_message_id: number;
	/**
An error code.
*/
	error_code: number;
	/**
Error message.
*/
	error_message: string;
}

/**
The message content has changed.
Subtype of {@link Update}.
*/
export interface UpdateMessageContent {
	'@type': 'updateMessageContent';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
New message content.
*/
	new_content: MessageContent;
}

/**
A message was edited. Changes in the message content will come in a separate updateMessageContent.
Subtype of {@link Update}.
*/
export interface UpdateMessageEdited {
	'@type': 'updateMessageEdited';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Point in time (Unix timestamp) when the message was edited.
*/
	edit_date: number;
	/**
New message reply markup; may be null.
*/
	reply_markup: ReplyMarkup;
}

/**
The message pinned state was changed.
Subtype of {@link Update}.
*/
export interface UpdateMessageIsPinned {
	'@type': 'updateMessageIsPinned';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The message identifier.
*/
	message_id: number;
	/**
True, if the message is pinned.
*/
	is_pinned?: boolean;
}

/**
The information about interactions with a message has changed.
Subtype of {@link Update}.
*/
export interface UpdateMessageInteractionInfo {
	'@type': 'updateMessageInteractionInfo';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
New information about interactions with the message; may be null.
*/
	interaction_info: MessageInteractionInfo;
}

/**
The message content was opened. Updates voice note messages to "listened", video note messages to "viewed" and starts
the TTL timer for self-destructing messages.
Subtype of {@link Update}.
*/
export interface UpdateMessageContentOpened {
	'@type': 'updateMessageContentOpened';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
}

/**
A message with an unread mention was read.
Subtype of {@link Update}.
*/
export interface UpdateMessageMentionRead {
	'@type': 'updateMessageMentionRead';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
The new number of unread mention messages left in the chat.
*/
	unread_mention_count: number;
}

/**
The list of unread reactions added to a message was changed.
Subtype of {@link Update}.
*/
export interface UpdateMessageUnreadReactions {
	'@type': 'updateMessageUnreadReactions';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
The new list of unread reactions.
*/
	unread_reactions: UnreadReaction[];
	/**
The new number of messages with unread reactions left in the chat.
*/
	unread_reaction_count: number;
}

/**
A message with a live location was viewed. When the update is received, the application is supposed to update the live
location.
Subtype of {@link Update}.
*/
export interface UpdateMessageLiveLocationViewed {
	'@type': 'updateMessageLiveLocationViewed';
	/**
Identifier of the chat with the live location message.
*/
	chat_id: number;
	/**
Identifier of the message with live location.
*/
	message_id: number;
}

/**
A new chat has been loaded/created. This update is guaranteed to come before the chat identifier is returned to the
application. The chat field changes will be reported through separate updates.
Subtype of {@link Update}.
*/
export interface UpdateNewChat {
	'@type': 'updateNewChat';
	/**
The chat.
*/
	chat: Chat;
}

/**
The title of a chat was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatTitle {
	'@type': 'updateChatTitle';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new chat title.
*/
	title: string;
}

/**
A chat photo was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatPhoto {
	'@type': 'updateChatPhoto';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new chat photo; may be null.
*/
	photo: ChatPhotoInfo;
}

/**
Chat permissions was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatPermissions {
	'@type': 'updateChatPermissions';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new chat permissions.
*/
	permissions: ChatPermissions;
}

/**
The last message of a chat was changed. If last_message is null, then the last message in the chat became unknown. Some
new unknown messages might be added to the chat in this case.
Subtype of {@link Update}.
*/
export interface UpdateChatLastMessage {
	'@type': 'updateChatLastMessage';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new last message in the chat; may be null.
*/
	last_message: Message;
	/**
The new chat positions in the chat lists.
*/
	positions: ChatPosition[];
}

/**
The position of a chat in a chat list has changed. Instead of this update updateChatLastMessage or
updateChatDraftMessage might be sent.
Subtype of {@link Update}.
*/
export interface UpdateChatPosition {
	'@type': 'updateChatPosition';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New chat position. If new order is 0, then the chat needs to be removed from the list.
*/
	position: ChatPosition;
}

/**
Incoming messages were read or the number of unread messages has been changed.
Subtype of {@link Update}.
*/
export interface UpdateChatReadInbox {
	'@type': 'updateChatReadInbox';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the last read incoming message.
*/
	last_read_inbox_message_id: number;
	/**
The number of unread messages left in the chat.
*/
	unread_count: number;
}

/**
Outgoing messages were read.
Subtype of {@link Update}.
*/
export interface UpdateChatReadOutbox {
	'@type': 'updateChatReadOutbox';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of last read outgoing message.
*/
	last_read_outbox_message_id: number;
}

/**
The chat action bar was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatActionBar {
	'@type': 'updateChatActionBar';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new value of the action bar; may be null.
*/
	action_bar: ChatActionBar;
}

/**
The chat available reactions were changed.
Subtype of {@link Update}.
*/
export interface UpdateChatAvailableReactions {
	'@type': 'updateChatAvailableReactions';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new reactions, available in the chat.
*/
	available_reactions: ChatAvailableReactions;
}

/**
A chat draft has changed. Be aware that the update may come in the currently opened chat but with old content of the
draft. If the user has changed the content of the draft, this update mustn't be applied.
Subtype of {@link Update}.
*/
export interface UpdateChatDraftMessage {
	'@type': 'updateChatDraftMessage';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new draft message; may be null.
*/
	draft_message: DraftMessage;
	/**
The new chat positions in the chat lists.
*/
	positions: ChatPosition[];
}

/**
The message sender that is selected to send messages in a chat has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatMessageSender {
	'@type': 'updateChatMessageSender';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of message_sender_id; may be null if the user can't change message sender.
*/
	message_sender_id: MessageSender;
}

/**
The message Time To Live setting for a chat was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatMessageTtl {
	'@type': 'updateChatMessageTtl';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of message_ttl.
*/
	message_ttl: number;
}

/**
Notification settings for a chat were changed.
Subtype of {@link Update}.
*/
export interface UpdateChatNotificationSettings {
	'@type': 'updateChatNotificationSettings';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new notification settings.
*/
	notification_settings: ChatNotificationSettings;
}

/**
The chat pending join requests were changed.
Subtype of {@link Update}.
*/
export interface UpdateChatPendingJoinRequests {
	'@type': 'updateChatPendingJoinRequests';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new data about pending join requests; may be null.
*/
	pending_join_requests: ChatJoinRequestsInfo;
}

/**
The default chat reply markup was changed. Can occur because new messages with reply markup were received or because an
old reply markup was hidden by the user.
Subtype of {@link Update}.
*/
export interface UpdateChatReplyMarkup {
	'@type': 'updateChatReplyMarkup';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the
chat.
*/
	reply_markup_message_id: number;
}

/**
The chat theme was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatTheme {
	'@type': 'updateChatTheme';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new name of the chat theme; may be empty if theme was reset to default.
*/
	theme_name: string;
}

/**
The chat unread_mention_count has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatUnreadMentionCount {
	'@type': 'updateChatUnreadMentionCount';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The number of unread mention messages left in the chat.
*/
	unread_mention_count: number;
}

/**
The chat unread_reaction_count has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatUnreadReactionCount {
	'@type': 'updateChatUnreadReactionCount';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The number of messages with unread reactions left in the chat.
*/
	unread_reaction_count: number;
}

/**
A chat video chat state has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatVideoChat {
	'@type': 'updateChatVideoChat';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of video_chat.
*/
	video_chat: VideoChat;
}

/**
The value of the default disable_notification parameter, used when a message is sent to the chat, was changed.
Subtype of {@link Update}.
*/
export interface UpdateChatDefaultDisableNotification {
	'@type': 'updateChatDefaultDisableNotification';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The new default_disable_notification value.
*/
	default_disable_notification?: boolean;
}

/**
A chat content was allowed or restricted for saving.
Subtype of {@link Update}.
*/
export interface UpdateChatHasProtectedContent {
	'@type': 'updateChatHasProtectedContent';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of has_protected_content.
*/
	has_protected_content?: boolean;
}

/**
A chat's has_scheduled_messages field has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatHasScheduledMessages {
	'@type': 'updateChatHasScheduledMessages';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of has_scheduled_messages.
*/
	has_scheduled_messages?: boolean;
}

/**
A chat was blocked or unblocked.
Subtype of {@link Update}.
*/
export interface UpdateChatIsBlocked {
	'@type': 'updateChatIsBlocked';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of is_blocked.
*/
	is_blocked?: boolean;
}

/**
A chat was marked as unread or was read.
Subtype of {@link Update}.
*/
export interface UpdateChatIsMarkedAsUnread {
	'@type': 'updateChatIsMarkedAsUnread';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of is_marked_as_unread.
*/
	is_marked_as_unread?: boolean;
}

/**
The list of chat filters or a chat filter has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatFilters {
	'@type': 'updateChatFilters';
	/**
The new list of chat filters.
*/
	chat_filters: ChatFilterInfo[];
	/**
Position of the main chat list among chat filters, 0-based.
*/
	main_chat_list_position: number;
}

/**
The number of online group members has changed. This update with non-zero number of online group members is sent only
for currently opened chats. There is no guarantee that it will be sent just after the number of online users has
changed.
Subtype of {@link Update}.
*/
export interface UpdateChatOnlineMemberCount {
	'@type': 'updateChatOnlineMemberCount';
	/**
Identifier of the chat.
*/
	chat_id: number;
	/**
New number of online members in the chat, or 0 if unknown.
*/
	online_member_count: number;
}

/**
Notification settings for some type of chats were updated.
Subtype of {@link Update}.
*/
export interface UpdateScopeNotificationSettings {
	'@type': 'updateScopeNotificationSettings';
	/**
Types of chats for which notification settings were updated.
*/
	scope: NotificationSettingsScope;
	/**
The new notification settings.
*/
	notification_settings: ScopeNotificationSettings;
}

/**
A notification was changed.
Subtype of {@link Update}.
*/
export interface UpdateNotification {
	'@type': 'updateNotification';
	/**
Unique notification group identifier.
*/
	notification_group_id: number;
	/**
Changed notification.
*/
	notification: Notification;
}

/**
A list of active notifications in a notification group has changed.
Subtype of {@link Update}.
*/
export interface UpdateNotificationGroup {
	'@type': 'updateNotificationGroup';
	/**
Unique notification group identifier.
*/
	notification_group_id: number;
	/**
New type of the notification group.
*/
	type: NotificationGroupType;
	/**
Identifier of a chat to which all notifications in the group belong.
*/
	chat_id: number;
	/**
Chat identifier, which notification settings must be applied to the added notifications.
*/
	notification_settings_chat_id: number;
	/**
Identifier of the notification sound to be played; 0 if sound is disabled.
*/
	notification_sound_id: string;
	/**
Total number of unread notifications in the group, can be bigger than number of active notifications.
*/
	total_count: number;
	/**
List of added group notifications, sorted by notification ID.
*/
	added_notifications: Notification[];
	/**
Identifiers of removed group notifications, sorted by notification ID.
*/
	removed_notification_ids: number[];
}

/**
Contains active notifications that was shown on previous application launches. This update is sent only if the message
database is used. In that case it comes once before any updateNotification and updateNotificationGroup update.
Subtype of {@link Update}.
*/
export interface UpdateActiveNotifications {
	'@type': 'updateActiveNotifications';
	/**
Lists of active notification groups.
*/
	groups: NotificationGroup[];
}

/**
Describes whether there are some pending notification updates. Can be used to prevent application from killing, while
there are some pending notifications.
Subtype of {@link Update}.
*/
export interface UpdateHavePendingNotifications {
	'@type': 'updateHavePendingNotifications';
	/**
True, if there are some delayed notification updates, which will be sent soon.
*/
	have_delayed_notifications?: boolean;
	/**
True, if there can be some yet unreceived notifications, which are being fetched from the server.
*/
	have_unreceived_notifications?: boolean;
}

/**
Some messages were deleted.
Subtype of {@link Update}.
*/
export interface UpdateDeleteMessages {
	'@type': 'updateDeleteMessages';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifiers of the deleted messages.
*/
	message_ids: number[];
	/**
True, if the messages are permanently deleted by a user (as opposed to just becoming inaccessible).
*/
	is_permanent?: boolean;
	/**
True, if the messages are deleted only from the cache and can possibly be retrieved again in the future.
*/
	from_cache?: boolean;
}

/**
A message sender activity in the chat has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatAction {
	'@type': 'updateChatAction';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the action was performed.
*/
	message_thread_id: number;
	/**
Identifier of a message sender performing the action.
*/
	sender_id: MessageSender;
	/**
The action.
*/
	action: ChatAction;
}

/**
The user went online or offline.
Subtype of {@link Update}.
*/
export interface UpdateUserStatus {
	'@type': 'updateUserStatus';
	/**
User identifier.
*/
	user_id: number;
	/**
New status of the user.
*/
	status: UserStatus;
}

/**
Some data of a user has changed. This update is guaranteed to come before the user identifier is returned to the
application.
Subtype of {@link Update}.
*/
export interface UpdateUser {
	'@type': 'updateUser';
	/**
New data about the user.
*/
	user: User;
}

/**
Some data of a basic group has changed. This update is guaranteed to come before the basic group identifier is returned
to the application.
Subtype of {@link Update}.
*/
export interface UpdateBasicGroup {
	'@type': 'updateBasicGroup';
	/**
New data about the group.
*/
	basic_group: BasicGroup;
}

/**
Some data of a supergroup or a channel has changed. This update is guaranteed to come before the supergroup identifier
is returned to the application.
Subtype of {@link Update}.
*/
export interface UpdateSupergroup {
	'@type': 'updateSupergroup';
	/**
New data about the supergroup.
*/
	supergroup: Supergroup;
}

/**
Some data of a secret chat has changed. This update is guaranteed to come before the secret chat identifier is returned
to the application.
Subtype of {@link Update}.
*/
export interface UpdateSecretChat {
	'@type': 'updateSecretChat';
	/**
New data about the secret chat.
*/
	secret_chat: SecretChat;
}

/**
Some data in userFullInfo has been changed.
Subtype of {@link Update}.
*/
export interface UpdateUserFullInfo {
	'@type': 'updateUserFullInfo';
	/**
User identifier.
*/
	user_id: number;
	/**
New full information about the user.
*/
	user_full_info: UserFullInfo;
}

/**
Some data in basicGroupFullInfo has been changed.
Subtype of {@link Update}.
*/
export interface UpdateBasicGroupFullInfo {
	'@type': 'updateBasicGroupFullInfo';
	/**
Identifier of a basic group.
*/
	basic_group_id: number;
	/**
New full information about the group.
*/
	basic_group_full_info: BasicGroupFullInfo;
}

/**
Some data in supergroupFullInfo has been changed.
Subtype of {@link Update}.
*/
export interface UpdateSupergroupFullInfo {
	'@type': 'updateSupergroupFullInfo';
	/**
Identifier of the supergroup or channel.
*/
	supergroup_id: number;
	/**
New full information about the supergroup.
*/
	supergroup_full_info: SupergroupFullInfo;
}

/**
A service notification from the server was received. Upon receiving this the application must show a popup with the
content of the notification.
Subtype of {@link Update}.
*/
export interface UpdateServiceNotification {
	'@type': 'updateServiceNotification';
	/**
Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel" and "Log out" must be shown under
notification; if user presses the second, all local data must be destroyed using Destroy method.
*/
	type: string;
	/**
Notification content.
*/
	content: MessageContent;
}

/**
Information about a file was updated.
Subtype of {@link Update}.
*/
export interface UpdateFile {
	'@type': 'updateFile';
	/**
New data about the file.
*/
	file: File;
}

/**
The file generation process needs to be started by the application.
Subtype of {@link Update}.
*/
export interface UpdateFileGenerationStart {
	'@type': 'updateFileGenerationStart';
	/**
Unique identifier for the generation process.
*/
	generation_id: string;
	/**
The path to a file from which a new file is generated; may be empty.
*/
	original_path: string;
	/**
The path to a file that must be created and where the new file is generated.
*/
	destination_path: string;
	/**
String specifying the conversion applied to the original file. If conversion is "#url#" than original_path contains an
HTTP/HTTPS URL of a file, which must be downloaded by the application.
*/
	conversion: string;
}

/**
File generation is no longer needed.
Subtype of {@link Update}.
*/
export interface UpdateFileGenerationStop {
	'@type': 'updateFileGenerationStop';
	/**
Unique identifier for the generation process.
*/
	generation_id: string;
}

/**
The state of the file download list has changed.
Subtype of {@link Update}.
*/
export interface UpdateFileDownloads {
	'@type': 'updateFileDownloads';
	/**
Total size of files in the file download list, in bytes.
*/
	total_size: number;
	/**
Total number of files in the file download list.
*/
	total_count: number;
	/**
Total downloaded size of files in the file download list, in bytes.
*/
	downloaded_size: number;
}

/**
A file was added to the file download list. This update is sent only after file download list is loaded for the first
time.
Subtype of {@link Update}.
*/
export interface UpdateFileAddedToDownloads {
	'@type': 'updateFileAddedToDownloads';
	/**
The added file download.
*/
	file_download: FileDownload;
	/**
New number of being downloaded and recently downloaded files found.
*/
	counts: DownloadedFileCounts;
}

/**
A file download was changed. This update is sent only after file download list is loaded for the first time.
Subtype of {@link Update}.
*/
export interface UpdateFileDownload {
	'@type': 'updateFileDownload';
	/**
File identifier.
*/
	file_id: number;
	/**
Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed.
*/
	complete_date: number;
	/**
True, if downloading of the file is paused.
*/
	is_paused?: boolean;
	/**
New number of being downloaded and recently downloaded files found.
*/
	counts: DownloadedFileCounts;
}

/**
A file was removed from the file download list. This update is sent only after file download list is loaded for the
first time.
Subtype of {@link Update}.
*/
export interface UpdateFileRemovedFromDownloads {
	'@type': 'updateFileRemovedFromDownloads';
	/**
File identifier.
*/
	file_id: number;
	/**
New number of being downloaded and recently downloaded files found.
*/
	counts: DownloadedFileCounts;
}

/**
New call was created or information about a call was updated.
Subtype of {@link Update}.
*/
export interface UpdateCall {
	'@type': 'updateCall';
	/**
New data about a call.
*/
	call: Call;
}

/**
Information about a group call was updated.
Subtype of {@link Update}.
*/
export interface UpdateGroupCall {
	'@type': 'updateGroupCall';
	/**
New data about a group call.
*/
	group_call: GroupCall;
}

/**
Information about a group call participant was changed. The updates are sent only after the group call is received
through getGroupCall and only if the call is joined or being joined.
Subtype of {@link Update}.
*/
export interface UpdateGroupCallParticipant {
	'@type': 'updateGroupCallParticipant';
	/**
Identifier of group call.
*/
	group_call_id: number;
	/**
New data about a participant.
*/
	participant: GroupCallParticipant;
}

/**
New call signaling data arrived.
Subtype of {@link Update}.
*/
export interface UpdateNewCallSignalingData {
	'@type': 'updateNewCallSignalingData';
	/**
The call identifier.
*/
	call_id: number;
	/**
The data.
*/
	data: string;
}

/**
Some privacy setting rules have been changed.
Subtype of {@link Update}.
*/
export interface UpdateUserPrivacySettingRules {
	'@type': 'updateUserPrivacySettingRules';
	/**
The privacy setting.
*/
	setting: UserPrivacySetting;
	/**
New privacy rules.
*/
	rules: UserPrivacySettingRules;
}

/**
Number of unread messages in a chat list has changed. This update is sent only if the message database is used.
Subtype of {@link Update}.
*/
export interface UpdateUnreadMessageCount {
	'@type': 'updateUnreadMessageCount';
	/**
The chat list with changed number of unread messages.
*/
	chat_list: ChatList;
	/**
Total number of unread messages.
*/
	unread_count: number;
	/**
Total number of unread messages in unmuted chats.
*/
	unread_unmuted_count: number;
}

/**
Number of unread chats, i.e. with unread messages or marked as unread, has changed. This update is sent only if the
message database is used.
Subtype of {@link Update}.
*/
export interface UpdateUnreadChatCount {
	'@type': 'updateUnreadChatCount';
	/**
The chat list with changed number of unread messages.
*/
	chat_list: ChatList;
	/**
Approximate total number of chats in the chat list.
*/
	total_count: number;
	/**
Total number of unread chats.
*/
	unread_count: number;
	/**
Total number of unread unmuted chats.
*/
	unread_unmuted_count: number;
	/**
Total number of chats marked as unread.
*/
	marked_as_unread_count: number;
	/**
Total number of unmuted chats marked as unread.
*/
	marked_as_unread_unmuted_count: number;
}

/**
An option changed its value.
Subtype of {@link Update}.
*/
export interface UpdateOption {
	'@type': 'updateOption';
	/**
The option name.
*/
	name: string;
	/**
The new option value.
*/
	value: OptionValue;
}

/**
A sticker set has changed.
Subtype of {@link Update}.
*/
export interface UpdateStickerSet {
	'@type': 'updateStickerSet';
	/**
The sticker set.
*/
	sticker_set: StickerSet;
}

/**
The list of installed sticker sets was updated.
Subtype of {@link Update}.
*/
export interface UpdateInstalledStickerSets {
	'@type': 'updateInstalledStickerSets';
	/**
Type of the affected stickers.
*/
	sticker_type: StickerType;
	/**
The new list of installed ordinary sticker sets.
*/
	sticker_set_ids: string[];
}

/**
The list of trending sticker sets was updated or some of them were viewed.
Subtype of {@link Update}.
*/
export interface UpdateTrendingStickerSets {
	'@type': 'updateTrendingStickerSets';
	/**
Type of the affected stickers.
*/
	sticker_type: StickerType;
	/**
The prefix of the list of trending sticker sets with the newest trending sticker sets.
*/
	sticker_sets: TrendingStickerSets;
}

/**
The list of recently used stickers was updated.
Subtype of {@link Update}.
*/
export interface UpdateRecentStickers {
	'@type': 'updateRecentStickers';
	/**
True, if the list of stickers attached to photo or video files was updated, otherwise the list of sent stickers is
updated.
*/
	is_attached?: boolean;
	/**
The new list of file identifiers of recently used stickers.
*/
	sticker_ids: number[];
}

/**
The list of favorite stickers was updated.
Subtype of {@link Update}.
*/
export interface UpdateFavoriteStickers {
	'@type': 'updateFavoriteStickers';
	/**
The new list of file identifiers of favorite stickers.
*/
	sticker_ids: number[];
}

/**
The list of saved animations was updated.
Subtype of {@link Update}.
*/
export interface UpdateSavedAnimations {
	'@type': 'updateSavedAnimations';
	/**
The new list of file identifiers of saved animations.
*/
	animation_ids: number[];
}

/**
The list of saved notifications sounds was updated. This update may not be sent until information about a notification
sound was requested for the first time.
Subtype of {@link Update}.
*/
export interface UpdateSavedNotificationSounds {
	'@type': 'updateSavedNotificationSounds';
	/**
The new list of identifiers of saved notification sounds.
*/
	notification_sound_ids: string[];
}

/**
The selected background has changed.
Subtype of {@link Update}.
*/
export interface UpdateSelectedBackground {
	'@type': 'updateSelectedBackground';
	/**
True, if background for dark theme has changed.
*/
	for_dark_theme?: boolean;
	/**
The new selected background; may be null.
*/
	background: Background;
}

/**
The list of available chat themes has changed.
Subtype of {@link Update}.
*/
export interface UpdateChatThemes {
	'@type': 'updateChatThemes';
	/**
The new list of chat themes.
*/
	chat_themes: ChatTheme[];
}

/**
Some language pack strings have been updated.
Subtype of {@link Update}.
*/
export interface UpdateLanguagePackStrings {
	'@type': 'updateLanguagePackStrings';
	/**
Localization target to which the language pack belongs.
*/
	localization_target: string;
	/**
Identifier of the updated language pack.
*/
	language_pack_id: string;
	/**
List of changed language pack strings.
*/
	strings: LanguagePackString[];
}

/**
The connection state has changed. This update must be used only to show a human-readable description of the connection
state.
Subtype of {@link Update}.
*/
export interface UpdateConnectionState {
	'@type': 'updateConnectionState';
	/**
The new connection state.
*/
	state: ConnectionState;
}

/**
New terms of service must be accepted by the user. If the terms of service are declined, then the deleteAccount method
must be called with the reason "Decline ToS update".
Subtype of {@link Update}.
*/
export interface UpdateTermsOfService {
	'@type': 'updateTermsOfService';
	/**
Identifier of the terms of service.
*/
	terms_of_service_id: string;
	/**
The new terms of service.
*/
	terms_of_service: TermsOfService;
}

/**
The list of users nearby has changed. The update is guaranteed to be sent only 60 seconds after a successful
searchChatsNearby request.
Subtype of {@link Update}.
*/
export interface UpdateUsersNearby {
	'@type': 'updateUsersNearby';
	/**
The new list of users nearby.
*/
	users_nearby: ChatNearby[];
}

/**
The list of bots added to attachment menu has changed.
Subtype of {@link Update}.
*/
export interface UpdateAttachmentMenuBots {
	'@type': 'updateAttachmentMenuBots';
	/**
The new list of bots added to attachment menu. The bots must not be shown on scheduled messages screen.
*/
	bots: AttachmentMenuBot[];
}

/**
A message was sent by an opened Web App, so the Web App needs to be closed.
Subtype of {@link Update}.
*/
export interface UpdateWebAppMessageSent {
	'@type': 'updateWebAppMessageSent';
	/**
Identifier of Web App launch.
*/
	web_app_launch_id: string;
}

/**
The list of active emoji reactions has changed.
Subtype of {@link Update}.
*/
export interface UpdateActiveEmojiReactions {
	'@type': 'updateActiveEmojiReactions';
	/**
The new list of active emoji reactions.
*/
	emojis: string[];
}

/**
The type of default reaction has changed.
Subtype of {@link Update}.
*/
export interface UpdateDefaultReactionType {
	'@type': 'updateDefaultReactionType';
	/**
The new type of the default reaction.
*/
	reaction_type: ReactionType;
}

/**
The list of supported dice emojis has changed.
Subtype of {@link Update}.
*/
export interface UpdateDiceEmojis {
	'@type': 'updateDiceEmojis';
	/**
The new list of supported dice emojis.
*/
	emojis: string[];
}

/**
Some animated emoji message was clicked and a big animated sticker must be played if the message is visible on the
screen. chatActionWatchingAnimations with the text of the message needs to be sent if the sticker is played.
Subtype of {@link Update}.
*/
export interface UpdateAnimatedEmojiMessageClicked {
	'@type': 'updateAnimatedEmojiMessageClicked';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
The animated sticker to be played.
*/
	sticker: Sticker;
}

/**
The parameters of animation search through GetOption("animation_search_bot_username") bot has changed.
Subtype of {@link Update}.
*/
export interface UpdateAnimationSearchParameters {
	'@type': 'updateAnimationSearchParameters';
	/**
Name of the animation search provider.
*/
	provider: string;
	/**
The new list of emojis suggested for searching.
*/
	emojis: string[];
}

/**
The list of suggested to the user actions has changed.
Subtype of {@link Update}.
*/
export interface UpdateSuggestedActions {
	'@type': 'updateSuggestedActions';
	/**
Added suggested actions.
*/
	added_actions: SuggestedAction[];
	/**
Removed suggested actions.
*/
	removed_actions: SuggestedAction[];
}

/**
A new incoming inline query; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewInlineQuery {
	'@type': 'updateNewInlineQuery';
	/**
Unique query identifier.
*/
	id: string;
	/**
Identifier of the user who sent the query.
*/
	sender_user_id: number;
	/**
User location; may be null.
*/
	user_location: Location;
	/**
The type of the chat from which the query originated; may be null if unknown.
*/
	chat_type: ChatType;
	/**
Text of the query.
*/
	query: string;
	/**
Offset of the first entry to return.
*/
	offset: string;
}

/**
The user has chosen a result of an inline query; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewChosenInlineResult {
	'@type': 'updateNewChosenInlineResult';
	/**
Identifier of the user who sent the query.
*/
	sender_user_id: number;
	/**
User location; may be null.
*/
	user_location: Location;
	/**
Text of the query.
*/
	query: string;
	/**
Identifier of the chosen result.
*/
	result_id: string;
	/**
Identifier of the sent inline message, if known.
*/
	inline_message_id: string;
}

/**
A new incoming callback query; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewCallbackQuery {
	'@type': 'updateNewCallbackQuery';
	/**
Unique query identifier.
*/
	id: string;
	/**
Identifier of the user who sent the query.
*/
	sender_user_id: number;
	/**
Identifier of the chat where the query was sent.
*/
	chat_id: number;
	/**
Identifier of the message from which the query originated.
*/
	message_id: number;
	/**
Identifier that uniquely corresponds to the chat to which the message was sent.
*/
	chat_instance: string;
	/**
Query payload.
*/
	payload: CallbackQueryPayload;
}

/**
A new incoming callback query from a message sent via a bot; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewInlineCallbackQuery {
	'@type': 'updateNewInlineCallbackQuery';
	/**
Unique query identifier.
*/
	id: string;
	/**
Identifier of the user who sent the query.
*/
	sender_user_id: number;
	/**
Identifier of the inline message from which the query originated.
*/
	inline_message_id: string;
	/**
An identifier uniquely corresponding to the chat a message was sent to.
*/
	chat_instance: string;
	/**
Query payload.
*/
	payload: CallbackQueryPayload;
}

/**
A new incoming shipping query; for bots only. Only for invoices with flexible price.
Subtype of {@link Update}.
*/
export interface UpdateNewShippingQuery {
	'@type': 'updateNewShippingQuery';
	/**
Unique query identifier.
*/
	id: string;
	/**
Identifier of the user who sent the query.
*/
	sender_user_id: number;
	/**
Invoice payload.
*/
	invoice_payload: string;
	/**
User shipping address.
*/
	shipping_address: Address;
}

/**
A new incoming pre-checkout query; for bots only. Contains full information about a checkout.
Subtype of {@link Update}.
*/
export interface UpdateNewPreCheckoutQuery {
	'@type': 'updateNewPreCheckoutQuery';
	/**
Unique query identifier.
*/
	id: string;
	/**
Identifier of the user who sent the query.
*/
	sender_user_id: number;
	/**
Currency for the product price.
*/
	currency: string;
	/**
Total price for the product, in the smallest units of the currency.
*/
	total_amount: number;
	/**
Invoice payload.
*/
	invoice_payload: string;
	/**
Identifier of a shipping option chosen by the user; may be empty if not applicable.
*/
	shipping_option_id: string;
	/**
Information about the order; may be null.
*/
	order_info: OrderInfo;
}

/**
A new incoming event; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewCustomEvent {
	'@type': 'updateNewCustomEvent';
	/**
A JSON-serialized event.
*/
	event: string;
}

/**
A new incoming query; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewCustomQuery {
	'@type': 'updateNewCustomQuery';
	/**
The query identifier.
*/
	id: string;
	/**
JSON-serialized query data.
*/
	data: string;
	/**
Query timeout.
*/
	timeout: number;
}

/**
A poll was updated; for bots only.
Subtype of {@link Update}.
*/
export interface UpdatePoll {
	'@type': 'updatePoll';
	/**
New data about the poll.
*/
	poll: Poll;
}

/**
A user changed the answer to a poll; for bots only.
Subtype of {@link Update}.
*/
export interface UpdatePollAnswer {
	'@type': 'updatePollAnswer';
	/**
Unique poll identifier.
*/
	poll_id: string;
	/**
The user, who changed the answer to the poll.
*/
	user_id: number;
	/**
0-based identifiers of answer options, chosen by the user.
*/
	option_ids: number[];
}

/**
User rights changed in a chat; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateChatMember {
	'@type': 'updateChatMember';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the user, changing the rights.
*/
	actor_user_id: number;
	/**
Point in time (Unix timestamp) when the user rights was changed.
*/
	date: number;
	/**
If user has joined the chat using an invite link, the invite link; may be null.
*/
	invite_link: ChatInviteLink;
	/**
Previous chat member.
*/
	old_chat_member: ChatMember;
	/**
New chat member.
*/
	new_chat_member: ChatMember;
}

/**
A user sent a join request to a chat; for bots only.
Subtype of {@link Update}.
*/
export interface UpdateNewChatJoinRequest {
	'@type': 'updateNewChatJoinRequest';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Join request.
*/
	request: ChatJoinRequest;
	/**
The invite link, which was used to send join request; may be null.
*/
	invite_link: ChatInviteLink;
}

/**
Contains a list of updates.
*/
export interface Updates {
	'@type': 'updates';
	/**
List of updates.
*/
	updates: Update[];
}

/**
Describes a stream to which TDLib internal log is written.
Subtype of {@link LogStream}.
*/
export interface LogStreamDefault {
	'@type': 'logStreamDefault';

}

/**
The log is written to a file.
Subtype of {@link LogStream}.
*/
export interface LogStreamFile {
	'@type': 'logStreamFile';
	/**
Path to the file to where the internal TDLib log will be written.
*/
	path: string;
	/**
The maximum size of the file to where the internal TDLib log is written before the file will automatically be rotated,
in bytes.
*/
	max_file_size: number;
	/**
Pass true to additionally redirect stderr to the log file. Ignored on Windows.
*/
	redirect_stderr?: boolean;
}

/**
The log is written nowhere.
Subtype of {@link LogStream}.
*/
export interface LogStreamEmpty {
	'@type': 'logStreamEmpty';

}

/**
Contains a TDLib internal log verbosity level.
*/
export interface LogVerbosityLevel {
	'@type': 'logVerbosityLevel';
	/**
Log verbosity level.
*/
	verbosity_level: number;
}

/**
Contains a list of available TDLib internal log tags.
*/
export interface LogTags {
	'@type': 'logTags';
	/**
List of log tags.
*/
	tags: string[];
}

/**
Contains custom information about the user.
*/
export interface UserSupportInfo {
	'@type': 'userSupportInfo';
	/**
Information message.
*/
	message: FormattedText;
	/**
Information author.
*/
	author: string;
	/**
Information change date.
*/
	date: number;
}

/**
A simple object containing a number; for testing only.
*/
export interface TestInt {
	'@type': 'testInt';
	/**
Number.
*/
	value: number;
}

/**
A simple object containing a string; for testing only.
*/
export interface TestString {
	'@type': 'testString';
	/**
String.
*/
	value: string;
}

/**
A simple object containing a sequence of bytes; for testing only.
*/
export interface TestBytes {
	'@type': 'testBytes';
	/**
Bytes.
*/
	value: string;
}

/**
A simple object containing a vector of numbers; for testing only.
*/
export interface TestVectorInt {
	'@type': 'testVectorInt';
	/**
Vector of numbers.
*/
	value: number[];
}

/**
A simple object containing a vector of objects that hold a number; for testing only.
*/
export interface TestVectorIntObject {
	'@type': 'testVectorIntObject';
	/**
Vector of objects.
*/
	value: TestInt[];
}

/**
A simple object containing a vector of strings; for testing only.
*/
export interface TestVectorString {
	'@type': 'testVectorString';
	/**
Vector of strings.
*/
	value: string[];
}

/**
A simple object containing a vector of objects that hold a string; for testing only.
*/
export interface TestVectorStringObject {
	'@type': 'testVectorStringObject';
	/**
Vector of objects.
*/
	value: TestString[];
}

export type AuthenticationCodeType =
	| AuthenticationCodeTypeTelegramMessage
	| AuthenticationCodeTypeSms
	| AuthenticationCodeTypeCall
	| AuthenticationCodeTypeFlashCall
	| AuthenticationCodeTypeMissedCall;

export type EmailAddressAuthentication =
	| EmailAddressAuthenticationCode
	| EmailAddressAuthenticationAppleId
	| EmailAddressAuthenticationGoogleId;

export type AuthorizationState =
	| AuthorizationStateWaitTdlibParameters
	| AuthorizationStateWaitPhoneNumber
	| AuthorizationStateWaitEmailAddress
	| AuthorizationStateWaitEmailCode
	| AuthorizationStateWaitCode
	| AuthorizationStateWaitOtherDeviceConfirmation
	| AuthorizationStateWaitRegistration
	| AuthorizationStateWaitPassword
	| AuthorizationStateReady
	| AuthorizationStateLoggingOut
	| AuthorizationStateClosing
	| AuthorizationStateClosed;

export type InputFile =
	| InputFileId
	| InputFileRemote
	| InputFileLocal
	| InputFileGenerated;

export type ThumbnailFormat =
	| ThumbnailFormatJpeg
	| ThumbnailFormatGif
	| ThumbnailFormatMpeg4
	| ThumbnailFormatPng
	| ThumbnailFormatTgs
	| ThumbnailFormatWebm
	| ThumbnailFormatWebp;

export type MaskPoint =
	| MaskPointForehead
	| MaskPointEyes
	| MaskPointMouth
	| MaskPointChin;

export type StickerFormat =
	| StickerFormatWebp
	| StickerFormatTgs
	| StickerFormatWebm;

export type StickerType =
	| StickerTypeRegular
	| StickerTypeMask
	| StickerTypeCustomEmoji;

export type PollType =
	| PollTypeRegular
	| PollTypeQuiz;

export type UserType =
	| UserTypeRegular
	| UserTypeDeleted
	| UserTypeBot
	| UserTypeUnknown;

export type InputChatPhoto =
	| InputChatPhotoPrevious
	| InputChatPhotoStatic
	| InputChatPhotoAnimation;

export type ChatMemberStatus =
	| ChatMemberStatusCreator
	| ChatMemberStatusAdministrator
	| ChatMemberStatusMember
	| ChatMemberStatusRestricted
	| ChatMemberStatusLeft
	| ChatMemberStatusBanned;

export type ChatMembersFilter =
	| ChatMembersFilterContacts
	| ChatMembersFilterAdministrators
	| ChatMembersFilterMembers
	| ChatMembersFilterMention
	| ChatMembersFilterRestricted
	| ChatMembersFilterBanned
	| ChatMembersFilterBots;

export type SupergroupMembersFilter =
	| SupergroupMembersFilterRecent
	| SupergroupMembersFilterContacts
	| SupergroupMembersFilterAdministrators
	| SupergroupMembersFilterSearch
	| SupergroupMembersFilterRestricted
	| SupergroupMembersFilterBanned
	| SupergroupMembersFilterMention
	| SupergroupMembersFilterBots;

export type SecretChatState =
	| SecretChatStatePending
	| SecretChatStateReady
	| SecretChatStateClosed;

export type MessageSender =
	| MessageSenderUser
	| MessageSenderChat;

export type MessageForwardOrigin =
	| MessageForwardOriginUser
	| MessageForwardOriginChat
	| MessageForwardOriginHiddenUser
	| MessageForwardOriginChannel
	| MessageForwardOriginMessageImport;

export type ReactionType =
	| ReactionTypeEmoji
	| ReactionTypeCustomEmoji;

export type MessageSendingState =
	| MessageSendingStatePending
	| MessageSendingStateFailed;

export type NotificationSettingsScope =
	| NotificationSettingsScopePrivateChats
	| NotificationSettingsScopeGroupChats
	| NotificationSettingsScopeChannelChats;

export type ChatType =
	| ChatTypePrivate
	| ChatTypeBasicGroup
	| ChatTypeSupergroup
	| ChatTypeSecret;

export type ChatList =
	| ChatListMain
	| ChatListArchive
	| ChatListFilter;

export type ChatSource =
	| ChatSourceMtprotoProxy
	| ChatSourcePublicServiceAnnouncement;

export type ChatAvailableReactions =
	| ChatAvailableReactionsAll
	| ChatAvailableReactionsSome;

export type PublicChatType =
	| PublicChatTypeHasUsername
	| PublicChatTypeIsLocationBased;

export type ChatActionBar =
	| ChatActionBarReportSpam
	| ChatActionBarReportUnrelatedLocation
	| ChatActionBarInviteMembers
	| ChatActionBarReportAddBlock
	| ChatActionBarAddContact
	| ChatActionBarSharePhoneNumber
	| ChatActionBarJoinRequest;

export type KeyboardButtonType =
	| KeyboardButtonTypeText
	| KeyboardButtonTypeRequestPhoneNumber
	| KeyboardButtonTypeRequestLocation
	| KeyboardButtonTypeRequestPoll
	| KeyboardButtonTypeWebApp;

export type InlineKeyboardButtonType =
	| InlineKeyboardButtonTypeUrl
	| InlineKeyboardButtonTypeLoginUrl
	| InlineKeyboardButtonTypeWebApp
	| InlineKeyboardButtonTypeCallback
	| InlineKeyboardButtonTypeCallbackWithPassword
	| InlineKeyboardButtonTypeCallbackGame
	| InlineKeyboardButtonTypeSwitchInline
	| InlineKeyboardButtonTypeBuy
	| InlineKeyboardButtonTypeUser;

export type ReplyMarkup =
	| ReplyMarkupRemoveKeyboard
	| ReplyMarkupForceReply
	| ReplyMarkupShowKeyboard
	| ReplyMarkupInlineKeyboard;

export type LoginUrlInfo =
	| LoginUrlInfoOpen
	| LoginUrlInfoRequestConfirmation;

export type RichText =
	| RichTextPlain
	| RichTextBold
	| RichTextItalic
	| RichTextUnderline
	| RichTextStrikethrough
	| RichTextFixed
	| RichTextUrl
	| RichTextEmailAddress
	| RichTextSubscript
	| RichTextSuperscript
	| RichTextMarked
	| RichTextPhoneNumber
	| RichTextIcon
	| RichTextReference
	| RichTextAnchor
	| RichTextAnchorLink
	| RichTexts;

export type PageBlockHorizontalAlignment =
	| PageBlockHorizontalAlignmentLeft
	| PageBlockHorizontalAlignmentCenter
	| PageBlockHorizontalAlignmentRight;

export type PageBlockVerticalAlignment =
	| PageBlockVerticalAlignmentTop
	| PageBlockVerticalAlignmentMiddle
	| PageBlockVerticalAlignmentBottom;

export type PageBlock =
	| PageBlockTitle
	| PageBlockSubtitle
	| PageBlockAuthorDate
	| PageBlockHeader
	| PageBlockSubheader
	| PageBlockKicker
	| PageBlockParagraph
	| PageBlockPreformatted
	| PageBlockFooter
	| PageBlockDivider
	| PageBlockAnchor
	| PageBlockList
	| PageBlockBlockQuote
	| PageBlockPullQuote
	| PageBlockAnimation
	| PageBlockAudio
	| PageBlockPhoto
	| PageBlockVideo
	| PageBlockVoiceNote
	| PageBlockCover
	| PageBlockEmbedded
	| PageBlockEmbeddedPost
	| PageBlockCollage
	| PageBlockSlideshow
	| PageBlockChatLink
	| PageBlockTable
	| PageBlockDetails
	| PageBlockRelatedArticles
	| PageBlockMap;

export type InputCredentials =
	| InputCredentialsSaved
	| InputCredentialsNew
	| InputCredentialsApplePay
	| InputCredentialsGooglePay;

export type PaymentProvider =
	| PaymentProviderSmartGlocal
	| PaymentProviderStripe
	| PaymentProviderOther;

export type InputInvoice =
	| InputInvoiceMessage
	| InputInvoiceName;

export type MessageExtendedMedia =
	| MessageExtendedMediaPreview
	| MessageExtendedMediaPhoto
	| MessageExtendedMediaVideo
	| MessageExtendedMediaUnsupported;

export type PassportElementType =
	| PassportElementTypePersonalDetails
	| PassportElementTypePassport
	| PassportElementTypeDriverLicense
	| PassportElementTypeIdentityCard
	| PassportElementTypeInternalPassport
	| PassportElementTypeAddress
	| PassportElementTypeUtilityBill
	| PassportElementTypeBankStatement
	| PassportElementTypeRentalAgreement
	| PassportElementTypePassportRegistration
	| PassportElementTypeTemporaryRegistration
	| PassportElementTypePhoneNumber
	| PassportElementTypeEmailAddress;

export type PassportElement =
	| PassportElementPersonalDetails
	| PassportElementPassport
	| PassportElementDriverLicense
	| PassportElementIdentityCard
	| PassportElementInternalPassport
	| PassportElementAddress
	| PassportElementUtilityBill
	| PassportElementBankStatement
	| PassportElementRentalAgreement
	| PassportElementPassportRegistration
	| PassportElementTemporaryRegistration
	| PassportElementPhoneNumber
	| PassportElementEmailAddress;

export type InputPassportElement =
	| InputPassportElementPersonalDetails
	| InputPassportElementPassport
	| InputPassportElementDriverLicense
	| InputPassportElementIdentityCard
	| InputPassportElementInternalPassport
	| InputPassportElementAddress
	| InputPassportElementUtilityBill
	| InputPassportElementBankStatement
	| InputPassportElementRentalAgreement
	| InputPassportElementPassportRegistration
	| InputPassportElementTemporaryRegistration
	| InputPassportElementPhoneNumber
	| InputPassportElementEmailAddress;

export type PassportElementErrorSource =
	| PassportElementErrorSourceUnspecified
	| PassportElementErrorSourceDataField
	| PassportElementErrorSourceFrontSide
	| PassportElementErrorSourceReverseSide
	| PassportElementErrorSourceSelfie
	| PassportElementErrorSourceTranslationFile
	| PassportElementErrorSourceTranslationFiles
	| PassportElementErrorSourceFile
	| PassportElementErrorSourceFiles;

export type InputPassportElementErrorSource =
	| InputPassportElementErrorSourceUnspecified
	| InputPassportElementErrorSourceDataField
	| InputPassportElementErrorSourceFrontSide
	| InputPassportElementErrorSourceReverseSide
	| InputPassportElementErrorSourceSelfie
	| InputPassportElementErrorSourceTranslationFile
	| InputPassportElementErrorSourceTranslationFiles
	| InputPassportElementErrorSourceFile
	| InputPassportElementErrorSourceFiles;

export type MessageContent =
	| MessageText
	| MessageAnimation
	| MessageAudio
	| MessageDocument
	| MessagePhoto
	| MessageExpiredPhoto
	| MessageSticker
	| MessageVideo
	| MessageExpiredVideo
	| MessageVideoNote
	| MessageVoiceNote
	| MessageLocation
	| MessageVenue
	| MessageContact
	| MessageAnimatedEmoji
	| MessageDice
	| MessageGame
	| MessagePoll
	| MessageInvoice
	| MessageCall
	| MessageVideoChatScheduled
	| MessageVideoChatStarted
	| MessageVideoChatEnded
	| MessageInviteVideoChatParticipants
	| MessageBasicGroupChatCreate
	| MessageSupergroupChatCreate
	| MessageChatChangeTitle
	| MessageChatChangePhoto
	| MessageChatDeletePhoto
	| MessageChatAddMembers
	| MessageChatJoinByLink
	| MessageChatJoinByRequest
	| MessageChatDeleteMember
	| MessageChatUpgradeTo
	| MessageChatUpgradeFrom
	| MessagePinMessage
	| MessageScreenshotTaken
	| MessageChatSetTheme
	| MessageChatSetTtl
	| MessageCustomServiceAction
	| MessageGameScore
	| MessagePaymentSuccessful
	| MessagePaymentSuccessfulBot
	| MessageGiftedPremium
	| MessageContactRegistered
	| MessageWebsiteConnected
	| MessageWebAppDataSent
	| MessageWebAppDataReceived
	| MessagePassportDataSent
	| MessagePassportDataReceived
	| MessageProximityAlertTriggered
	| MessageUnsupported;

export type TextEntityType =
	| TextEntityTypeMention
	| TextEntityTypeHashtag
	| TextEntityTypeCashtag
	| TextEntityTypeBotCommand
	| TextEntityTypeUrl
	| TextEntityTypeEmailAddress
	| TextEntityTypePhoneNumber
	| TextEntityTypeBankCardNumber
	| TextEntityTypeBold
	| TextEntityTypeItalic
	| TextEntityTypeUnderline
	| TextEntityTypeStrikethrough
	| TextEntityTypeSpoiler
	| TextEntityTypeCode
	| TextEntityTypePre
	| TextEntityTypePreCode
	| TextEntityTypeTextUrl
	| TextEntityTypeMentionName
	| TextEntityTypeCustomEmoji
	| TextEntityTypeMediaTimestamp;

export type MessageSchedulingState =
	| MessageSchedulingStateSendAtDate
	| MessageSchedulingStateSendWhenOnline;

export type InputMessageContent =
	| InputMessageText
	| InputMessageAnimation
	| InputMessageAudio
	| InputMessageDocument
	| InputMessagePhoto
	| InputMessageSticker
	| InputMessageVideo
	| InputMessageVideoNote
	| InputMessageVoiceNote
	| InputMessageLocation
	| InputMessageVenue
	| InputMessageContact
	| InputMessageDice
	| InputMessageGame
	| InputMessageInvoice
	| InputMessagePoll
	| InputMessageForwarded;

export type SearchMessagesFilter =
	| SearchMessagesFilterEmpty
	| SearchMessagesFilterAnimation
	| SearchMessagesFilterAudio
	| SearchMessagesFilterDocument
	| SearchMessagesFilterPhoto
	| SearchMessagesFilterVideo
	| SearchMessagesFilterVoiceNote
	| SearchMessagesFilterPhotoAndVideo
	| SearchMessagesFilterUrl
	| SearchMessagesFilterChatPhoto
	| SearchMessagesFilterVideoNote
	| SearchMessagesFilterVoiceAndVideoNote
	| SearchMessagesFilterMention
	| SearchMessagesFilterUnreadMention
	| SearchMessagesFilterUnreadReaction
	| SearchMessagesFilterFailedToSend
	| SearchMessagesFilterPinned;

export type ChatAction =
	| ChatActionTyping
	| ChatActionRecordingVideo
	| ChatActionUploadingVideo
	| ChatActionRecordingVoiceNote
	| ChatActionUploadingVoiceNote
	| ChatActionUploadingPhoto
	| ChatActionUploadingDocument
	| ChatActionChoosingSticker
	| ChatActionChoosingLocation
	| ChatActionChoosingContact
	| ChatActionStartPlayingGame
	| ChatActionRecordingVideoNote
	| ChatActionUploadingVideoNote
	| ChatActionWatchingAnimations
	| ChatActionCancel;

export type UserStatus =
	| UserStatusEmpty
	| UserStatusOnline
	| UserStatusOffline
	| UserStatusRecently
	| UserStatusLastWeek
	| UserStatusLastMonth;

export type CallDiscardReason =
	| CallDiscardReasonEmpty
	| CallDiscardReasonMissed
	| CallDiscardReasonDeclined
	| CallDiscardReasonDisconnected
	| CallDiscardReasonHungUp;

export type CallServerType =
	| CallServerTypeTelegramReflector
	| CallServerTypeWebrtc;

export type CallState =
	| CallStatePending
	| CallStateExchangingKeys
	| CallStateReady
	| CallStateHangingUp
	| CallStateDiscarded
	| CallStateError;

export type GroupCallVideoQuality =
	| GroupCallVideoQualityThumbnail
	| GroupCallVideoQualityMedium
	| GroupCallVideoQualityFull;

export type CallProblem =
	| CallProblemEcho
	| CallProblemNoise
	| CallProblemInterruptions
	| CallProblemDistortedSpeech
	| CallProblemSilentLocal
	| CallProblemSilentRemote
	| CallProblemDropped
	| CallProblemDistortedVideo
	| CallProblemPixelatedVideo;

export type DiceStickers =
	| DiceStickersRegular
	| DiceStickersSlotMachine;

export type SpeechRecognitionResult =
	| SpeechRecognitionResultPending
	| SpeechRecognitionResultText
	| SpeechRecognitionResultError;

export type InputInlineQueryResult =
	| InputInlineQueryResultAnimation
	| InputInlineQueryResultArticle
	| InputInlineQueryResultAudio
	| InputInlineQueryResultContact
	| InputInlineQueryResultDocument
	| InputInlineQueryResultGame
	| InputInlineQueryResultLocation
	| InputInlineQueryResultPhoto
	| InputInlineQueryResultSticker
	| InputInlineQueryResultVenue
	| InputInlineQueryResultVideo
	| InputInlineQueryResultVoiceNote;

export type InlineQueryResult =
	| InlineQueryResultArticle
	| InlineQueryResultContact
	| InlineQueryResultLocation
	| InlineQueryResultVenue
	| InlineQueryResultGame
	| InlineQueryResultAnimation
	| InlineQueryResultAudio
	| InlineQueryResultDocument
	| InlineQueryResultPhoto
	| InlineQueryResultSticker
	| InlineQueryResultVideo
	| InlineQueryResultVoiceNote;

export type CallbackQueryPayload =
	| CallbackQueryPayloadData
	| CallbackQueryPayloadDataWithPassword
	| CallbackQueryPayloadGame;

export type ChatEventAction =
	| ChatEventMessageEdited
	| ChatEventMessageDeleted
	| ChatEventMessagePinned
	| ChatEventMessageUnpinned
	| ChatEventPollStopped
	| ChatEventMemberJoined
	| ChatEventMemberJoinedByInviteLink
	| ChatEventMemberJoinedByRequest
	| ChatEventMemberInvited
	| ChatEventMemberLeft
	| ChatEventMemberPromoted
	| ChatEventMemberRestricted
	| ChatEventAvailableReactionsChanged
	| ChatEventDescriptionChanged
	| ChatEventLinkedChatChanged
	| ChatEventLocationChanged
	| ChatEventMessageTtlChanged
	| ChatEventPermissionsChanged
	| ChatEventPhotoChanged
	| ChatEventSlowModeDelayChanged
	| ChatEventStickerSetChanged
	| ChatEventTitleChanged
	| ChatEventUsernameChanged
	| ChatEventHasProtectedContentToggled
	| ChatEventInvitesToggled
	| ChatEventIsAllHistoryAvailableToggled
	| ChatEventSignMessagesToggled
	| ChatEventInviteLinkEdited
	| ChatEventInviteLinkRevoked
	| ChatEventInviteLinkDeleted
	| ChatEventVideoChatCreated
	| ChatEventVideoChatEnded
	| ChatEventVideoChatMuteNewParticipantsToggled
	| ChatEventVideoChatParticipantIsMutedToggled
	| ChatEventVideoChatParticipantVolumeLevelChanged;

export type LanguagePackStringValue =
	| LanguagePackStringValueOrdinary
	| LanguagePackStringValuePluralized
	| LanguagePackStringValueDeleted;

export type PremiumLimitType =
	| PremiumLimitTypeSupergroupCount
	| PremiumLimitTypePinnedChatCount
	| PremiumLimitTypeCreatedPublicChatCount
	| PremiumLimitTypeSavedAnimationCount
	| PremiumLimitTypeFavoriteStickerCount
	| PremiumLimitTypeChatFilterCount
	| PremiumLimitTypeChatFilterChosenChatCount
	| PremiumLimitTypePinnedArchivedChatCount
	| PremiumLimitTypeCaptionLength
	| PremiumLimitTypeBioLength;

export type PremiumFeature =
	| PremiumFeatureIncreasedLimits
	| PremiumFeatureIncreasedUploadFileSize
	| PremiumFeatureImprovedDownloadSpeed
	| PremiumFeatureVoiceRecognition
	| PremiumFeatureDisabledAds
	| PremiumFeatureUniqueReactions
	| PremiumFeatureUniqueStickers
	| PremiumFeatureCustomEmoji
	| PremiumFeatureAdvancedChatManagement
	| PremiumFeatureProfileBadge
	| PremiumFeatureEmojiStatus
	| PremiumFeatureAnimatedProfilePhoto
	| PremiumFeatureAppIcons;

export type PremiumSource =
	| PremiumSourceLimitExceeded
	| PremiumSourceFeature
	| PremiumSourceLink
	| PremiumSourceSettings;

export type StorePaymentPurpose =
	| StorePaymentPurposePremiumSubscription
	| StorePaymentPurposeGiftedPremium;

export type DeviceToken =
	| DeviceTokenFirebaseCloudMessaging
	| DeviceTokenApplePush
	| DeviceTokenApplePushVoIp
	| DeviceTokenWindowsPush
	| DeviceTokenMicrosoftPush
	| DeviceTokenMicrosoftPushVoIp
	| DeviceTokenWebPush
	| DeviceTokenSimplePush
	| DeviceTokenUbuntuPush
	| DeviceTokenBlackBerryPush
	| DeviceTokenTizenPush;

export type BackgroundFill =
	| BackgroundFillSolid
	| BackgroundFillGradient
	| BackgroundFillFreeformGradient;

export type BackgroundType =
	| BackgroundTypeWallpaper
	| BackgroundTypePattern
	| BackgroundTypeFill;

export type InputBackground =
	| InputBackgroundLocal
	| InputBackgroundRemote;

export type CanTransferOwnershipResult =
	| CanTransferOwnershipResultOk
	| CanTransferOwnershipResultPasswordNeeded
	| CanTransferOwnershipResultPasswordTooFresh
	| CanTransferOwnershipResultSessionTooFresh;

export type CheckChatUsernameResult =
	| CheckChatUsernameResultOk
	| CheckChatUsernameResultUsernameInvalid
	| CheckChatUsernameResultUsernameOccupied
	| CheckChatUsernameResultPublicChatsTooMuch
	| CheckChatUsernameResultPublicGroupsUnavailable;

export type CheckStickerSetNameResult =
	| CheckStickerSetNameResultOk
	| CheckStickerSetNameResultNameInvalid
	| CheckStickerSetNameResultNameOccupied;

export type ResetPasswordResult =
	| ResetPasswordResultOk
	| ResetPasswordResultPending
	| ResetPasswordResultDeclined;

export type MessageFileType =
	| MessageFileTypePrivate
	| MessageFileTypeGroup
	| MessageFileTypeUnknown;

export type PushMessageContent =
	| PushMessageContentHidden
	| PushMessageContentAnimation
	| PushMessageContentAudio
	| PushMessageContentContact
	| PushMessageContentContactRegistered
	| PushMessageContentDocument
	| PushMessageContentGame
	| PushMessageContentGameScore
	| PushMessageContentInvoice
	| PushMessageContentLocation
	| PushMessageContentPhoto
	| PushMessageContentPoll
	| PushMessageContentScreenshotTaken
	| PushMessageContentSticker
	| PushMessageContentText
	| PushMessageContentVideo
	| PushMessageContentVideoNote
	| PushMessageContentVoiceNote
	| PushMessageContentBasicGroupChatCreate
	| PushMessageContentChatAddMembers
	| PushMessageContentChatChangePhoto
	| PushMessageContentChatChangeTitle
	| PushMessageContentChatSetTheme
	| PushMessageContentChatDeleteMember
	| PushMessageContentChatJoinByLink
	| PushMessageContentChatJoinByRequest
	| PushMessageContentRecurringPayment
	| PushMessageContentMessageForwards
	| PushMessageContentMediaAlbum;

export type NotificationType =
	| NotificationTypeNewMessage
	| NotificationTypeNewSecretChat
	| NotificationTypeNewCall
	| NotificationTypeNewPushMessage;

export type NotificationGroupType =
	| NotificationGroupTypeMessages
	| NotificationGroupTypeMentions
	| NotificationGroupTypeSecretChat
	| NotificationGroupTypeCalls;

export type OptionValue =
	| OptionValueBoolean
	| OptionValueEmpty
	| OptionValueInteger
	| OptionValueString;

export type JsonValue =
	| JsonValueNull
	| JsonValueBoolean
	| JsonValueNumber
	| JsonValueString
	| JsonValueArray
	| JsonValueObject;

export type UserPrivacySettingRule =
	| UserPrivacySettingRuleAllowAll
	| UserPrivacySettingRuleAllowContacts
	| UserPrivacySettingRuleAllowUsers
	| UserPrivacySettingRuleAllowChatMembers
	| UserPrivacySettingRuleRestrictAll
	| UserPrivacySettingRuleRestrictContacts
	| UserPrivacySettingRuleRestrictUsers
	| UserPrivacySettingRuleRestrictChatMembers;

export type UserPrivacySetting =
	| UserPrivacySettingShowStatus
	| UserPrivacySettingShowProfilePhoto
	| UserPrivacySettingShowLinkInForwardedMessages
	| UserPrivacySettingShowPhoneNumber
	| UserPrivacySettingAllowChatInvites
	| UserPrivacySettingAllowCalls
	| UserPrivacySettingAllowPeerToPeerCalls
	| UserPrivacySettingAllowFindingByPhoneNumber
	| UserPrivacySettingAllowPrivateVoiceAndVideoNoteMessages;

export type SessionType =
	| SessionTypeAndroid
	| SessionTypeApple
	| SessionTypeBrave
	| SessionTypeChrome
	| SessionTypeEdge
	| SessionTypeFirefox
	| SessionTypeIpad
	| SessionTypeIphone
	| SessionTypeLinux
	| SessionTypeMac
	| SessionTypeOpera
	| SessionTypeSafari
	| SessionTypeUbuntu
	| SessionTypeUnknown
	| SessionTypeVivaldi
	| SessionTypeWindows
	| SessionTypeXbox;

export type ChatReportReason =
	| ChatReportReasonSpam
	| ChatReportReasonViolence
	| ChatReportReasonPornography
	| ChatReportReasonChildAbuse
	| ChatReportReasonCopyright
	| ChatReportReasonUnrelatedLocation
	| ChatReportReasonFake
	| ChatReportReasonIllegalDrugs
	| ChatReportReasonPersonalDetails
	| ChatReportReasonCustom;

export type TargetChat =
	| TargetChatCurrent
	| TargetChatChosen
	| TargetChatInternalLink;

export type InternalLinkType =
	| InternalLinkTypeActiveSessions
	| InternalLinkTypeAttachmentMenuBot
	| InternalLinkTypeAuthenticationCode
	| InternalLinkTypeBackground
	| InternalLinkTypeBotStart
	| InternalLinkTypeBotStartInGroup
	| InternalLinkTypeBotAddToChannel
	| InternalLinkTypeChangePhoneNumber
	| InternalLinkTypeChatInvite
	| InternalLinkTypeFilterSettings
	| InternalLinkTypeGame
	| InternalLinkTypeInstantView
	| InternalLinkTypeInvoice
	| InternalLinkTypeLanguagePack
	| InternalLinkTypeLanguageSettings
	| InternalLinkTypeMessage
	| InternalLinkTypeMessageDraft
	| InternalLinkTypePassportDataRequest
	| InternalLinkTypePhoneNumberConfirmation
	| InternalLinkTypePremiumFeatures
	| InternalLinkTypePrivacyAndSecuritySettings
	| InternalLinkTypeProxy
	| InternalLinkTypePublicChat
	| InternalLinkTypeQrCodeAuthentication
	| InternalLinkTypeRestorePurchases
	| InternalLinkTypeSettings
	| InternalLinkTypeStickerSet
	| InternalLinkTypeTheme
	| InternalLinkTypeThemeSettings
	| InternalLinkTypeUnknownDeepLink
	| InternalLinkTypeUnsupportedProxy
	| InternalLinkTypeUserPhoneNumber
	| InternalLinkTypeVideoChat;

export type FileType =
	| FileTypeNone
	| FileTypeAnimation
	| FileTypeAudio
	| FileTypeDocument
	| FileTypeNotificationSound
	| FileTypePhoto
	| FileTypeProfilePhoto
	| FileTypeSecret
	| FileTypeSecretThumbnail
	| FileTypeSecure
	| FileTypeSticker
	| FileTypeThumbnail
	| FileTypeUnknown
	| FileTypeVideo
	| FileTypeVideoNote
	| FileTypeVoiceNote
	| FileTypeWallpaper;

export type NetworkType =
	| NetworkTypeNone
	| NetworkTypeMobile
	| NetworkTypeMobileRoaming
	| NetworkTypeWiFi
	| NetworkTypeOther;

export type NetworkStatisticsEntry =
	| NetworkStatisticsEntryFile
	| NetworkStatisticsEntryCall;

export type ConnectionState =
	| ConnectionStateWaitingForNetwork
	| ConnectionStateConnectingToProxy
	| ConnectionStateConnecting
	| ConnectionStateUpdating
	| ConnectionStateReady;

export type TopChatCategory =
	| TopChatCategoryUsers
	| TopChatCategoryBots
	| TopChatCategoryGroups
	| TopChatCategoryChannels
	| TopChatCategoryInlineBots
	| TopChatCategoryCalls
	| TopChatCategoryForwardChats;

export type TMeUrlType =
	| TMeUrlTypeUser
	| TMeUrlTypeSupergroup
	| TMeUrlTypeChatInvite
	| TMeUrlTypeStickerSet;

export type SuggestedAction =
	| SuggestedActionEnableArchiveAndMuteNewChats
	| SuggestedActionCheckPassword
	| SuggestedActionCheckPhoneNumber
	| SuggestedActionViewChecksHint
	| SuggestedActionConvertToBroadcastGroup
	| SuggestedActionSetPassword;

export type TextParseMode =
	| TextParseModeMarkdown
	| TextParseModeHtml;

export type ProxyType =
	| ProxyTypeSocks5
	| ProxyTypeHttp
	| ProxyTypeMtproto;

export type StatisticalGraph =
	| StatisticalGraphData
	| StatisticalGraphAsync
	| StatisticalGraphError;

export type ChatStatistics =
	| ChatStatisticsSupergroup
	| ChatStatisticsChannel;

export type VectorPathCommand =
	| VectorPathCommandLine
	| VectorPathCommandCubicBezierCurve;

export type BotCommandScope =
	| BotCommandScopeDefault
	| BotCommandScopeAllPrivateChats
	| BotCommandScopeAllGroupChats
	| BotCommandScopeAllChatAdministrators
	| BotCommandScopeChat
	| BotCommandScopeChatAdministrators
	| BotCommandScopeChatMember;

export type Update =
	| UpdateAuthorizationState
	| UpdateNewMessage
	| UpdateMessageSendAcknowledged
	| UpdateMessageSendSucceeded
	| UpdateMessageSendFailed
	| UpdateMessageContent
	| UpdateMessageEdited
	| UpdateMessageIsPinned
	| UpdateMessageInteractionInfo
	| UpdateMessageContentOpened
	| UpdateMessageMentionRead
	| UpdateMessageUnreadReactions
	| UpdateMessageLiveLocationViewed
	| UpdateNewChat
	| UpdateChatTitle
	| UpdateChatPhoto
	| UpdateChatPermissions
	| UpdateChatLastMessage
	| UpdateChatPosition
	| UpdateChatReadInbox
	| UpdateChatReadOutbox
	| UpdateChatActionBar
	| UpdateChatAvailableReactions
	| UpdateChatDraftMessage
	| UpdateChatMessageSender
	| UpdateChatMessageTtl
	| UpdateChatNotificationSettings
	| UpdateChatPendingJoinRequests
	| UpdateChatReplyMarkup
	| UpdateChatTheme
	| UpdateChatUnreadMentionCount
	| UpdateChatUnreadReactionCount
	| UpdateChatVideoChat
	| UpdateChatDefaultDisableNotification
	| UpdateChatHasProtectedContent
	| UpdateChatHasScheduledMessages
	| UpdateChatIsBlocked
	| UpdateChatIsMarkedAsUnread
	| UpdateChatFilters
	| UpdateChatOnlineMemberCount
	| UpdateScopeNotificationSettings
	| UpdateNotification
	| UpdateNotificationGroup
	| UpdateActiveNotifications
	| UpdateHavePendingNotifications
	| UpdateDeleteMessages
	| UpdateChatAction
	| UpdateUserStatus
	| UpdateUser
	| UpdateBasicGroup
	| UpdateSupergroup
	| UpdateSecretChat
	| UpdateUserFullInfo
	| UpdateBasicGroupFullInfo
	| UpdateSupergroupFullInfo
	| UpdateServiceNotification
	| UpdateFile
	| UpdateFileGenerationStart
	| UpdateFileGenerationStop
	| UpdateFileDownloads
	| UpdateFileAddedToDownloads
	| UpdateFileDownload
	| UpdateFileRemovedFromDownloads
	| UpdateCall
	| UpdateGroupCall
	| UpdateGroupCallParticipant
	| UpdateNewCallSignalingData
	| UpdateUserPrivacySettingRules
	| UpdateUnreadMessageCount
	| UpdateUnreadChatCount
	| UpdateOption
	| UpdateStickerSet
	| UpdateInstalledStickerSets
	| UpdateTrendingStickerSets
	| UpdateRecentStickers
	| UpdateFavoriteStickers
	| UpdateSavedAnimations
	| UpdateSavedNotificationSounds
	| UpdateSelectedBackground
	| UpdateChatThemes
	| UpdateLanguagePackStrings
	| UpdateConnectionState
	| UpdateTermsOfService
	| UpdateUsersNearby
	| UpdateAttachmentMenuBots
	| UpdateWebAppMessageSent
	| UpdateActiveEmojiReactions
	| UpdateDefaultReactionType
	| UpdateDiceEmojis
	| UpdateAnimatedEmojiMessageClicked
	| UpdateAnimationSearchParameters
	| UpdateSuggestedActions
	| UpdateNewInlineQuery
	| UpdateNewChosenInlineResult
	| UpdateNewCallbackQuery
	| UpdateNewInlineCallbackQuery
	| UpdateNewShippingQuery
	| UpdateNewPreCheckoutQuery
	| UpdateNewCustomEvent
	| UpdateNewCustomQuery
	| UpdatePoll
	| UpdatePollAnswer
	| UpdateChatMember
	| UpdateNewChatJoinRequest;

export type LogStream =
	| LogStreamDefault
	| LogStreamFile
	| LogStreamEmpty;

/**
Returns the current authorization state; this is an offline request. For informational purposes only. Use
updateAuthorizationState instead to maintain the current authorization state. Can be called before initialization.
Request type for {@link Tdjson#getAuthorizationState}.
*/
export interface GetAuthorizationState {
	'@type': 'getAuthorizationState';

}

/**
Sets the parameters for TDLib initialization. Works only when the current authorization state is
authorizationStateWaitTdlibParameters.
Request type for {@link Tdjson#setTdlibParameters}.
*/
export interface SetTdlibParameters {
	'@type': 'setTdlibParameters';
	/**
Pass true to use Telegram test environment instead of the production environment.
*/
	use_test_dc?: boolean;
	/**
The path to the directory for the persistent database; if empty, the current working directory will be used.
*/
	database_directory: string;
	/**
The path to the directory for storing files; if empty, database_directory will be used.
*/
	files_directory: string;
	/**
Encryption key for the database.
*/
	database_encryption_key: string;
	/**
Pass true to keep information about downloaded and uploaded files between application restarts.
*/
	use_file_database?: boolean;
	/**
Pass true to keep cache of users, basic groups, supergroups, channels and secret chats between restarts. Implies
use_file_database.
*/
	use_chat_info_database?: boolean;
	/**
Pass true to keep cache of chats and messages between restarts. Implies use_chat_info_database.
*/
	use_message_database?: boolean;
	/**
Pass true to enable support for secret chats.
*/
	use_secret_chats?: boolean;
	/**
Application identifier for Telegram API access, which can be obtained at https://my.telegram.org.
*/
	api_id: number;
	/**
Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org.
*/
	api_hash: string;
	/**
IETF language tag of the user's operating system language; must be non-empty.
*/
	system_language_code: string;
	/**
Model of the device the application is being run on; must be non-empty.
*/
	device_model: string;
	/**
Version of the operating system the application is being run on. If empty, the version is automatically detected by
TDLib.
*/
	system_version: string;
	/**
Application version; must be non-empty.
*/
	application_version: string;
	/**
Pass true to automatically delete old files in background.
*/
	enable_storage_optimizer?: boolean;
	/**
Pass true to ignore original file names for downloaded files. Otherwise, downloaded files are saved under names as close
as possible to the original name.
*/
	ignore_file_names?: boolean;
}

/**
Sets the phone number of the user and sends an authentication code to the user. Works only when the current
authorization state is authorizationStateWaitPhoneNumber, or if there is no pending authentication query and the current
authorization state is authorizationStateWaitCode, authorizationStateWaitRegistration, or
authorizationStateWaitPassword.
Request type for {@link Tdjson#setAuthenticationPhoneNumber}.
*/
export interface SetAuthenticationPhoneNumber {
	'@type': 'setAuthenticationPhoneNumber';
	/**
The phone number of the user, in international format.
*/
	phone_number: string;
	/**
Settings for the authentication of the user's phone number; pass null to use default settings.
*/
	settings: PhoneNumberAuthenticationSettings;
}

/**
Sets the email address of the user and sends an authentication code to the email address. Works only when the current
authorization state is authorizationStateWaitEmailAddress.
Request type for {@link Tdjson#setAuthenticationEmailAddress}.
*/
export interface SetAuthenticationEmailAddress {
	'@type': 'setAuthenticationEmailAddress';
	/**
The email address of the user.
*/
	email_address: string;
}

/**
Resends an authentication code to the user. Works only when the current authorization state is
authorizationStateWaitCode, the next_code_type of the result is not null and the server-specified timeout has passed, or
when the current authorization state is authorizationStateWaitEmailCode.
Request type for {@link Tdjson#resendAuthenticationCode}.
*/
export interface ResendAuthenticationCode {
	'@type': 'resendAuthenticationCode';

}

/**
Checks the authentication of a email address. Works only when the current authorization state is
authorizationStateWaitEmailCode.
Request type for {@link Tdjson#checkAuthenticationEmailCode}.
*/
export interface CheckAuthenticationEmailCode {
	'@type': 'checkAuthenticationEmailCode';
	/**
Email address authentication to check.
*/
	code: EmailAddressAuthentication;
}

/**
Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode.
Request type for {@link Tdjson#checkAuthenticationCode}.
*/
export interface CheckAuthenticationCode {
	'@type': 'checkAuthenticationCode';
	/**
Authentication code to check.
*/
	code: string;
}

/**
Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current
authorization state is authorizationStateWaitPhoneNumber, or if there is no pending authentication query and the current
authorization state is authorizationStateWaitCode, authorizationStateWaitRegistration, or
authorizationStateWaitPassword.
Request type for {@link Tdjson#requestQrCodeAuthentication}.
*/
export interface RequestQrCodeAuthentication {
	'@type': 'requestQrCodeAuthentication';
	/**
List of user identifiers of other users currently using the application.
*/
	other_user_ids: number[];
}

/**
Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration.
Request type for {@link Tdjson#registerUser}.
*/
export interface RegisterUser {
	'@type': 'registerUser';
	/**
The first name of the user; 1-64 characters.
*/
	first_name: string;
	/**
The last name of the user; 0-64 characters.
*/
	last_name: string;
}

/**
Checks the 2-step verification password for correctness. Works only when the current authorization state is
authorizationStateWaitPassword.
Request type for {@link Tdjson#checkAuthenticationPassword}.
*/
export interface CheckAuthenticationPassword {
	'@type': 'checkAuthenticationPassword';
	/**
The 2-step verification password to check.
*/
	password: string;
}

/**
Requests to send a 2-step verification password recovery code to an email address that was previously set up. Works only
when the current authorization state is authorizationStateWaitPassword.
Request type for {@link Tdjson#requestAuthenticationPasswordRecovery}.
*/
export interface RequestAuthenticationPasswordRecovery {
	'@type': 'requestAuthenticationPasswordRecovery';

}

/**
Checks whether a 2-step verification password recovery code sent to an email address is valid. Works only when the
current authorization state is authorizationStateWaitPassword.
Request type for {@link Tdjson#checkAuthenticationPasswordRecoveryCode}.
*/
export interface CheckAuthenticationPasswordRecoveryCode {
	'@type': 'checkAuthenticationPasswordRecoveryCode';
	/**
Recovery code to check.
*/
	recovery_code: string;
}

/**
Recovers the 2-step verification password with a password recovery code sent to an email address that was previously set
up. Works only when the current authorization state is authorizationStateWaitPassword.
Request type for {@link Tdjson#recoverAuthenticationPassword}.
*/
export interface RecoverAuthenticationPassword {
	'@type': 'recoverAuthenticationPassword';
	/**
Recovery code to check.
*/
	recovery_code: string;
	/**
New 2-step verification password of the user; may be empty to remove the password.
*/
	new_password: string;
	/**
New password hint; may be empty.
*/
	new_hint: string;
}

/**
Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is
authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to
log in.
Request type for {@link Tdjson#checkAuthenticationBotToken}.
*/
export interface CheckAuthenticationBotToken {
	'@type': 'checkAuthenticationBotToken';
	/**
The bot token.
*/
	token: string;
}

/**
Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be
destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent.
Request type for {@link Tdjson#logOut}.
*/
export interface LogOut {
	'@type': 'logOut';

}

/**
Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes,
updateAuthorizationState with authorizationStateClosed will be sent. Can be called before initialization.
Request type for {@link Tdjson#close}.
*/
export interface Close {
	'@type': 'close';

}

/**
Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in
the list of all active sessions. All local data will be destroyed. After the destruction completes
updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization.
Request type for {@link Tdjson#destroy}.
*/
export interface Destroy {
	'@type': 'destroy';

}

/**
Confirms QR code authentication on another device. Returns created session on success.
Request type for {@link Tdjson#confirmQrCodeAuthentication}.
*/
export interface ConfirmQrCodeAuthentication {
	'@type': 'confirmQrCodeAuthentication';
	/**
A link from a QR code. The link must be scanned by the in-app camera.
*/
	link: string;
}

/**
Returns all updates needed to restore current TDLib state, i.e. all actual
UpdateAuthorizationState/UpdateUser/UpdateNewChat and others. This is especially useful if TDLib is run in a separate
process. Can be called before initialization.
Request type for {@link Tdjson#getCurrentState}.
*/
export interface GetCurrentState {
	'@type': 'getCurrentState';

}

/**
Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain.
Request type for {@link Tdjson#setDatabaseEncryptionKey}.
*/
export interface SetDatabaseEncryptionKey {
	'@type': 'setDatabaseEncryptionKey';
	/**
New encryption key.
*/
	new_encryption_key: string;
}

/**
Returns the current state of 2-step verification.
Request type for {@link Tdjson#getPasswordState}.
*/
export interface GetPasswordState {
	'@type': 'getPasswordState';

}

/**
Changes the 2-step verification password for the current user. If a new recovery email address is specified, then the
change will not be applied until the new recovery email address is confirmed.
Request type for {@link Tdjson#setPassword}.
*/
export interface SetPassword {
	'@type': 'setPassword';
	/**
Previous 2-step verification password of the user.
*/
	old_password: string;
	/**
New 2-step verification password of the user; may be empty to remove the password.
*/
	new_password: string;
	/**
New password hint; may be empty.
*/
	new_hint: string;
	/**
Pass true to change also the recovery email address.
*/
	set_recovery_email_address?: boolean;
	/**
New recovery email address; may be empty.
*/
	new_recovery_email_address: string;
}

/**
Changes the login email address of the user. The change will not be applied until the new login email address is
confirmed with `checkLoginEmailAddressCode`. To use Apple ID/Google ID instead of a email address, call
`checkLoginEmailAddressCode` directly.
Request type for {@link Tdjson#setLoginEmailAddress}.
*/
export interface SetLoginEmailAddress {
	'@type': 'setLoginEmailAddress';
	/**
New login email address.
*/
	new_login_email_address: string;
}

/**
Resends the login email address verification code.
Request type for {@link Tdjson#resendLoginEmailAddressCode}.
*/
export interface ResendLoginEmailAddressCode {
	'@type': 'resendLoginEmailAddressCode';

}

/**
Checks the login email address authentication.
Request type for {@link Tdjson#checkLoginEmailAddressCode}.
*/
export interface CheckLoginEmailAddressCode {
	'@type': 'checkLoginEmailAddressCode';
	/**
Email address authentication to check.
*/
	code: EmailAddressAuthentication;
}

/**
Returns a 2-step verification recovery email address that was previously set up. This method can be used to verify a
password provided by the user.
Request type for {@link Tdjson#getRecoveryEmailAddress}.
*/
export interface GetRecoveryEmailAddress {
	'@type': 'getRecoveryEmailAddress';
	/**
The 2-step verification password for the current user.
*/
	password: string;
}

/**
Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then
the change will not be applied until the new recovery email address is confirmed. If new_recovery_email_address is the
same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting
for an email confirmation.
Request type for {@link Tdjson#setRecoveryEmailAddress}.
*/
export interface SetRecoveryEmailAddress {
	'@type': 'setRecoveryEmailAddress';
	/**
The 2-step verification password of the current user.
*/
	password: string;
	/**
New recovery email address.
*/
	new_recovery_email_address: string;
}

/**
Checks the 2-step verification recovery email address verification code.
Request type for {@link Tdjson#checkRecoveryEmailAddressCode}.
*/
export interface CheckRecoveryEmailAddressCode {
	'@type': 'checkRecoveryEmailAddressCode';
	/**
Verification code to check.
*/
	code: string;
}

/**
Resends the 2-step verification recovery email address verification code.
Request type for {@link Tdjson#resendRecoveryEmailAddressCode}.
*/
export interface ResendRecoveryEmailAddressCode {
	'@type': 'resendRecoveryEmailAddressCode';

}

/**
Requests to send a 2-step verification password recovery code to an email address that was previously set up.
Request type for {@link Tdjson#requestPasswordRecovery}.
*/
export interface RequestPasswordRecovery {
	'@type': 'requestPasswordRecovery';

}

/**
Checks whether a 2-step verification password recovery code sent to an email address is valid.
Request type for {@link Tdjson#checkPasswordRecoveryCode}.
*/
export interface CheckPasswordRecoveryCode {
	'@type': 'checkPasswordRecoveryCode';
	/**
Recovery code to check.
*/
	recovery_code: string;
}

/**
Recovers the 2-step verification password using a recovery code sent to an email address that was previously set up.
Request type for {@link Tdjson#recoverPassword}.
*/
export interface RecoverPassword {
	'@type': 'recoverPassword';
	/**
Recovery code to check.
*/
	recovery_code: string;
	/**
New 2-step verification password of the user; may be empty to remove the password.
*/
	new_password: string;
	/**
New password hint; may be empty.
*/
	new_hint: string;
}

/**
Removes 2-step verification password without previous password and access to recovery email address. The password can't
be reset immediately and the request needs to be repeated after the specified time.
Request type for {@link Tdjson#resetPassword}.
*/
export interface ResetPassword {
	'@type': 'resetPassword';

}

/**
Cancels reset of 2-step verification password. The method can be called if passwordState.pending_reset_date > 0.
Request type for {@link Tdjson#cancelPasswordReset}.
*/
export interface CancelPasswordReset {
	'@type': 'cancelPasswordReset';

}

/**
Creates a new temporary password for processing payments.
Request type for {@link Tdjson#createTemporaryPassword}.
*/
export interface CreateTemporaryPassword {
	'@type': 'createTemporaryPassword';
	/**
The 2-step verification password of the current user.
*/
	password: string;
	/**
Time during which the temporary password will be valid, in seconds; must be between 60 and 86400.
*/
	valid_for: number;
}

/**
Returns information about the current temporary password.
Request type for {@link Tdjson#getTemporaryPasswordState}.
*/
export interface GetTemporaryPasswordState {
	'@type': 'getTemporaryPasswordState';

}

/**
Returns the current user.
Request type for {@link Tdjson#getMe}.
*/
export interface GetMe {
	'@type': 'getMe';

}

/**
Returns information about a user by their identifier. This is an offline request if the current user is not a bot.
Request type for {@link Tdjson#getUser}.
*/
export interface GetUser {
	'@type': 'getUser';
	/**
User identifier.
*/
	user_id: number;
}

/**
Returns full information about a user by their identifier.
Request type for {@link Tdjson#getUserFullInfo}.
*/
export interface GetUserFullInfo {
	'@type': 'getUserFullInfo';
	/**
User identifier.
*/
	user_id: number;
}

/**
Returns information about a basic group by its identifier. This is an offline request if the current user is not a bot.
Request type for {@link Tdjson#getBasicGroup}.
*/
export interface GetBasicGroup {
	'@type': 'getBasicGroup';
	/**
Basic group identifier.
*/
	basic_group_id: number;
}

/**
Returns full information about a basic group by its identifier.
Request type for {@link Tdjson#getBasicGroupFullInfo}.
*/
export interface GetBasicGroupFullInfo {
	'@type': 'getBasicGroupFullInfo';
	/**
Basic group identifier.
*/
	basic_group_id: number;
}

/**
Returns information about a supergroup or a channel by its identifier. This is an offline request if the current user is
not a bot.
Request type for {@link Tdjson#getSupergroup}.
*/
export interface GetSupergroup {
	'@type': 'getSupergroup';
	/**
Supergroup or channel identifier.
*/
	supergroup_id: number;
}

/**
Returns full information about a supergroup or a channel by its identifier, cached for up to 1 minute.
Request type for {@link Tdjson#getSupergroupFullInfo}.
*/
export interface GetSupergroupFullInfo {
	'@type': 'getSupergroupFullInfo';
	/**
Supergroup or channel identifier.
*/
	supergroup_id: number;
}

/**
Returns information about a secret chat by its identifier. This is an offline request.
Request type for {@link Tdjson#getSecretChat}.
*/
export interface GetSecretChat {
	'@type': 'getSecretChat';
	/**
Secret chat identifier.
*/
	secret_chat_id: number;
}

/**
Returns information about a chat by its identifier, this is an offline request if the current user is not a bot.
Request type for {@link Tdjson#getChat}.
*/
export interface GetChat {
	'@type': 'getChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Returns information about a message.
Request type for {@link Tdjson#getMessage}.
*/
export interface GetMessage {
	'@type': 'getMessage';
	/**
Identifier of the chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message to get.
*/
	message_id: number;
}

/**
Returns information about a message, if it is available without sending network request. This is an offline request.
Request type for {@link Tdjson#getMessageLocally}.
*/
export interface GetMessageLocally {
	'@type': 'getMessageLocally';
	/**
Identifier of the chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message to get.
*/
	message_id: number;
}

/**
Returns information about a message that is replied by a given message. Also returns the pinned message, the game
message, and the invoice message for messages of the types messagePinMessage, messageGameScore, and
messagePaymentSuccessful respectively.
Request type for {@link Tdjson#getRepliedMessage}.
*/
export interface GetRepliedMessage {
	'@type': 'getRepliedMessage';
	/**
Identifier of the chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the reply message.
*/
	message_id: number;
}

/**
Returns information about a newest pinned message in the chat.
Request type for {@link Tdjson#getChatPinnedMessage}.
*/
export interface GetChatPinnedMessage {
	'@type': 'getChatPinnedMessage';
	/**
Identifier of the chat the message belongs to.
*/
	chat_id: number;
}

/**
Returns information about a message with the callback button that originated a callback query; for bots only.
Request type for {@link Tdjson#getCallbackQueryMessage}.
*/
export interface GetCallbackQueryMessage {
	'@type': 'getCallbackQueryMessage';
	/**
Identifier of the chat the message belongs to.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Identifier of the callback query.
*/
	callback_query_id: string;
}

/**
Returns information about messages. If a message is not found, returns null on the corresponding position of the result.
Request type for {@link Tdjson#getMessages}.
*/
export interface GetMessages {
	'@type': 'getMessages';
	/**
Identifier of the chat the messages belong to.
*/
	chat_id: number;
	/**
Identifiers of the messages to get.
*/
	message_ids: number[];
}

/**
Returns information about a message thread. Can be used only if message.can_get_message_thread == true.
Request type for {@link Tdjson#getMessageThread}.
*/
export interface GetMessageThread {
	'@type': 'getMessageThread';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
}

/**
Returns viewers of a recent outgoing message in a basic group or a supergroup chat. For video notes and voice notes only
users, opened content of the message, are returned. The method can be called if message.can_get_viewers == true.
Request type for {@link Tdjson#getMessageViewers}.
*/
export interface GetMessageViewers {
	'@type': 'getMessageViewers';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
}

/**
Returns information about a file; this is an offline request.
Request type for {@link Tdjson#getFile}.
*/
export interface GetFile {
	'@type': 'getFile';
	/**
Identifier of the file to get.
*/
	file_id: number;
}

/**
Returns information about a file by its remote ID; this is an offline request. Can be used to register a URL as a file
for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still
accessible to the user. For example, if the file is from a message, then the message must be not deleted and accessible
to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the
application.
Request type for {@link Tdjson#getRemoteFile}.
*/
export interface GetRemoteFile {
	'@type': 'getRemoteFile';
	/**
Remote identifier of the file to get.
*/
	remote_file_id: string;
	/**
File type; pass null if unknown.
*/
	file_type: FileType;
}

/**
Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates.
Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have
been loaded.
Request type for {@link Tdjson#loadChats}.
*/
export interface LoadChats {
	'@type': 'loadChats';
	/**
The chat list in which to load chats; pass null to load chats from the main chat list.
*/
	chat_list: ChatList;
	/**
The maximum number of chats to be loaded. For optimal performance, the number of loaded chats is chosen by TDLib and can
be smaller than the specified limit, even if the end of the list is not reached.
*/
	limit: number;
}

/**
Returns an ordered list of chats from the beginning of a chat list. For informational purposes only. Use loadChats and
updates processing instead to maintain chat lists in a consistent state.
Request type for {@link Tdjson#getChats}.
*/
export interface GetChats {
	'@type': 'getChats';
	/**
The chat list in which to return chats; pass null to get chats from the main chat list.
*/
	chat_list: ChatList;
	/**
The maximum number of chats to be returned.
*/
	limit: number;
}

/**
Searches a public chat by its username. Currently, only private chats, supergroups and channels can be public. Returns
the chat if found; otherwise an error is returned.
Request type for {@link Tdjson#searchPublicChat}.
*/
export interface SearchPublicChat {
	'@type': 'searchPublicChat';
	/**
Username to be resolved.
*/
	username: string;
}

/**
Searches public chats by looking for specified query in their username and title. Currently, only private chats,
supergroups and channels can be public. Returns a meaningful number of results. Excludes private chats with contacts and
chats from the chat list from the results.
Request type for {@link Tdjson#searchPublicChats}.
*/
export interface SearchPublicChats {
	'@type': 'searchPublicChats';
	/**
Query to search for.
*/
	query: string;
}

/**
Searches for the specified query in the title and username of already known chats, this is an offline request. Returns
chats in the order seen in the main chat list.
Request type for {@link Tdjson#searchChats}.
*/
export interface SearchChats {
	'@type': 'searchChats';
	/**
Query to search for. If the query is empty, returns up to 50 recently found chats.
*/
	query: string;
	/**
The maximum number of chats to be returned.
*/
	limit: number;
}

/**
Searches for the specified query in the title and username of already known chats via request to the server. Returns
chats in the order seen in the main chat list.
Request type for {@link Tdjson#searchChatsOnServer}.
*/
export interface SearchChatsOnServer {
	'@type': 'searchChatsOnServer';
	/**
Query to search for.
*/
	query: string;
	/**
The maximum number of chats to be returned.
*/
	limit: number;
}

/**
Returns a list of users and location-based supergroups nearby. The list of users nearby will be updated for 60 seconds
after the request by the updates updateUsersNearby. The request must be sent again every 25 seconds with adjusted
location to not miss new chats.
Request type for {@link Tdjson#searchChatsNearby}.
*/
export interface SearchChatsNearby {
	'@type': 'searchChatsNearby';
	/**
Current user location.
*/
	location: Location;
}

/**
Returns a list of frequently used chats. Supported only if the chat info database is enabled.
Request type for {@link Tdjson#getTopChats}.
*/
export interface GetTopChats {
	'@type': 'getTopChats';
	/**
Category of chats to be returned.
*/
	category: TopChatCategory;
	/**
The maximum number of chats to be returned; up to 30.
*/
	limit: number;
}

/**
Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled.
Request type for {@link Tdjson#removeTopChat}.
*/
export interface RemoveTopChat {
	'@type': 'removeTopChat';
	/**
Category of frequently used chats.
*/
	category: TopChatCategory;
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already
in the list, it will be removed from the list first.
Request type for {@link Tdjson#addRecentlyFoundChat}.
*/
export interface AddRecentlyFoundChat {
	'@type': 'addRecentlyFoundChat';
	/**
Identifier of the chat to add.
*/
	chat_id: number;
}

/**
Removes a chat from the list of recently found chats.
Request type for {@link Tdjson#removeRecentlyFoundChat}.
*/
export interface RemoveRecentlyFoundChat {
	'@type': 'removeRecentlyFoundChat';
	/**
Identifier of the chat to be removed.
*/
	chat_id: number;
}

/**
Clears the list of recently found chats.
Request type for {@link Tdjson#clearRecentlyFoundChats}.
*/
export interface ClearRecentlyFoundChats {
	'@type': 'clearRecentlyFoundChats';

}

/**
Returns recently opened chats, this is an offline request. Returns chats in the order of last opening.
Request type for {@link Tdjson#getRecentlyOpenedChats}.
*/
export interface GetRecentlyOpenedChats {
	'@type': 'getRecentlyOpenedChats';
	/**
The maximum number of chats to be returned.
*/
	limit: number;
}

/**
Checks whether a username can be set for a chat.
Request type for {@link Tdjson#checkChatUsername}.
*/
export interface CheckChatUsername {
	'@type': 'checkChatUsername';
	/**
Chat identifier; must be identifier of a supergroup chat, or a channel chat, or a private chat with self, or zero if the
chat is being created.
*/
	chat_id: number;
	/**
Username to be checked.
*/
	username: string;
}

/**
Returns a list of public chats of the specified type, owned by the user.
Request type for {@link Tdjson#getCreatedPublicChats}.
*/
export interface GetCreatedPublicChats {
	'@type': 'getCreatedPublicChats';
	/**
Type of the public chats to return.
*/
	type: PublicChatType;
}

/**
Checks whether the maximum number of owned public chats has been reached. Returns corresponding error if the limit was
reached. The limit can be increased with Telegram Premium.
Request type for {@link Tdjson#checkCreatedPublicChatsLimit}.
*/
export interface CheckCreatedPublicChatsLimit {
	'@type': 'checkCreatedPublicChatsLimit';
	/**
Type of the public chats, for which to check the limit.
*/
	type: PublicChatType;
}

/**
Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned
basic group chats must be first upgraded to supergroups before they can be set as a discussion group. To set a returned
supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable
first.
Request type for {@link Tdjson#getSuitableDiscussionChats}.
*/
export interface GetSuitableDiscussionChats {
	'@type': 'getSuitableDiscussionChats';

}

/**
Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of
joined supergroups and channels and receives CHANNELS_TOO_MUCH error. Also, the limit can be increased with Telegram
Premium.
Request type for {@link Tdjson#getInactiveSupergroupChats}.
*/
export interface GetInactiveSupergroupChats {
	'@type': 'getInactiveSupergroupChats';

}

/**
Returns a list of common group chats with a given user. Chats are sorted by their type and creation date.
Request type for {@link Tdjson#getGroupsInCommon}.
*/
export interface GetGroupsInCommon {
	'@type': 'getGroupsInCommon';
	/**
User identifier.
*/
	user_id: number;
	/**
Chat identifier starting from which to return chats; use 0 for the first request.
*/
	offset_chat_id: number;
	/**
The maximum number of chats to be returned; up to 100.
*/
	limit: number;
}

/**
Returns messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of decreasing
message_id). For optimal performance, the number of returned messages is chosen by TDLib. This is an offline request if
only_local is true.
Request type for {@link Tdjson#getChatHistory}.
*/
export interface GetChatHistory {
	'@type': 'getChatHistory';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the message starting from which history must be fetched; use 0 to get results from the last message.
*/
	from_message_id: number;
	/**
Specify 0 to get results from exactly the from_message_id or a negative offset up to 99 to get additionally some newer
messages.
*/
	offset: number;
	/**
The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is
negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages
is chosen by TDLib and can be smaller than the specified limit.
*/
	limit: number;
	/**
Pass true to get only messages that are available without sending network requests.
*/
	only_local?: boolean;
}

/**
Returns messages in a message thread of a message. Can be used only if message.can_get_message_thread == true. Message
thread of a channel message is in the channel's linked supergroup. The messages are returned in a reverse chronological
order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by
TDLib.
Request type for {@link Tdjson#getMessageThreadHistory}.
*/
export interface GetMessageThreadHistory {
	'@type': 'getMessageThreadHistory';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier, which thread history needs to be returned.
*/
	message_id: number;
	/**
Identifier of the message starting from which history must be fetched; use 0 to get results from the last message.
*/
	from_message_id: number;
	/**
Specify 0 to get results from exactly the from_message_id or a negative offset up to 99 to get additionally some newer
messages.
*/
	offset: number;
	/**
The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is
negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages
is chosen by TDLib and can be smaller than the specified limit.
*/
	limit: number;
}

/**
Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users fields to
find whether and how the method can be applied to the chat.
Request type for {@link Tdjson#deleteChatHistory}.
*/
export interface DeleteChatHistory {
	'@type': 'deleteChatHistory';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Pass true to remove the chat from all chat lists.
*/
	remove_from_chat_list?: boolean;
	/**
Pass true to delete chat history for all users.
*/
	revoke?: boolean;
}

/**
Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release
the username and remove all members. Use the field chat.can_be_deleted_for_all_users to find whether the method can be
applied to the chat.
Request type for {@link Tdjson#deleteChat}.
*/
export interface DeleteChat {
	'@type': 'deleteChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of
decreasing message_id. Cannot be used in secret chats with a non-empty query (searchSecretMessages must be used
instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by
TDLib and can be smaller than the specified limit.
Request type for {@link Tdjson#searchChatMessages}.
*/
export interface SearchChatMessages {
	'@type': 'searchChatMessages';
	/**
Identifier of the chat in which to search messages.
*/
	chat_id: number;
	/**
Query to search for.
*/
	query: string;
	/**
Identifier of the sender of messages to search for; pass null to search for messages from any sender. Not supported in
secret chats.
*/
	sender_id: MessageSender;
	/**
Identifier of the message starting from which history must be fetched; use 0 to get results from the last message.
*/
	from_message_id: number;
	/**
Specify 0 to get results from exactly the from_message_id or a negative offset to get the specified message and some
newer messages.
*/
	offset: number;
	/**
The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is
negative, the limit must be greater than -offset. For optimal performance, the number of returned messages is chosen by
TDLib and can be smaller than the specified limit.
*/
	limit: number;
	/**
Additional filter for messages to search; pass null to search for all messages.
*/
	filter: SearchMessagesFilter;
	/**
If not 0, only messages in the specified thread will be returned; supergroups only.
*/
	message_thread_id: number;
}

/**
Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in
order of decreasing (date, chat_id, message_id)). For optimal performance, the number of returned messages is chosen by
TDLib and can be smaller than the specified limit.
Request type for {@link Tdjson#searchMessages}.
*/
export interface SearchMessages {
	'@type': 'searchMessages';
	/**
Chat list in which to search messages; pass null to search in all chats regardless of their chat list. Only Main and
Archive chat lists are supported.
*/
	chat_list: ChatList;
	/**
Query to search for.
*/
	query: string;
	/**
The date of the message starting from which the results need to be fetched. Use 0 or any date in the future to get
results from the last message.
*/
	offset_date: number;
	/**
The chat identifier of the last found message, or 0 for the first request.
*/
	offset_chat_id: number;
	/**
The message identifier of the last found message, or 0 for the first request.
*/
	offset_message_id: number;
	/**
The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is
chosen by TDLib and can be smaller than the specified limit.
*/
	limit: number;
	/**
Additional filter for messages to search; pass null to search for all messages. Filters searchMessagesFilterMention,
searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, searchMessagesFilterFailedToSend, and
searchMessagesFilterPinned are unsupported in this function.
*/
	filter: SearchMessagesFilter;
	/**
If not 0, the minimum date of the messages to return.
*/
	min_date: number;
	/**
If not 0, the maximum date of the messages to return.
*/
	max_date: number;
}

/**
Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance, the
number of returned messages is chosen by TDLib.
Request type for {@link Tdjson#searchSecretMessages}.
*/
export interface SearchSecretMessages {
	'@type': 'searchSecretMessages';
	/**
Identifier of the chat in which to search. Specify 0 to search in all secret chats.
*/
	chat_id: number;
	/**
Query to search for. If empty, searchChatMessages must be used instead.
*/
	query: string;
	/**
Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of
results.
*/
	offset: string;
	/**
The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is
chosen by TDLib and can be smaller than the specified limit.
*/
	limit: number;
	/**
Additional filter for messages to search; pass null to search for all messages.
*/
	filter: SearchMessagesFilter;
}

/**
Searches for call messages. Returns the results in reverse chronological order (i.e., in order of decreasing
message_id). For optimal performance, the number of returned messages is chosen by TDLib.
Request type for {@link Tdjson#searchCallMessages}.
*/
export interface SearchCallMessages {
	'@type': 'searchCallMessages';
	/**
Identifier of the message from which to search; use 0 to get results from the last message.
*/
	from_message_id: number;
	/**
The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is
chosen by TDLib and can be smaller than the specified limit.
*/
	limit: number;
	/**
Pass true to search only for messages with missed/declined calls.
*/
	only_missed?: boolean;
}

/**
Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the
results in reverse chronological order.
Request type for {@link Tdjson#searchOutgoingDocumentMessages}.
*/
export interface SearchOutgoingDocumentMessages {
	'@type': 'searchOutgoingDocumentMessages';
	/**
Query to search for in document file name and message caption.
*/
	query: string;
	/**
The maximum number of messages to be returned; up to 100.
*/
	limit: number;
}

/**
Deletes all call messages.
Request type for {@link Tdjson#deleteAllCallMessages}.
*/
export interface DeleteAllCallMessages {
	'@type': 'deleteAllCallMessages';
	/**
Pass true to delete the messages for all users.
*/
	revoke?: boolean;
}

/**
Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location
message per user.
Request type for {@link Tdjson#searchChatRecentLocationMessages}.
*/
export interface SearchChatRecentLocationMessages {
	'@type': 'searchChatRecentLocationMessages';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The maximum number of messages to be returned.
*/
	limit: number;
}

/**
Returns all active live locations that need to be updated by the application. The list is persistent across application
restarts only if the message database is used.
Request type for {@link Tdjson#getActiveLiveLocationMessages}.
*/
export interface GetActiveLiveLocationMessages {
	'@type': 'getActiveLiveLocationMessages';

}

/**
Returns the last message sent in a chat no later than the specified date.
Request type for {@link Tdjson#getChatMessageByDate}.
*/
export interface GetChatMessageByDate {
	'@type': 'getChatMessageByDate';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Point in time (Unix timestamp) relative to which to search for messages.
*/
	date: number;
}

/**
Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll
implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). Cannot be
used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database.
Request type for {@link Tdjson#getChatSparseMessagePositions}.
*/
export interface GetChatSparseMessagePositions {
	'@type': 'getChatSparseMessagePositions';
	/**
Identifier of the chat in which to return information about message positions.
*/
	chat_id: number;
	/**
Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention,
searchMessagesFilterUnreadMention, and searchMessagesFilterUnreadReaction are unsupported in this function.
*/
	filter: SearchMessagesFilter;
	/**
The message identifier from which to return information about message positions.
*/
	from_message_id: number;
	/**
The expected number of message positions to be returned; 50-2000. A smaller number of positions can be returned, if
there are not enough appropriate messages.
*/
	limit: number;
}

/**
Returns information about the next messages of the specified type in the chat split by days. Returns the results in
reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the
value of the option "utc_time_offset".
Request type for {@link Tdjson#getChatMessageCalendar}.
*/
export interface GetChatMessageCalendar {
	'@type': 'getChatMessageCalendar';
	/**
Identifier of the chat in which to return information about messages.
*/
	chat_id: number;
	/**
Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention,
searchMessagesFilterUnreadMention, and searchMessagesFilterUnreadReaction are unsupported in this function.
*/
	filter: SearchMessagesFilter;
	/**
The message identifier from which to return information about messages; use 0 to get results from the last message.
*/
	from_message_id: number;
}

/**
Returns approximate number of messages of the specified type in the chat.
Request type for {@link Tdjson#getChatMessageCount}.
*/
export interface GetChatMessageCount {
	'@type': 'getChatMessageCount';
	/**
Identifier of the chat in which to count messages.
*/
	chat_id: number;
	/**
Filter for message content; searchMessagesFilterEmpty is unsupported in this function.
*/
	filter: SearchMessagesFilter;
	/**
Pass true to get the number of messages without sending network requests, or -1 if the number of messages is unknown
locally.
*/
	return_local?: boolean;
}

/**
Returns approximate 1-based position of a message among messages, which can be found by the specified filter in the
chat. Cannot be used in secret chats.
Request type for {@link Tdjson#getChatMessagePosition}.
*/
export interface GetChatMessagePosition {
	'@type': 'getChatMessagePosition';
	/**
Identifier of the chat in which to find message position.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Filter for message content; searchMessagesFilterEmpty, searchMessagesFilterUnreadMention,
searchMessagesFilterUnreadReaction, and searchMessagesFilterFailedToSend are unsupported in this function.
*/
	filter: SearchMessagesFilter;
	/**
If not 0, only messages in the specified thread will be considered; supergroups only.
*/
	message_thread_id: number;
}

/**
Returns all scheduled messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of
decreasing message_id).
Request type for {@link Tdjson#getChatScheduledMessages}.
*/
export interface GetChatScheduledMessages {
	'@type': 'getChatScheduledMessages';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Returns forwarded copies of a channel message to different public channels. For optimal performance, the number of
returned messages is chosen by TDLib.
Request type for {@link Tdjson#getMessagePublicForwards}.
*/
export interface GetMessagePublicForwards {
	'@type': 'getMessagePublicForwards';
	/**
Chat identifier of the message.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of
results.
*/
	offset: string;
	/**
The maximum number of messages to be returned; must be positive and can't be greater than 100. For optimal performance,
the number of returned messages is chosen by TDLib and can be smaller than the specified limit.
*/
	limit: number;
}

/**
Returns sponsored message to be shown in a chat; for channel chats only. Returns a 404 error if there is no sponsored
message in the chat.
Request type for {@link Tdjson#getChatSponsoredMessage}.
*/
export interface GetChatSponsoredMessage {
	'@type': 'getChatSponsoredMessage';
	/**
Identifier of the chat.
*/
	chat_id: number;
}

/**
Removes an active notification from notification list. Needs to be called only if the notification is removed by the
current user.
Request type for {@link Tdjson#removeNotification}.
*/
export interface RemoveNotification {
	'@type': 'removeNotification';
	/**
Identifier of notification group to which the notification belongs.
*/
	notification_group_id: number;
	/**
Identifier of removed notification.
*/
	notification_id: number;
}

/**
Removes a group of active notifications. Needs to be called only if the notification group is removed by the current
user.
Request type for {@link Tdjson#removeNotificationGroup}.
*/
export interface RemoveNotificationGroup {
	'@type': 'removeNotificationGroup';
	/**
Notification group identifier.
*/
	notification_group_id: number;
	/**
The maximum identifier of removed notifications.
*/
	max_notification_id: number;
}

/**
Returns an HTTPS link to a message in a chat. Available only for already sent messages in supergroups and channels, or
if message.can_get_media_timestamp_links and a media timestamp link is generated. This is an offline request.
Request type for {@link Tdjson#getMessageLink}.
*/
export interface GetMessageLink {
	'@type': 'getMessageLink';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
If not 0, timestamp from which the video/audio/video note/voice note playing must start, in seconds. The media can be in
the message content or in its web page preview.
*/
	media_timestamp: number;
	/**
Pass true to create a link for the whole media album.
*/
	for_album?: boolean;
	/**
Pass true to create a link to the message as a channel post comment, or from a message thread.
*/
	for_comment?: boolean;
}

/**
Returns an HTML code for embedding the message. Available only for messages in supergroups and channels with a username.
Request type for {@link Tdjson#getMessageEmbeddingCode}.
*/
export interface GetMessageEmbeddingCode {
	'@type': 'getMessageEmbeddingCode';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Pass true to return an HTML code for embedding of the whole media album.
*/
	for_album?: boolean;
}

/**
Returns information about a public or private message link. Can be called for any internal link of the type
internalLinkTypeMessage.
Request type for {@link Tdjson#getMessageLinkInfo}.
*/
export interface GetMessageLinkInfo {
	'@type': 'getMessageLinkInfo';
	/**
The message link.
*/
	url: string;
}

/**
Translates a text to the given language. Returns a 404 error if the translation can't be performed.
Request type for {@link Tdjson#translateText}.
*/
export interface TranslateText {
	'@type': 'translateText';
	/**
Text to translate.
*/
	text: string;
	/**
A two-letter ISO 639-1 language code of the language from which the message is translated. If empty, the language will
be detected automatically.
*/
	from_language_code: string;
	/**
A two-letter ISO 639-1 language code of the language to which the message is translated.
*/
	to_language_code: string;
}

/**
Recognizes speech in a voice note message. The message must be successfully sent and must not be scheduled. May return
an error with a message "MSG_VOICE_TOO_LONG" if the voice note is too long to be recognized.
Request type for {@link Tdjson#recognizeSpeech}.
*/
export interface RecognizeSpeech {
	'@type': 'recognizeSpeech';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
}

/**
Rates recognized speech in a voice note message.
Request type for {@link Tdjson#rateSpeechRecognition}.
*/
export interface RateSpeechRecognition {
	'@type': 'rateSpeechRecognition';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Pass true if the speech recognition is good.
*/
	is_good?: boolean;
}

/**
Returns list of message sender identifiers, which can be used to send messages in a chat.
Request type for {@link Tdjson#getChatAvailableMessageSenders}.
*/
export interface GetChatAvailableMessageSenders {
	'@type': 'getChatAvailableMessageSenders';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Selects a message sender to send messages in a chat.
Request type for {@link Tdjson#setChatMessageSender}.
*/
export interface SetChatMessageSender {
	'@type': 'setChatMessageSender';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New message sender for the chat.
*/
	message_sender_id: MessageSender;
}

/**
Sends a message. Returns the sent message.
Request type for {@link Tdjson#sendMessage}.
*/
export interface SendMessage {
	'@type': 'sendMessage';
	/**
Target chat.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the message will be sent.
*/
	message_thread_id: number;
	/**
Identifier of the replied message; 0 if none.
*/
	reply_to_message_id: number;
	/**
Options to be used to send the message; pass null to use default options.
*/
	options: MessageSendOptions;
	/**
Markup for replying to the message; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
	/**
The content of the message to be sent.
*/
	input_message_content: InputMessageContent;
}

/**
Sends 2-10 messages grouped together into an album. Currently, only audio, document, photo and video messages can be
grouped into an album. Documents and audio files can be only grouped in an album with messages of the same type. Returns
sent messages.
Request type for {@link Tdjson#sendMessageAlbum}.
*/
export interface SendMessageAlbum {
	'@type': 'sendMessageAlbum';
	/**
Target chat.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the messages will be sent.
*/
	message_thread_id: number;
	/**
Identifier of a replied message; 0 if none.
*/
	reply_to_message_id: number;
	/**
Options to be used to send the messages; pass null to use default options.
*/
	options: MessageSendOptions;
	/**
Contents of messages to be sent. At most 10 messages can be added to an album.
*/
	input_message_contents: InputMessageContent[];
	/**
Pass true to get fake messages instead of actually sending them.
*/
	only_preview?: boolean;
}

/**
Invites a bot to a chat (if it is not yet a member) and sends it the /start command. Bots can't be invited to a private
chat other than the chat with the bot. Bots can't be invited to channels (although they can be added as admins) and
secret chats. Returns the sent message.
Request type for {@link Tdjson#sendBotStartMessage}.
*/
export interface SendBotStartMessage {
	'@type': 'sendBotStartMessage';
	/**
Identifier of the bot.
*/
	bot_user_id: number;
	/**
Identifier of the target chat.
*/
	chat_id: number;
	/**
A hidden parameter sent to the bot for deep linking purposes (https://core.telegram.org/bots#deep-linking).
*/
	parameter: string;
}

/**
Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message.
Request type for {@link Tdjson#sendInlineQueryResultMessage}.
*/
export interface SendInlineQueryResultMessage {
	'@type': 'sendInlineQueryResultMessage';
	/**
Target chat.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the message will be sent.
*/
	message_thread_id: number;
	/**
Identifier of a replied message; 0 if none.
*/
	reply_to_message_id: number;
	/**
Options to be used to send the message; pass null to use default options.
*/
	options: MessageSendOptions;
	/**
Identifier of the inline query.
*/
	query_id: string;
	/**
Identifier of the inline result.
*/
	result_id: string;
	/**
Pass true to hide the bot, via which the message is sent. Can be used only for bots
GetOption("animation_search_bot_username"), GetOption("photo_search_bot_username"), and
GetOption("venue_search_bot_username").
*/
	hide_via_bot?: boolean;
}

/**
Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in
message_ids. If a message can't be forwarded, null will be returned instead of the message.
Request type for {@link Tdjson#forwardMessages}.
*/
export interface ForwardMessages {
	'@type': 'forwardMessages';
	/**
Identifier of the chat to which to forward messages.
*/
	chat_id: number;
	/**
Identifier of the chat from which to forward messages.
*/
	from_chat_id: number;
	/**
Identifiers of the messages to forward. Message identifiers must be in a strictly increasing order. At most 100 messages
can be forwarded simultaneously.
*/
	message_ids: number[];
	/**
Options to be used to send the messages; pass null to use default options.
*/
	options: MessageSendOptions;
	/**
Pass true to copy content of the messages without reference to the original sender. Always true if the messages are
forwarded to a secret chat or are local.
*/
	send_copy?: boolean;
	/**
Pass true to remove media captions of message copies. Ignored if send_copy is false.
*/
	remove_caption?: boolean;
	/**
Pass true to get fake messages instead of actually forwarding them.
*/
	only_preview?: boolean;
}

/**
Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is
true and after specified in messageSendingStateFailed.retry_after time passed. If a message is re-sent, the
corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers
passed in message_ids. If a message can't be re-sent, null will be returned instead of the message.
Request type for {@link Tdjson#resendMessages}.
*/
export interface ResendMessages {
	'@type': 'resendMessages';
	/**
Identifier of the chat to send messages.
*/
	chat_id: number;
	/**
Identifiers of the messages to resend. Message identifiers must be in a strictly increasing order.
*/
	message_ids: number[];
}

/**
Sends a notification about a screenshot taken in a chat. Supported only in private and secret chats.
Request type for {@link Tdjson#sendChatScreenshotTakenNotification}.
*/
export interface SendChatScreenshotTakenNotification {
	'@type': 'sendChatScreenshotTakenNotification';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Adds a local message to a chat. The message is persistent across application restarts only if the message database is
used. Returns the added message.
Request type for {@link Tdjson#addLocalMessage}.
*/
export interface AddLocalMessage {
	'@type': 'addLocalMessage';
	/**
Target chat.
*/
	chat_id: number;
	/**
Identifier of the sender of the message.
*/
	sender_id: MessageSender;
	/**
Identifier of the replied message; 0 if none.
*/
	reply_to_message_id: number;
	/**
Pass true to disable notification for the message.
*/
	disable_notification?: boolean;
	/**
The content of the message to be added.
*/
	input_message_content: InputMessageContent;
}

/**
Deletes messages.
Request type for {@link Tdjson#deleteMessages}.
*/
export interface DeleteMessages {
	'@type': 'deleteMessages';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifiers of the messages to be deleted.
*/
	message_ids: number[];
	/**
Pass true to delete messages for all chat members. Always true for supergroups, channels and secret chats.
*/
	revoke?: boolean;
}

/**
Deletes all messages sent by the specified message sender in a chat. Supported only for supergroups; requires
can_delete_messages administrator privileges.
Request type for {@link Tdjson#deleteChatMessagesBySender}.
*/
export interface DeleteChatMessagesBySender {
	'@type': 'deleteChatMessagesBySender';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the sender of messages to delete.
*/
	sender_id: MessageSender;
}

/**
Deletes all messages between the specified dates in a chat. Supported only for private chats and basic groups. Messages
sent in the last 30 seconds will not be deleted.
Request type for {@link Tdjson#deleteChatMessagesByDate}.
*/
export interface DeleteChatMessagesByDate {
	'@type': 'deleteChatMessagesByDate';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The minimum date of the messages to delete.
*/
	min_date: number;
	/**
The maximum date of the messages to delete.
*/
	max_date: number;
	/**
Pass true to delete chat messages for all users; private chats only.
*/
	revoke?: boolean;
}

/**
Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the
server side.
Request type for {@link Tdjson#editMessageText}.
*/
export interface EditMessageText {
	'@type': 'editMessageText';
	/**
The chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
The new message reply markup; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
	/**
New text content of the message. Must be of type inputMessageText.
*/
	input_message_content: InputMessageContent;
}

/**
Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live
location. Returns the edited message after the edit is completed on the server side.
Request type for {@link Tdjson#editMessageLiveLocation}.
*/
export interface EditMessageLiveLocation {
	'@type': 'editMessageLiveLocation';
	/**
The chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
The new message reply markup; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
	/**
New location content of the message; pass null to stop sharing the live location.
*/
	location: Location;
	/**
The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown.
*/
	heading: number;
	/**
The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled.
*/
	proximity_alert_radius: number;
}

/**
Edits the content of a message with an animation, an audio, a document, a photo or a video, including message caption.
If only the caption needs to be edited, use editMessageCaption instead. The media can't be edited if the message was set
to self-destruct or to a self-destructing media. The type of message content in an album can't be changed with exception
of replacing a photo with a video or vice versa. Returns the edited message after the edit is completed on the server
side.
Request type for {@link Tdjson#editMessageMedia}.
*/
export interface EditMessageMedia {
	'@type': 'editMessageMedia';
	/**
The chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
The new message reply markup; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
	/**
New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio,
inputMessageDocument, inputMessagePhoto or inputMessageVideo.
*/
	input_message_content: InputMessageContent;
}

/**
Edits the message content caption. Returns the edited message after the edit is completed on the server side.
Request type for {@link Tdjson#editMessageCaption}.
*/
export interface EditMessageCaption {
	'@type': 'editMessageCaption';
	/**
The chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
The new message reply markup; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
	/**
New message content caption; 0-GetOption("message_caption_length_max") characters; pass null to remove caption.
*/
	caption: FormattedText;
}

/**
Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server
side.
Request type for {@link Tdjson#editMessageReplyMarkup}.
*/
export interface EditMessageReplyMarkup {
	'@type': 'editMessageReplyMarkup';
	/**
The chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
The new message reply markup; pass null if none.
*/
	reply_markup: ReplyMarkup;
}

/**
Edits the text of an inline text or game message sent via a bot; for bots only.
Request type for {@link Tdjson#editInlineMessageText}.
*/
export interface EditInlineMessageText {
	'@type': 'editInlineMessageText';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
The new message reply markup; pass null if none.
*/
	reply_markup: ReplyMarkup;
	/**
New text content of the message. Must be of type inputMessageText.
*/
	input_message_content: InputMessageContent;
}

/**
Edits the content of a live location in an inline message sent via a bot; for bots only.
Request type for {@link Tdjson#editInlineMessageLiveLocation}.
*/
export interface EditInlineMessageLiveLocation {
	'@type': 'editInlineMessageLiveLocation';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
The new message reply markup; pass null if none.
*/
	reply_markup: ReplyMarkup;
	/**
New location content of the message; pass null to stop sharing the live location.
*/
	location: Location;
	/**
The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown.
*/
	heading: number;
	/**
The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled.
*/
	proximity_alert_radius: number;
}

/**
Edits the content of a message with an animation, an audio, a document, a photo or a video in an inline message sent via
a bot; for bots only.
Request type for {@link Tdjson#editInlineMessageMedia}.
*/
export interface EditInlineMessageMedia {
	'@type': 'editInlineMessageMedia';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
The new message reply markup; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
	/**
New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio,
inputMessageDocument, inputMessagePhoto or inputMessageVideo.
*/
	input_message_content: InputMessageContent;
}

/**
Edits the caption of an inline message sent via a bot; for bots only.
Request type for {@link Tdjson#editInlineMessageCaption}.
*/
export interface EditInlineMessageCaption {
	'@type': 'editInlineMessageCaption';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
The new message reply markup; pass null if none.
*/
	reply_markup: ReplyMarkup;
	/**
New message content caption; pass null to remove caption; 0-GetOption("message_caption_length_max") characters.
*/
	caption: FormattedText;
}

/**
Edits the reply markup of an inline message sent via a bot; for bots only.
Request type for {@link Tdjson#editInlineMessageReplyMarkup}.
*/
export interface EditInlineMessageReplyMarkup {
	'@type': 'editInlineMessageReplyMarkup';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
The new message reply markup; pass null if none.
*/
	reply_markup: ReplyMarkup;
}

/**
Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded
together with the message will be also changed.
Request type for {@link Tdjson#editMessageSchedulingState}.
*/
export interface EditMessageSchedulingState {
	'@type': 'editMessageSchedulingState';
	/**
The chat the message belongs to.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
The new message scheduling state; pass null to send the message immediately.
*/
	scheduling_state: MessageSchedulingState;
}

/**
Returns information about a emoji reaction. Returns a 404 error if the reaction is not found.
Request type for {@link Tdjson#getEmojiReaction}.
*/
export interface GetEmojiReaction {
	'@type': 'getEmojiReaction';
	/**
Text representation of the reaction.
*/
	emoji: string;
}

/**
Returns TGS stickers with generic animations for custom emoji reactions.
Request type for {@link Tdjson#getCustomEmojiReactionAnimations}.
*/
export interface GetCustomEmojiReactionAnimations {
	'@type': 'getCustomEmojiReactionAnimations';

}

/**
Returns reactions, which can be added to a message. The list can change after updateActiveEmojiReactions,
updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the message.
Request type for {@link Tdjson#getMessageAvailableReactions}.
*/
export interface GetMessageAvailableReactions {
	'@type': 'getMessageAvailableReactions';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Number of reaction per row, 5-25.
*/
	row_size: number;
}

/**
Clears the list of recently used reactions.
Request type for {@link Tdjson#clearRecentReactions}.
*/
export interface ClearRecentReactions {
	'@type': 'clearRecentReactions';

}

/**
Adds a reaction to a message. Use getMessageAvailableReactions to receive the list of available reactions for the
message.
Request type for {@link Tdjson#addMessageReaction}.
*/
export interface AddMessageReaction {
	'@type': 'addMessageReaction';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Type of the reaction to add.
*/
	reaction_type: ReactionType;
	/**
Pass true if the reaction is added with a big animation.
*/
	is_big?: boolean;
	/**
Pass true if the reaction needs to be added to recent reactions.
*/
	update_recent_reactions?: boolean;
}

/**
Removes a reaction from a message. A chosen reaction can always be removed.
Request type for {@link Tdjson#removeMessageReaction}.
*/
export interface RemoveMessageReaction {
	'@type': 'removeMessageReaction';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Type of the reaction to remove.
*/
	reaction_type: ReactionType;
}

/**
Returns reactions added for a message, along with their sender.
Request type for {@link Tdjson#getMessageAddedReactions}.
*/
export interface GetMessageAddedReactions {
	'@type': 'getMessageAddedReactions';
	/**
Identifier of the chat to which the message belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Type of the reactions to return; pass null to return all added reactions.
*/
	reaction_type: ReactionType;
	/**
Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of
results.
*/
	offset: string;
	/**
The maximum number of reactions to be returned; must be positive and can't be greater than 100.
*/
	limit: number;
}

/**
Changes type of default reaction for the current user.
Request type for {@link Tdjson#setDefaultReactionType}.
*/
export interface SetDefaultReactionType {
	'@type': 'setDefaultReactionType';
	/**
New type of the default reaction.
*/
	reaction_type: ReactionType;
}

/**
Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses)
contained in the text. Can be called synchronously.
Request type for {@link Tdjson#getTextEntities}.
*/
export interface GetTextEntities {
	'@type': 'getTextEntities';
	/**
The text in which to look for entites.
*/
	text: string;
}

/**
Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, Code, Pre, PreCode, TextUrl and MentionName
entities contained in the text. Can be called synchronously.
Request type for {@link Tdjson#parseTextEntities}.
*/
export interface ParseTextEntities {
	'@type': 'parseTextEntities';
	/**
The text to parse.
*/
	text: string;
	/**
Text parse mode.
*/
	parse_mode: TextParseMode;
}

/**
Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously.
Request type for {@link Tdjson#parseMarkdown}.
*/
export interface ParseMarkdown {
	'@type': 'parseMarkdown';
	/**
The text to parse. For example, "__italic__ ~~strikethrough~~ ||spoiler|| **bold** `code` ```pre``` __[italic__
text_url](telegram.org) __italic**bold italic__bold**".
*/
	text: FormattedText;
}

/**
Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in
Markdown unambiguously are kept as is. Can be called synchronously.
Request type for {@link Tdjson#getMarkdownText}.
*/
export interface GetMarkdownText {
	'@type': 'getMarkdownText';
	/**
The text.
*/
	text: FormattedText;
}

/**
Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called
synchronously.
Request type for {@link Tdjson#getFileMimeType}.
*/
export interface GetFileMimeType {
	'@type': 'getFileMimeType';
	/**
The name of the file or path to the file.
*/
	file_name: string;
}

/**
Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called
synchronously.
Request type for {@link Tdjson#getFileExtension}.
*/
export interface GetFileExtension {
	'@type': 'getFileExtension';
	/**
The MIME type of the file.
*/
	mime_type: string;
}

/**
Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8.
Returns an empty string on failure. Can be called synchronously.
Request type for {@link Tdjson#cleanFileName}.
*/
export interface CleanFileName {
	'@type': 'cleanFileName';
	/**
File name or path to the file.
*/
	file_name: string;
}

/**
Returns a string stored in the local database from the specified localization target and language pack by its key.
Returns a 404 error if the string is not found. Can be called synchronously.
Request type for {@link Tdjson#getLanguagePackString}.
*/
export interface GetLanguagePackString {
	'@type': 'getLanguagePackString';
	/**
Path to the language pack database in which strings are stored.
*/
	language_pack_database_path: string;
	/**
Localization target to which the language pack belongs.
*/
	localization_target: string;
	/**
Language pack identifier.
*/
	language_pack_id: string;
	/**
Language pack key of the string to be returned.
*/
	key: string;
}

/**
Converts a JSON-serialized string to corresponding JsonValue object. Can be called synchronously.
Request type for {@link Tdjson#getJsonValue}.
*/
export interface GetJsonValue {
	'@type': 'getJsonValue';
	/**
The JSON-serialized string.
*/
	json: string;
}

/**
Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously.
Request type for {@link Tdjson#getJsonString}.
*/
export interface GetJsonString {
	'@type': 'getJsonString';
	/**
The JsonValue object.
*/
	json_value: JsonValue;
}

/**
Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously.
Request type for {@link Tdjson#getThemeParametersJsonString}.
*/
export interface GetThemeParametersJsonString {
	'@type': 'getThemeParametersJsonString';
	/**
Theme parameters to convert to JSON.
*/
	theme: ThemeParameters;
}

/**
Changes the user answer to a poll. A poll in quiz mode can be answered only once.
Request type for {@link Tdjson#setPollAnswer}.
*/
export interface SetPollAnswer {
	'@type': 'setPollAnswer';
	/**
Identifier of the chat to which the poll belongs.
*/
	chat_id: number;
	/**
Identifier of the message containing the poll.
*/
	message_id: number;
	/**
0-based identifiers of answer options, chosen by the user. User can choose more than 1 answer option only is the poll
allows multiple answers.
*/
	option_ids: number[];
}

/**
Returns users voted for the specified option in a non-anonymous polls. For optimal performance, the number of returned
users is chosen by TDLib.
Request type for {@link Tdjson#getPollVoters}.
*/
export interface GetPollVoters {
	'@type': 'getPollVoters';
	/**
Identifier of the chat to which the poll belongs.
*/
	chat_id: number;
	/**
Identifier of the message containing the poll.
*/
	message_id: number;
	/**
0-based identifier of the answer option.
*/
	option_id: number;
	/**
Number of users to skip in the result; must be non-negative.
*/
	offset: number;
	/**
The maximum number of users to be returned; must be positive and can't be greater than 50. For optimal performance, the
number of returned users is chosen by TDLib and can be smaller than the specified limit, even if the end of the voter
list has not been reached.
*/
	limit: number;
}

/**
Stops a poll. A poll in a message can be stopped when the message has can_be_edited flag set.
Request type for {@link Tdjson#stopPoll}.
*/
export interface StopPoll {
	'@type': 'stopPoll';
	/**
Identifier of the chat to which the poll belongs.
*/
	chat_id: number;
	/**
Identifier of the message containing the poll.
*/
	message_id: number;
	/**
The new message reply markup; pass null if none; for bots only.
*/
	reply_markup: ReplyMarkup;
}

/**
Hides a suggested action.
Request type for {@link Tdjson#hideSuggestedAction}.
*/
export interface HideSuggestedAction {
	'@type': 'hideSuggestedAction';
	/**
Suggested action to hide.
*/
	action: SuggestedAction;
}

/**
Returns information about a button of type inlineKeyboardButtonTypeLoginUrl. The method needs to be called when the user
presses the button.
Request type for {@link Tdjson#getLoginUrlInfo}.
*/
export interface GetLoginUrlInfo {
	'@type': 'getLoginUrlInfo';
	/**
Chat identifier of the message with the button.
*/
	chat_id: number;
	/**
Message identifier of the message with the button.
*/
	message_id: number;
	/**
Button identifier.
*/
	button_id: number;
}

/**
Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button
of type inlineKeyboardButtonTypeLoginUrl. Use the method getLoginUrlInfo to find whether a prior user confirmation is
needed. If an error is returned, then the button must be handled as an ordinary URL button.
Request type for {@link Tdjson#getLoginUrl}.
*/
export interface GetLoginUrl {
	'@type': 'getLoginUrl';
	/**
Chat identifier of the message with the button.
*/
	chat_id: number;
	/**
Message identifier of the message with the button.
*/
	message_id: number;
	/**
Button identifier.
*/
	button_id: number;
	/**
Pass true to allow the bot to send messages to the current user.
*/
	allow_write_access?: boolean;
}

/**
Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the
query before the query timeout expires.
Request type for {@link Tdjson#getInlineQueryResults}.
*/
export interface GetInlineQueryResults {
	'@type': 'getInlineQueryResults';
	/**
The identifier of the target bot.
*/
	bot_user_id: number;
	/**
Identifier of the chat where the query was sent.
*/
	chat_id: number;
	/**
Location of the user; pass null if unknown or the bot doesn't need user's location.
*/
	user_location: Location;
	/**
Text of the query.
*/
	query: string;
	/**
Offset of the first entry to return.
*/
	offset: string;
}

/**
Sets the result of an inline query; for bots only.
Request type for {@link Tdjson#answerInlineQuery}.
*/
export interface AnswerInlineQuery {
	'@type': 'answerInlineQuery';
	/**
Identifier of the inline query.
*/
	inline_query_id: string;
	/**
Pass true if results may be cached and returned only for the user that sent the query. By default, results may be
returned to any user who sends the same query.
*/
	is_personal?: boolean;
	/**
The results of the query.
*/
	results: InputInlineQueryResult[];
	/**
Allowed time to cache the results of the query, in seconds.
*/
	cache_time: number;
	/**
Offset for the next inline query; pass an empty string if there are no more results.
*/
	next_offset: string;
	/**
If non-empty, this text must be shown on the button that opens a private chat with the bot and sends a start message to
the bot with the parameter switch_pm_parameter.
*/
	switch_pm_text: string;
	/**
The parameter for the bot start message.
*/
	switch_pm_parameter: string;
}

/**
Returns an HTTPS URL of a Web App to open after keyboardButtonTypeWebApp button is pressed.
Request type for {@link Tdjson#getWebAppUrl}.
*/
export interface GetWebAppUrl {
	'@type': 'getWebAppUrl';
	/**
Identifier of the target bot.
*/
	bot_user_id: number;
	/**
The URL from the keyboardButtonTypeWebApp button.
*/
	url: string;
	/**
Preferred Web App theme; pass null to use the default theme.
*/
	theme: ThemeParameters;
	/**
Short name of the application; 0-64 English letters, digits, and underscores.
*/
	application_name: string;
}

/**
Sends data received from a keyboardButtonTypeWebApp Web App to a bot.
Request type for {@link Tdjson#sendWebAppData}.
*/
export interface SendWebAppData {
	'@type': 'sendWebAppData';
	/**
Identifier of the target bot.
*/
	bot_user_id: number;
	/**
Text of the keyboardButtonTypeWebApp button, which opened the Web App.
*/
	button_text: string;
	/**
Received data.
*/
	data: string;
}

/**
Informs TDLib that a Web App is being opened from attachment menu, a botMenuButton button, an
internalLinkTypeAttachmentMenuBot link, or an inlineKeyboardButtonTypeWebApp button. For each bot, a confirmation alert
about data sent to the bot must be shown once.
Request type for {@link Tdjson#openWebApp}.
*/
export interface OpenWebApp {
	'@type': 'openWebApp';
	/**
Identifier of the chat in which the Web App is opened.
*/
	chat_id: number;
	/**
Identifier of the bot, providing the Web App.
*/
	bot_user_id: number;
	/**
The URL from an inlineKeyboardButtonTypeWebApp button, a botMenuButton button, or an internalLinkTypeAttachmentMenuBot
link, or an empty string otherwise.
*/
	url: string;
	/**
Preferred Web App theme; pass null to use the default theme.
*/
	theme: ThemeParameters;
	/**
Short name of the application; 0-64 English letters, digits, and underscores.
*/
	application_name: string;
	/**
Identifier of the replied message for the message sent by the Web App; 0 if none.
*/
	reply_to_message_id: number;
}

/**
Informs TDLib that a previously opened Web App was closed.
Request type for {@link Tdjson#closeWebApp}.
*/
export interface CloseWebApp {
	'@type': 'closeWebApp';
	/**
Identifier of Web App launch, received from openWebApp.
*/
	web_app_launch_id: string;
}

/**
Sets the result of interaction with a Web App and sends corresponding message on behalf of the user to the chat from
which the query originated; for bots only.
Request type for {@link Tdjson#answerWebAppQuery}.
*/
export interface AnswerWebAppQuery {
	'@type': 'answerWebAppQuery';
	/**
Identifier of the Web App query.
*/
	web_app_query_id: string;
	/**
The result of the query.
*/
	result: InputInlineQueryResult;
}

/**
Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the
query before the query timeout expires.
Request type for {@link Tdjson#getCallbackQueryAnswer}.
*/
export interface GetCallbackQueryAnswer {
	'@type': 'getCallbackQueryAnswer';
	/**
Identifier of the chat with the message.
*/
	chat_id: number;
	/**
Identifier of the message from which the query originated.
*/
	message_id: number;
	/**
Query payload.
*/
	payload: CallbackQueryPayload;
}

/**
Sets the result of a callback query; for bots only.
Request type for {@link Tdjson#answerCallbackQuery}.
*/
export interface AnswerCallbackQuery {
	'@type': 'answerCallbackQuery';
	/**
Identifier of the callback query.
*/
	callback_query_id: string;
	/**
Text of the answer.
*/
	text: string;
	/**
Pass true to show an alert to the user instead of a toast notification.
*/
	show_alert?: boolean;
	/**
URL to be opened.
*/
	url: string;
	/**
Time during which the result of the query can be cached, in seconds.
*/
	cache_time: number;
}

/**
Sets the result of a shipping query; for bots only.
Request type for {@link Tdjson#answerShippingQuery}.
*/
export interface AnswerShippingQuery {
	'@type': 'answerShippingQuery';
	/**
Identifier of the shipping query.
*/
	shipping_query_id: string;
	/**
Available shipping options.
*/
	shipping_options: ShippingOption[];
	/**
An error message, empty on success.
*/
	error_message: string;
}

/**
Sets the result of a pre-checkout query; for bots only.
Request type for {@link Tdjson#answerPreCheckoutQuery}.
*/
export interface AnswerPreCheckoutQuery {
	'@type': 'answerPreCheckoutQuery';
	/**
Identifier of the pre-checkout query.
*/
	pre_checkout_query_id: string;
	/**
An error message, empty on success.
*/
	error_message: string;
}

/**
Updates the game score of the specified user in the game; for bots only.
Request type for {@link Tdjson#setGameScore}.
*/
export interface SetGameScore {
	'@type': 'setGameScore';
	/**
The chat to which the message with the game belongs.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
Pass true to edit the game message to include the current scoreboard.
*/
	edit_message?: boolean;
	/**
User identifier.
*/
	user_id: number;
	/**
The new score.
*/
	score: number;
	/**
Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score
table.
*/
	force?: boolean;
}

/**
Updates the game score of the specified user in a game; for bots only.
Request type for {@link Tdjson#setInlineGameScore}.
*/
export interface SetInlineGameScore {
	'@type': 'setInlineGameScore';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
Pass true to edit the game message to include the current scoreboard.
*/
	edit_message?: boolean;
	/**
User identifier.
*/
	user_id: number;
	/**
The new score.
*/
	score: number;
	/**
Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score
table.
*/
	force?: boolean;
}

/**
Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots
only.
Request type for {@link Tdjson#getGameHighScores}.
*/
export interface GetGameHighScores {
	'@type': 'getGameHighScores';
	/**
The chat that contains the message with the game.
*/
	chat_id: number;
	/**
Identifier of the message.
*/
	message_id: number;
	/**
User identifier.
*/
	user_id: number;
}

/**
Returns game high scores and some part of the high score table in the range of the specified user; for bots only.
Request type for {@link Tdjson#getInlineGameHighScores}.
*/
export interface GetInlineGameHighScores {
	'@type': 'getInlineGameHighScores';
	/**
Inline message identifier.
*/
	inline_message_id: string;
	/**
User identifier.
*/
	user_id: number;
}

/**
Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a ForceReply reply markup has
been used. UpdateChatReplyMarkup will be sent if the reply markup is changed.
Request type for {@link Tdjson#deleteChatReplyMarkup}.
*/
export interface DeleteChatReplyMarkup {
	'@type': 'deleteChatReplyMarkup';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The message identifier of the used keyboard.
*/
	message_id: number;
}

/**
Sends a notification about user activity in a chat.
Request type for {@link Tdjson#sendChatAction}.
*/
export interface SendChatAction {
	'@type': 'sendChatAction';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the action was performed.
*/
	message_thread_id: number;
	/**
The action description; pass null to cancel the currently active action.
*/
	action: ChatAction;
}

/**
Informs TDLib that the chat is opened by the user. Many useful activities depend on the chat being opened or closed
(e.g., in supergroups and channels all updates are received only for opened chats).
Request type for {@link Tdjson#openChat}.
*/
export interface OpenChat {
	'@type': 'openChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Informs TDLib that the chat is closed by the user. Many useful activities depend on the chat being opened or closed.
Request type for {@link Tdjson#closeChat}.
*/
export interface CloseChat {
	'@type': 'closeChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Informs TDLib that messages are being viewed by the user. Sponsored messages must be marked as viewed only when the
entire text of the message is shown on the screen (excluding the button). Many useful activities depend on whether the
messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view
counter, removing deleted messages in supergroups and channels).
Request type for {@link Tdjson#viewMessages}.
*/
export interface ViewMessages {
	'@type': 'viewMessages';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the messages are being viewed.
*/
	message_thread_id: number;
	/**
The identifiers of the messages being viewed.
*/
	message_ids: number[];
	/**
Pass true to mark as read the specified messages even the chat is closed.
*/
	force_read?: boolean;
}

/**
Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or
venue, or has listened to an audio file or voice note message). An updateMessageContentOpened update will be generated
if something has changed.
Request type for {@link Tdjson#openMessageContent}.
*/
export interface OpenMessageContent {
	'@type': 'openMessageContent';
	/**
Chat identifier of the message.
*/
	chat_id: number;
	/**
Identifier of the message with the opened content.
*/
	message_id: number;
}

/**
Informs TDLib that a message with an animated emoji was clicked by the user. Returns a big animated sticker to be played
or a 404 error if usual animation needs to be played.
Request type for {@link Tdjson#clickAnimatedEmojiMessage}.
*/
export interface ClickAnimatedEmojiMessage {
	'@type': 'clickAnimatedEmojiMessage';
	/**
Chat identifier of the message.
*/
	chat_id: number;
	/**
Identifier of the clicked message.
*/
	message_id: number;
}

/**
Returns information about the type of an internal link. Returns a 404 error if the link is not internal. Can be called
before authorization.
Request type for {@link Tdjson#getInternalLinkType}.
*/
export interface GetInternalLinkType {
	'@type': 'getInternalLinkType';
	/**
The link.
*/
	link: string;
}

/**
Returns information about an action to be done when the current user clicks an external link. Don't use this method for
links from secret chats if web page preview is disabled in secret chats.
Request type for {@link Tdjson#getExternalLinkInfo}.
*/
export interface GetExternalLinkInfo {
	'@type': 'getExternalLinkInfo';
	/**
The link.
*/
	link: string;
}

/**
Returns an HTTP URL which can be used to automatically authorize the current user on a website after clicking an HTTP
link. Use the method getExternalLinkInfo to find whether a prior user confirmation is needed.
Request type for {@link Tdjson#getExternalLink}.
*/
export interface GetExternalLink {
	'@type': 'getExternalLink';
	/**
The HTTP link.
*/
	link: string;
	/**
Pass true if the current user allowed the bot, returned in getExternalLinkInfo, to send them messages.
*/
	allow_write_access?: boolean;
}

/**
Marks all mentions in a chat as read.
Request type for {@link Tdjson#readAllChatMentions}.
*/
export interface ReadAllChatMentions {
	'@type': 'readAllChatMentions';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Marks all reactions in a chat as read.
Request type for {@link Tdjson#readAllChatReactions}.
*/
export interface ReadAllChatReactions {
	'@type': 'readAllChatReactions';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Returns an existing chat corresponding to a given user.
Request type for {@link Tdjson#createPrivateChat}.
*/
export interface CreatePrivateChat {
	'@type': 'createPrivateChat';
	/**
User identifier.
*/
	user_id: number;
	/**
Pass true to create the chat without a network request. In this case all information about the chat except its type,
title and photo can be incorrect.
*/
	force?: boolean;
}

/**
Returns an existing chat corresponding to a known basic group.
Request type for {@link Tdjson#createBasicGroupChat}.
*/
export interface CreateBasicGroupChat {
	'@type': 'createBasicGroupChat';
	/**
Basic group identifier.
*/
	basic_group_id: number;
	/**
Pass true to create the chat without a network request. In this case all information about the chat except its type,
title and photo can be incorrect.
*/
	force?: boolean;
}

/**
Returns an existing chat corresponding to a known supergroup or channel.
Request type for {@link Tdjson#createSupergroupChat}.
*/
export interface CreateSupergroupChat {
	'@type': 'createSupergroupChat';
	/**
Supergroup or channel identifier.
*/
	supergroup_id: number;
	/**
Pass true to create the chat without a network request. In this case all information about the chat except its type,
title and photo can be incorrect.
*/
	force?: boolean;
}

/**
Returns an existing chat corresponding to a known secret chat.
Request type for {@link Tdjson#createSecretChat}.
*/
export interface CreateSecretChat {
	'@type': 'createSecretChat';
	/**
Secret chat identifier.
*/
	secret_chat_id: number;
}

/**
Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns the newly created chat.
Request type for {@link Tdjson#createNewBasicGroupChat}.
*/
export interface CreateNewBasicGroupChat {
	'@type': 'createNewBasicGroupChat';
	/**
Identifiers of users to be added to the basic group.
*/
	user_ids: number[];
	/**
Title of the new basic group; 1-128 characters.
*/
	title: string;
}

/**
Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created
chat.
Request type for {@link Tdjson#createNewSupergroupChat}.
*/
export interface CreateNewSupergroupChat {
	'@type': 'createNewSupergroupChat';
	/**
Title of the new chat; 1-128 characters.
*/
	title: string;
	/**
Pass true to create a channel chat.
*/
	is_channel?: boolean;
	/**
Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created
chat.
*/
	description: string;
	/**
Chat location if a location-based supergroup is being created; pass null to create an ordinary supergroup chat.
*/
	location: ChatLocation;
	/**
Pass true to create a supergroup for importing messages using importMessage.
*/
	for_import?: boolean;
}

/**
Creates a new secret chat. Returns the newly created chat.
Request type for {@link Tdjson#createNewSecretChat}.
*/
export interface CreateNewSecretChat {
	'@type': 'createNewSecretChat';
	/**
Identifier of the target user.
*/
	user_id: number;
}

/**
Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and
messageChatUpgradeFrom; requires creator privileges. Deactivates the original basic group.
Request type for {@link Tdjson#upgradeBasicGroupChatToSupergroupChat}.
*/
export interface UpgradeBasicGroupChatToSupergroupChat {
	'@type': 'upgradeBasicGroupChatToSupergroupChat';
	/**
Identifier of the chat to upgrade.
*/
	chat_id: number;
}

/**
Returns chat lists to which the chat can be added. This is an offline request.
Request type for {@link Tdjson#getChatListsToAddChat}.
*/
export interface GetChatListsToAddChat {
	'@type': 'getChatListsToAddChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat lists, so it is automatically
removed from another one if needed.
Request type for {@link Tdjson#addChatToList}.
*/
export interface AddChatToList {
	'@type': 'addChatToList';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The chat list. Use getChatListsToAddChat to get suitable chat lists.
*/
	chat_list: ChatList;
}

/**
Returns information about a chat filter by its identifier.
Request type for {@link Tdjson#getChatFilter}.
*/
export interface GetChatFilter {
	'@type': 'getChatFilter';
	/**
Chat filter identifier.
*/
	chat_filter_id: number;
}

/**
Creates new chat filter. Returns information about the created chat filter. There can be up to
GetOption("chat_filter_count_max") chat filters, but the limit can be increased with Telegram Premium.
Request type for {@link Tdjson#createChatFilter}.
*/
export interface CreateChatFilter {
	'@type': 'createChatFilter';
	/**
Chat filter.
*/
	filter: ChatFilter;
}

/**
Edits existing chat filter. Returns information about the edited chat filter.
Request type for {@link Tdjson#editChatFilter}.
*/
export interface EditChatFilter {
	'@type': 'editChatFilter';
	/**
Chat filter identifier.
*/
	chat_filter_id: number;
	/**
The edited chat filter.
*/
	filter: ChatFilter;
}

/**
Deletes existing chat filter.
Request type for {@link Tdjson#deleteChatFilter}.
*/
export interface DeleteChatFilter {
	'@type': 'deleteChatFilter';
	/**
Chat filter identifier.
*/
	chat_filter_id: number;
}

/**
Changes the order of chat filters.
Request type for {@link Tdjson#reorderChatFilters}.
*/
export interface ReorderChatFilters {
	'@type': 'reorderChatFilters';
	/**
Identifiers of chat filters in the new correct order.
*/
	chat_filter_ids: number[];
	/**
Position of the main chat list among chat filters, 0-based. Can be non-zero only for Premium users.
*/
	main_chat_list_position: number;
}

/**
Returns recommended chat filters for the current user.
Request type for {@link Tdjson#getRecommendedChatFilters}.
*/
export interface GetRecommendedChatFilters {
	'@type': 'getRecommendedChatFilters';

}

/**
Returns default icon name for a filter. Can be called synchronously.
Request type for {@link Tdjson#getChatFilterDefaultIconName}.
*/
export interface GetChatFilterDefaultIconName {
	'@type': 'getChatFilterDefaultIconName';
	/**
Chat filter.
*/
	filter: ChatFilter;
}

/**
Changes the chat title. Supported only for basic groups, supergroups and channels. Requires can_change_info
administrator right.
Request type for {@link Tdjson#setChatTitle}.
*/
export interface SetChatTitle {
	'@type': 'setChatTitle';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New title of the chat; 1-128 characters.
*/
	title: string;
}

/**
Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires can_change_info
administrator right.
Request type for {@link Tdjson#setChatPhoto}.
*/
export interface SetChatPhoto {
	'@type': 'setChatPhoto';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New chat photo; pass null to delete the chat photo.
*/
	photo: InputChatPhoto;
}

/**
Changes the message TTL in a chat. Requires can_delete_messages administrator right in basic groups, supergroups and
channels Message TTL can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).
Request type for {@link Tdjson#setChatMessageTtl}.
*/
export interface SetChatMessageTtl {
	'@type': 'setChatMessageTtl';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New TTL value, in seconds; unless the chat is secret, it must be from 0 up to 365 * 86400 and be divisible by 86400.
*/
	ttl: number;
}

/**
Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members
administrator right.
Request type for {@link Tdjson#setChatPermissions}.
*/
export interface SetChatPermissions {
	'@type': 'setChatPermissions';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New non-administrator members permissions in the chat.
*/
	permissions: ChatPermissions;
}

/**
Changes the chat theme. Supported only in private and secret chats.
Request type for {@link Tdjson#setChatTheme}.
*/
export interface SetChatTheme {
	'@type': 'setChatTheme';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Name of the new chat theme; pass an empty string to return the default theme.
*/
	theme_name: string;
}

/**
Changes the draft message in a chat.
Request type for {@link Tdjson#setChatDraftMessage}.
*/
export interface SetChatDraftMessage {
	'@type': 'setChatDraftMessage';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
If not 0, a message thread identifier in which the draft was changed.
*/
	message_thread_id: number;
	/**
New draft message; pass null to remove the draft.
*/
	draft_message: DraftMessage;
}

/**
Changes the notification settings of a chat. Notification settings of a chat with the current user (Saved Messages)
can't be changed.
Request type for {@link Tdjson#setChatNotificationSettings}.
*/
export interface SetChatNotificationSettings {
	'@type': 'setChatNotificationSettings';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New notification settings for the chat. If the chat is muted for more than 366 days, it is considered to be muted
forever.
*/
	notification_settings: ChatNotificationSettings;
}

/**
Changes the ability of users to save, forward, or copy chat content. Supported only for basic groups, supergroups and
channels. Requires owner privileges.
Request type for {@link Tdjson#toggleChatHasProtectedContent}.
*/
export interface ToggleChatHasProtectedContent {
	'@type': 'toggleChatHasProtectedContent';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of has_protected_content.
*/
	has_protected_content?: boolean;
}

/**
Changes the marked as unread state of a chat.
Request type for {@link Tdjson#toggleChatIsMarkedAsUnread}.
*/
export interface ToggleChatIsMarkedAsUnread {
	'@type': 'toggleChatIsMarkedAsUnread';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of is_marked_as_unread.
*/
	is_marked_as_unread?: boolean;
}

/**
Changes the value of the default disable_notification parameter, used when a message is sent to a chat.
Request type for {@link Tdjson#toggleChatDefaultDisableNotification}.
*/
export interface ToggleChatDefaultDisableNotification {
	'@type': 'toggleChatDefaultDisableNotification';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of default_disable_notification.
*/
	default_disable_notification?: boolean;
}

/**
Changes reactions, available in a chat. Available for basic groups, supergroups, and channels. Requires can_change_info
administrator right.
Request type for {@link Tdjson#setChatAvailableReactions}.
*/
export interface SetChatAvailableReactions {
	'@type': 'setChatAvailableReactions';
	/**
Identifier of the chat.
*/
	chat_id: number;
	/**
Reactions available in the chat. All emoji reactions must be active.
*/
	available_reactions: ChatAvailableReactions;
}

/**
Changes application-specific data associated with a chat.
Request type for {@link Tdjson#setChatClientData}.
*/
export interface SetChatClientData {
	'@type': 'setChatClientData';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New value of client_data.
*/
	client_data: string;
}

/**
Changes information about a chat. Available for basic groups, supergroups, and channels. Requires can_change_info
administrator right.
Request type for {@link Tdjson#setChatDescription}.
*/
export interface SetChatDescription {
	'@type': 'setChatDescription';
	/**
Identifier of the chat.
*/
	chat_id: number;
	/**
Changes information about a chat. Available for basic groups, supergroups, and channels. Requires can_change_info
administrator right.
*/
	description: string;
}

/**
Changes the discussion group of a channel chat; requires can_change_info administrator right in the channel if it is
specified.
Request type for {@link Tdjson#setChatDiscussionGroup}.
*/
export interface SetChatDiscussionGroup {
	'@type': 'setChatDiscussionGroup';
	/**
Identifier of the channel chat. Pass 0 to remove a link from the supergroup passed in the second argument to a linked
channel chat (requires can_pin_messages rights in the supergroup).
*/
	chat_id: number;
	/**
Identifier of a new channel's discussion group. Use 0 to remove the discussion group. Use the method
getSuitableDiscussionChats to find all suitable groups. Basic group chats must be first upgraded to supergroup chats. If
new chat members don't have access to old messages in the supergroup, then toggleSupergroupIsAllHistoryAvailable must be
used first to change that.
*/
	discussion_chat_id: number;
}

/**
Changes the location of a chat. Available only for some location-based supergroups, use
supergroupFullInfo.can_set_location to check whether the method is allowed to use.
Request type for {@link Tdjson#setChatLocation}.
*/
export interface SetChatLocation {
	'@type': 'setChatLocation';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New location for the chat; must be valid and not null.
*/
	location: ChatLocation;
}

/**
Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members rights.
Request type for {@link Tdjson#setChatSlowModeDelay}.
*/
export interface SetChatSlowModeDelay {
	'@type': 'setChatSlowModeDelay';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
New slow mode delay for the chat, in seconds; must be one of 0, 10, 30, 60, 300, 900, 3600.
*/
	slow_mode_delay: number;
}

/**
Pins a message in a chat; requires can_pin_messages rights or can_edit_messages rights in the channel.
Request type for {@link Tdjson#pinChatMessage}.
*/
export interface PinChatMessage {
	'@type': 'pinChatMessage';
	/**
Identifier of the chat.
*/
	chat_id: number;
	/**
Identifier of the new pinned message.
*/
	message_id: number;
	/**
Pass true to disable notification about the pinned message. Notifications are always disabled in channels and private
chats.
*/
	disable_notification?: boolean;
	/**
Pass true to pin the message only for self; private chats only.
*/
	only_for_self?: boolean;
}

/**
Removes a pinned message from a chat; requires can_pin_messages rights in the group or can_edit_messages rights in the
channel.
Request type for {@link Tdjson#unpinChatMessage}.
*/
export interface UnpinChatMessage {
	'@type': 'unpinChatMessage';
	/**
Identifier of the chat.
*/
	chat_id: number;
	/**
Identifier of the removed pinned message.
*/
	message_id: number;
}

/**
Removes all pinned messages from a chat; requires can_pin_messages rights in the group or can_edit_messages rights in
the channel.
Request type for {@link Tdjson#unpinAllChatMessages}.
*/
export interface UnpinAllChatMessages {
	'@type': 'unpinAllChatMessages';
	/**
Identifier of the chat.
*/
	chat_id: number;
}

/**
Adds the current user as a new member to a chat. Private and secret chats can't be joined using this method. May return
an error with a message "INVITE_REQUEST_SENT" if only a join request was created.
Request type for {@link Tdjson#joinChat}.
*/
export interface JoinChat {
	'@type': 'joinChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Removes the current user from chat members. Private and secret chats can't be left using this method.
Request type for {@link Tdjson#leaveChat}.
*/
export interface LeaveChat {
	'@type': 'leaveChat';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Adds a new member to a chat. Members can't be added to private or secret chats.
Request type for {@link Tdjson#addChatMember}.
*/
export interface AddChatMember {
	'@type': 'addChatMember';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the user.
*/
	user_id: number;
	/**
The number of earlier messages from the chat to be forwarded to the new member; up to 100. Ignored for supergroups and
channels, or if the added user is a bot.
*/
	forward_limit: number;
}

/**
Adds multiple new members to a chat. Currently, this method is only available for supergroups and channels. This method
can't be used to join a chat. Members can't be added to a channel if it has more than 200 members.
Request type for {@link Tdjson#addChatMembers}.
*/
export interface AddChatMembers {
	'@type': 'addChatMembers';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifiers of the users to be added to the chat. The maximum number of added users is 20 for supergroups and 100 for
channels.
*/
	user_ids: number[];
}

/**
Changes the status of a chat member, needs appropriate privileges. This function is currently not suitable for
transferring chat ownership; use transferChatOwnership instead. Use addChatMember or banChatMember if some additional
parameters needs to be passed.
Request type for {@link Tdjson#setChatMemberStatus}.
*/
export interface SetChatMemberStatus {
	'@type': 'setChatMemberStatus';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Member identifier. Chats can be only banned and unbanned in supergroups and channels.
*/
	member_id: MessageSender;
	/**
The new status of the member in the chat.
*/
	status: ChatMemberStatus;
}

/**
Bans a member in a chat. Members can't be banned in private or secret chats. In supergroups and channels, the user will
not be able to return to the group on their own using invite links, etc., unless unbanned first.
Request type for {@link Tdjson#banChatMember}.
*/
export interface BanChatMember {
	'@type': 'banChatMember';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Member identifier.
*/
	member_id: MessageSender;
	/**
Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days
or for less than 30 seconds from the current time, the user is considered to be banned forever. Ignored in basic groups
and if a chat is banned.
*/
	banned_until_date: number;
	/**
Pass true to delete all messages in the chat for the user that is being removed. Always true for supergroups and
channels.
*/
	revoke_messages?: boolean;
}

/**
Checks whether the current session can be used to transfer a chat ownership to another user.
Request type for {@link Tdjson#canTransferOwnership}.
*/
export interface CanTransferOwnership {
	'@type': 'canTransferOwnership';

}

/**
Changes the owner of a chat. The current user must be a current owner of the chat. Use the method canTransferOwnership
to check whether the ownership can be transferred from the current session. Available only for supergroups and channel
chats.
Request type for {@link Tdjson#transferChatOwnership}.
*/
export interface TransferChatOwnership {
	'@type': 'transferChatOwnership';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the user to which transfer the ownership. The ownership can't be transferred to a bot or to a deleted
user.
*/
	user_id: number;
	/**
The 2-step verification password of the current user.
*/
	password: string;
}

/**
Returns information about a single member of a chat.
Request type for {@link Tdjson#getChatMember}.
*/
export interface GetChatMember {
	'@type': 'getChatMember';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Member identifier.
*/
	member_id: MessageSender;
}

/**
Searches for a specified query in the first name, last name and username of the members of a specified chat. Requires
administrator rights in channels.
Request type for {@link Tdjson#searchChatMembers}.
*/
export interface SearchChatMembers {
	'@type': 'searchChatMembers';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Query to search for.
*/
	query: string;
	/**
The maximum number of users to be returned; up to 200.
*/
	limit: number;
	/**
The type of users to search for; pass null to search among all chat members.
*/
	filter: ChatMembersFilter;
}

/**
Returns a list of administrators of the chat with their custom titles.
Request type for {@link Tdjson#getChatAdministrators}.
*/
export interface GetChatAdministrators {
	'@type': 'getChatAdministrators';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Clears message drafts in all chats.
Request type for {@link Tdjson#clearAllDraftMessages}.
*/
export interface ClearAllDraftMessages {
	'@type': 'clearAllDraftMessages';
	/**
Pass true to keep local message drafts in secret chats.
*/
	exclude_secret_chats?: boolean;
}

/**
Returns saved notification sound by its identifier. Returns a 404 error if there is no saved notification sound with the
specified identifier.
Request type for {@link Tdjson#getSavedNotificationSound}.
*/
export interface GetSavedNotificationSound {
	'@type': 'getSavedNotificationSound';
	/**
Identifier of the notification sound.
*/
	notification_sound_id: string;
}

/**
Returns list of saved notification sounds. If a sound isn't in the list, then default sound needs to be used.
Request type for {@link Tdjson#getSavedNotificationSounds}.
*/
export interface GetSavedNotificationSounds {
	'@type': 'getSavedNotificationSounds';

}

/**
Adds a new notification sound to the list of saved notification sounds. The new notification sound is added to the top
of the list. If it is already in the list, its position isn't changed.
Request type for {@link Tdjson#addSavedNotificationSound}.
*/
export interface AddSavedNotificationSound {
	'@type': 'addSavedNotificationSound';
	/**
Notification sound file to add.
*/
	sound: InputFile;
}

/**
Removes a notification sound from the list of saved notification sounds.
Request type for {@link Tdjson#removeSavedNotificationSound}.
*/
export interface RemoveSavedNotificationSound {
	'@type': 'removeSavedNotificationSound';
	/**
Identifier of the notification sound.
*/
	notification_sound_id: string;
}

/**
Returns list of chats with non-default notification settings.
Request type for {@link Tdjson#getChatNotificationSettingsExceptions}.
*/
export interface GetChatNotificationSettingsExceptions {
	'@type': 'getChatNotificationSettingsExceptions';
	/**
If specified, only chats from the scope will be returned; pass null to return chats from all scopes.
*/
	scope: NotificationSettingsScope;
	/**
Pass true to include in the response chats with only non-default sound.
*/
	compare_sound?: boolean;
}

/**
Returns the notification settings for chats of a given type.
Request type for {@link Tdjson#getScopeNotificationSettings}.
*/
export interface GetScopeNotificationSettings {
	'@type': 'getScopeNotificationSettings';
	/**
Types of chats for which to return the notification settings information.
*/
	scope: NotificationSettingsScope;
}

/**
Changes notification settings for chats of a given type.
Request type for {@link Tdjson#setScopeNotificationSettings}.
*/
export interface SetScopeNotificationSettings {
	'@type': 'setScopeNotificationSettings';
	/**
Types of chats for which to change the notification settings.
*/
	scope: NotificationSettingsScope;
	/**
The new notification settings for the given scope.
*/
	notification_settings: ScopeNotificationSettings;
}

/**
Resets all notification settings to their default values. By default, all chats are unmuted and message previews are
shown.
Request type for {@link Tdjson#resetAllNotificationSettings}.
*/
export interface ResetAllNotificationSettings {
	'@type': 'resetAllNotificationSettings';

}

/**
Changes the pinned state of a chat. There can be up to
GetOption("pinned_chat_count_max")/GetOption("pinned_archived_chat_count_max") pinned non-secret chats and the same
number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium.
Request type for {@link Tdjson#toggleChatIsPinned}.
*/
export interface ToggleChatIsPinned {
	'@type': 'toggleChatIsPinned';
	/**
Chat list in which to change the pinned state of the chat.
*/
	chat_list: ChatList;
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Pass true to pin the chat; pass false to unpin it.
*/
	is_pinned?: boolean;
}

/**
Changes the order of pinned chats.
Request type for {@link Tdjson#setPinnedChats}.
*/
export interface SetPinnedChats {
	'@type': 'setPinnedChats';
	/**
Chat list in which to change the order of pinned chats.
*/
	chat_list: ChatList;
	/**
The new list of pinned chats.
*/
	chat_ids: number[];
}

/**
Returns information about a bot that can be added to attachment menu.
Request type for {@link Tdjson#getAttachmentMenuBot}.
*/
export interface GetAttachmentMenuBot {
	'@type': 'getAttachmentMenuBot';
	/**
Bot's user identifier.
*/
	bot_user_id: number;
}

/**
Adds or removes a bot to attachment menu. Bot can be added to attachment menu, only if
userTypeBot.can_be_added_to_attachment_menu == true.
Request type for {@link Tdjson#toggleBotIsAddedToAttachmentMenu}.
*/
export interface ToggleBotIsAddedToAttachmentMenu {
	'@type': 'toggleBotIsAddedToAttachmentMenu';
	/**
Bot's user identifier.
*/
	bot_user_id: number;
	/**
Pass true to add the bot to attachment menu; pass false to remove the bot from attachment menu.
*/
	is_added?: boolean;
}

/**
Returns up to 8 themed emoji statuses, which color must be changed to the color of the Telegram Premium badge.
Request type for {@link Tdjson#getThemedEmojiStatuses}.
*/
export interface GetThemedEmojiStatuses {
	'@type': 'getThemedEmojiStatuses';

}

/**
Returns recent emoji statuses.
Request type for {@link Tdjson#getRecentEmojiStatuses}.
*/
export interface GetRecentEmojiStatuses {
	'@type': 'getRecentEmojiStatuses';

}

/**
Returns default emoji statuses.
Request type for {@link Tdjson#getDefaultEmojiStatuses}.
*/
export interface GetDefaultEmojiStatuses {
	'@type': 'getDefaultEmojiStatuses';

}

/**
Clears the list of recently used emoji statuses.
Request type for {@link Tdjson#clearRecentEmojiStatuses}.
*/
export interface ClearRecentEmojiStatuses {
	'@type': 'clearRecentEmojiStatuses';

}

/**
Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile
updates.
Request type for {@link Tdjson#downloadFile}.
*/
export interface DownloadFile {
	'@type': 'downloadFile';
	/**
Identifier of the file to download.
*/
	file_id: number;
	/**
Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of
two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first.
*/
	priority: number;
	/**
The starting position from which the file needs to be downloaded.
*/
	offset: number;
	/**
Number of bytes which need to be downloaded starting from the "offset" position before the download will automatically
be canceled; use 0 to download without a limit.
*/
	limit: number;
	/**
Pass true to return response only after the file download has succeeded, has failed, has been canceled, or a new
downloadFile request with different offset/limit parameters was sent; pass false to return file state immediately, just
after the download has been started.
*/
	synchronous?: boolean;
}

/**
Returns file downloaded prefix size from a given offset, in bytes.
Request type for {@link Tdjson#getFileDownloadedPrefixSize}.
*/
export interface GetFileDownloadedPrefixSize {
	'@type': 'getFileDownloadedPrefixSize';
	/**
Identifier of the file.
*/
	file_id: number;
	/**
Offset from which downloaded prefix size needs to be calculated.
*/
	offset: number;
}

/**
Stops the downloading of a file. If a file has already been downloaded, does nothing.
Request type for {@link Tdjson#cancelDownloadFile}.
*/
export interface CancelDownloadFile {
	'@type': 'cancelDownloadFile';
	/**
Identifier of a file to stop downloading.
*/
	file_id: number;
	/**
Pass true to stop downloading only if it hasn't been started, i.e. request hasn't been sent to server.
*/
	only_if_pending?: boolean;
}

/**
Returns suggested name for saving a file in a given directory.
Request type for {@link Tdjson#getSuggestedFileName}.
*/
export interface GetSuggestedFileName {
	'@type': 'getSuggestedFileName';
	/**
Identifier of the file.
*/
	file_id: number;
	/**
Directory in which the file is supposed to be saved.
*/
	directory: string;
}

/**
Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being
recorded voice and video notes. Updates updateFile will be used to notify about upload progress and successful
completion of the upload. The file will not have a persistent remote identifier until it will be sent in a message.
Request type for {@link Tdjson#preliminaryUploadFile}.
*/
export interface PreliminaryUploadFile {
	'@type': 'preliminaryUploadFile';
	/**
File to upload.
*/
	file: InputFile;
	/**
File type; pass null if unknown.
*/
	file_type: FileType;
	/**
Priority of the upload (1-32). The higher the priority, the earlier the file will be uploaded. If the priorities of two
files are equal, then the first one for which preliminaryUploadFile was called will be uploaded first.
*/
	priority: number;
}

/**
Stops the preliminary uploading of a file. Supported only for files uploaded by using preliminaryUploadFile. For other
files the behavior is undefined.
Request type for {@link Tdjson#cancelPreliminaryUploadFile}.
*/
export interface CancelPreliminaryUploadFile {
	'@type': 'cancelPreliminaryUploadFile';
	/**
Identifier of the file to stop uploading.
*/
	file_id: number;
}

/**
Writes a part of a generated file. This method is intended to be used only if the application has no direct access to
TDLib's file system, because it is usually slower than a direct write to the destination file.
Request type for {@link Tdjson#writeGeneratedFilePart}.
*/
export interface WriteGeneratedFilePart {
	'@type': 'writeGeneratedFilePart';
	/**
The identifier of the generation process.
*/
	generation_id: string;
	/**
The offset from which to write the data to the file.
*/
	offset: number;
	/**
The data to write.
*/
	data: string;
}

/**
Informs TDLib on a file generation progress.
Request type for {@link Tdjson#setFileGenerationProgress}.
*/
export interface SetFileGenerationProgress {
	'@type': 'setFileGenerationProgress';
	/**
The identifier of the generation process.
*/
	generation_id: string;
	/**
Expected size of the generated file, in bytes; 0 if unknown.
*/
	expected_size: number;
	/**
The number of bytes already generated.
*/
	local_prefix_size: number;
}

/**
Finishes the file generation.
Request type for {@link Tdjson#finishFileGeneration}.
*/
export interface FinishFileGeneration {
	'@type': 'finishFileGeneration';
	/**
The identifier of the generation process.
*/
	generation_id: string;
	/**
If passed, the file generation has failed and must be terminated; pass null if the file generation succeeded.
*/
	error: Error;
}

/**
Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the
application has no direct access to TDLib's file system, because it is usually slower than a direct read from the file.
Request type for {@link Tdjson#readFilePart}.
*/
export interface ReadFilePart {
	'@type': 'readFilePart';
	/**
Identifier of the file. The file must be located in the TDLib file cache.
*/
	file_id: number;
	/**
The offset from which to read the file.
*/
	offset: number;
	/**
Number of bytes to read. An error will be returned if there are not enough bytes available in the file from the
specified position. Pass 0 to read all available data from the specified position.
*/
	count: number;
}

/**
Deletes a file from the TDLib file cache.
Request type for {@link Tdjson#deleteFile}.
*/
export interface DeleteFile {
	'@type': 'deleteFile';
	/**
Identifier of the file to delete.
*/
	file_id: number;
}

/**
Adds a file from a message to the list of file downloads. Download progress and completion of the download will be
notified through updateFile updates. If message database is used, the list of file downloads is persistent across
application restarts. The downloading is independent from download using downloadFile, i.e. it continues if downloadFile
is canceled or is used to download a part of the file.
Request type for {@link Tdjson#addFileToDownloads}.
*/
export interface AddFileToDownloads {
	'@type': 'addFileToDownloads';
	/**
Identifier of the file to download.
*/
	file_id: number;
	/**
Chat identifier of the message with the file.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of
two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first.
*/
	priority: number;
}

/**
Changes pause state of a file in the file download list.
Request type for {@link Tdjson#toggleDownloadIsPaused}.
*/
export interface ToggleDownloadIsPaused {
	'@type': 'toggleDownloadIsPaused';
	/**
Identifier of the downloaded file.
*/
	file_id: number;
	/**
Pass true if the download is paused.
*/
	is_paused?: boolean;
}

/**
Changes pause state of all files in the file download list.
Request type for {@link Tdjson#toggleAllDownloadsArePaused}.
*/
export interface ToggleAllDownloadsArePaused {
	'@type': 'toggleAllDownloadsArePaused';
	/**
Pass true to pause all downloads; pass false to unpause them.
*/
	are_paused?: boolean;
}

/**
Removes a file from the file download list.
Request type for {@link Tdjson#removeFileFromDownloads}.
*/
export interface RemoveFileFromDownloads {
	'@type': 'removeFileFromDownloads';
	/**
Identifier of the downloaded file.
*/
	file_id: number;
	/**
Pass true to delete the file from the TDLib file cache.
*/
	delete_from_cache?: boolean;
}

/**
Removes all files from the file download list.
Request type for {@link Tdjson#removeAllFilesFromDownloads}.
*/
export interface RemoveAllFilesFromDownloads {
	'@type': 'removeAllFilesFromDownloads';
	/**
Pass true to remove only active downloads, including paused.
*/
	only_active?: boolean;
	/**
Pass true to remove only completed downloads.
*/
	only_completed?: boolean;
	/**
Pass true to delete the file from the TDLib file cache.
*/
	delete_from_cache?: boolean;
}

/**
Searches for files in the file download list or recently downloaded files from the list.
Request type for {@link Tdjson#searchFileDownloads}.
*/
export interface SearchFileDownloads {
	'@type': 'searchFileDownloads';
	/**
Query to search for; may be empty to return all downloaded files.
*/
	query: string;
	/**
Pass true to search only for active downloads, including paused.
*/
	only_active?: boolean;
	/**
Pass true to search only for completed downloads.
*/
	only_completed?: boolean;
	/**
Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of
results.
*/
	offset: string;
	/**
The maximum number of files to be returned.
*/
	limit: number;
}

/**
Returns information about a file with messages exported from another application.
Request type for {@link Tdjson#getMessageFileType}.
*/
export interface GetMessageFileType {
	'@type': 'getMessageFileType';
	/**
Beginning of the message file; up to 100 first lines.
*/
	message_file_head: string;
}

/**
Returns a confirmation text to be shown to the user before starting message import.
Request type for {@link Tdjson#getMessageImportConfirmationText}.
*/
export interface GetMessageImportConfirmationText {
	'@type': 'getMessageImportConfirmationText';
	/**
Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual
contact or an identifier of a supergroup chat with can_change_info administrator right.
*/
	chat_id: number;
}

/**
Imports messages exported from another app.
Request type for {@link Tdjson#importMessages}.
*/
export interface ImportMessages {
	'@type': 'importMessages';
	/**
Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual
contact or an identifier of a supergroup chat with can_change_info administrator right.
*/
	chat_id: number;
	/**
File with messages to import. Only inputFileLocal and inputFileGenerated are supported. The file must not be previously
uploaded.
*/
	message_file: InputFile;
	/**
Files used in the imported messages. Only inputFileLocal and inputFileGenerated are supported. The files must not be
previously uploaded.
*/
	attached_files: InputFile[];
}

/**
Replaces current primary invite link for a chat with a new primary invite link. Available for basic groups, supergroups,
and channels. Requires administrator privileges and can_invite_users right.
Request type for {@link Tdjson#replacePrimaryChatInviteLink}.
*/
export interface ReplacePrimaryChatInviteLink {
	'@type': 'replacePrimaryChatInviteLink';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Creates a new invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator
privileges and can_invite_users right in the chat.
Request type for {@link Tdjson#createChatInviteLink}.
*/
export interface CreateChatInviteLink {
	'@type': 'createChatInviteLink';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link name; 0-32 characters.
*/
	name: string;
	/**
Point in time (Unix timestamp) when the link will expire; pass 0 if never.
*/
	expiration_date: number;
	/**
The maximum number of chat members that can join the chat via the link simultaneously; 0-99999; pass 0 if not limited.
*/
	member_limit: number;
	/**
Pass true if users joining the chat via the link need to be approved by chat administrators. In this case, member_limit
must be 0.
*/
	creates_join_request?: boolean;
}

/**
Edits a non-primary invite link for a chat. Available for basic groups, supergroups, and channels. Requires
administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links.
Request type for {@link Tdjson#editChatInviteLink}.
*/
export interface EditChatInviteLink {
	'@type': 'editChatInviteLink';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link to be edited.
*/
	invite_link: string;
	/**
Invite link name; 0-32 characters.
*/
	name: string;
	/**
Point in time (Unix timestamp) when the link will expire; pass 0 if never.
*/
	expiration_date: number;
	/**
The maximum number of chat members that can join the chat via the link simultaneously; 0-99999; pass 0 if not limited.
*/
	member_limit: number;
	/**
Pass true if users joining the chat via the link need to be approved by chat administrators. In this case, member_limit
must be 0.
*/
	creates_join_request?: boolean;
}

/**
Returns information about an invite link. Requires administrator privileges and can_invite_users right in the chat to
get own links and owner privileges to get other links.
Request type for {@link Tdjson#getChatInviteLink}.
*/
export interface GetChatInviteLink {
	'@type': 'getChatInviteLink';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link to get.
*/
	invite_link: string;
}

/**
Returns list of chat administrators with number of their invite links. Requires owner privileges in the chat.
Request type for {@link Tdjson#getChatInviteLinkCounts}.
*/
export interface GetChatInviteLinkCounts {
	'@type': 'getChatInviteLinkCounts';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Returns invite links for a chat created by specified administrator. Requires administrator privileges and
can_invite_users right in the chat to get own links and owner privileges to get other links.
Request type for {@link Tdjson#getChatInviteLinks}.
*/
export interface GetChatInviteLinks {
	'@type': 'getChatInviteLinks';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
User identifier of a chat administrator. Must be an identifier of the current user for non-owner.
*/
	creator_user_id: number;
	/**
Pass true if revoked links needs to be returned instead of active or expired.
*/
	is_revoked?: boolean;
	/**
Creation date of an invite link starting after which to return invite links; use 0 to get results from the beginning.
*/
	offset_date: number;
	/**
Invite link starting after which to return invite links; use empty string to get results from the beginning.
*/
	offset_invite_link: string;
	/**
The maximum number of invite links to return; up to 100.
*/
	limit: number;
}

/**
Returns chat members joined a chat via an invite link. Requires administrator privileges and can_invite_users right in
the chat for own links and owner privileges for other links.
Request type for {@link Tdjson#getChatInviteLinkMembers}.
*/
export interface GetChatInviteLinkMembers {
	'@type': 'getChatInviteLinkMembers';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link for which to return chat members.
*/
	invite_link: string;
	/**
A chat member from which to return next chat members; pass null to get results from the beginning.
*/
	offset_member: ChatInviteLinkMember;
	/**
The maximum number of chat members to return; up to 100.
*/
	limit: number;
}

/**
Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges
and can_invite_users right in the chat for own links and owner privileges for other links. If a primary link is revoked,
then additionally to the revoked link returns new primary link.
Request type for {@link Tdjson#revokeChatInviteLink}.
*/
export interface RevokeChatInviteLink {
	'@type': 'revokeChatInviteLink';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link to be revoked.
*/
	invite_link: string;
}

/**
Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own
links and owner privileges for other links.
Request type for {@link Tdjson#deleteRevokedChatInviteLink}.
*/
export interface DeleteRevokedChatInviteLink {
	'@type': 'deleteRevokedChatInviteLink';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link to revoke.
*/
	invite_link: string;
}

/**
Deletes all revoked chat invite links created by a given chat administrator. Requires administrator privileges and
can_invite_users right in the chat for own links and owner privileges for other links.
Request type for {@link Tdjson#deleteAllRevokedChatInviteLinks}.
*/
export interface DeleteAllRevokedChatInviteLinks {
	'@type': 'deleteAllRevokedChatInviteLinks';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
User identifier of a chat administrator, which links will be deleted. Must be an identifier of the current user for
non-owner.
*/
	creator_user_id: number;
}

/**
Checks the validity of an invite link for a chat and returns information about the corresponding chat.
Request type for {@link Tdjson#checkChatInviteLink}.
*/
export interface CheckChatInviteLink {
	'@type': 'checkChatInviteLink';
	/**
Invite link to be checked.
*/
	invite_link: string;
}

/**
Uses an invite link to add the current user to the chat if possible. May return an error with a message
"INVITE_REQUEST_SENT" if only a join request was created.
Request type for {@link Tdjson#joinChatByInviteLink}.
*/
export interface JoinChatByInviteLink {
	'@type': 'joinChatByInviteLink';
	/**
Invite link to use.
*/
	invite_link: string;
}

/**
Returns pending join requests in a chat.
Request type for {@link Tdjson#getChatJoinRequests}.
*/
export interface GetChatJoinRequests {
	'@type': 'getChatJoinRequests';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link for which to return join requests. If empty, all join requests will be returned. Requires administrator
privileges and can_invite_users right in the chat for own links and owner privileges for other links.
*/
	invite_link: string;
	/**
A query to search for in the first names, last names and usernames of the users to return.
*/
	query: string;
	/**
A chat join request from which to return next requests; pass null to get results from the beginning.
*/
	offset_request: ChatJoinRequest;
	/**
The maximum number of requests to join the chat to return.
*/
	limit: number;
}

/**
Handles a pending join request in a chat.
Request type for {@link Tdjson#processChatJoinRequest}.
*/
export interface ProcessChatJoinRequest {
	'@type': 'processChatJoinRequest';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the user that sent the request.
*/
	user_id: number;
	/**
Pass true to approve the request; pass false to decline it.
*/
	approve?: boolean;
}

/**
Handles all pending join requests for a given link in a chat.
Request type for {@link Tdjson#processChatJoinRequests}.
*/
export interface ProcessChatJoinRequests {
	'@type': 'processChatJoinRequests';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Invite link for which to process join requests. If empty, all join requests will be processed. Requires administrator
privileges and can_invite_users right in the chat for own links and owner privileges for other links.
*/
	invite_link: string;
	/**
Pass true to approve all requests; pass false to decline them.
*/
	approve?: boolean;
}

/**
Creates a new call.
Request type for {@link Tdjson#createCall}.
*/
export interface CreateCall {
	'@type': 'createCall';
	/**
Identifier of the user to be called.
*/
	user_id: number;
	/**
The call protocols supported by the application.
*/
	protocol: CallProtocol;
	/**
Pass true to create a video call.
*/
	is_video?: boolean;
}

/**
Accepts an incoming call.
Request type for {@link Tdjson#acceptCall}.
*/
export interface AcceptCall {
	'@type': 'acceptCall';
	/**
Call identifier.
*/
	call_id: number;
	/**
The call protocols supported by the application.
*/
	protocol: CallProtocol;
}

/**
Sends call signaling data.
Request type for {@link Tdjson#sendCallSignalingData}.
*/
export interface SendCallSignalingData {
	'@type': 'sendCallSignalingData';
	/**
Call identifier.
*/
	call_id: number;
	/**
The data.
*/
	data: string;
}

/**
Discards a call.
Request type for {@link Tdjson#discardCall}.
*/
export interface DiscardCall {
	'@type': 'discardCall';
	/**
Call identifier.
*/
	call_id: number;
	/**
Pass true if the user was disconnected.
*/
	is_disconnected?: boolean;
	/**
The call duration, in seconds.
*/
	duration: number;
	/**
Pass true if the call was a video call.
*/
	is_video?: boolean;
	/**
Identifier of the connection used during the call.
*/
	connection_id: string;
}

/**
Sends a call rating.
Request type for {@link Tdjson#sendCallRating}.
*/
export interface SendCallRating {
	'@type': 'sendCallRating';
	/**
Call identifier.
*/
	call_id: number;
	/**
Call rating; 1-5.
*/
	rating: number;
	/**
An optional user comment if the rating is less than 5.
*/
	comment: string;
	/**
List of the exact types of problems with the call, specified by the user.
*/
	problems: CallProblem[];
}

/**
Sends debug information for a call to Telegram servers.
Request type for {@link Tdjson#sendCallDebugInformation}.
*/
export interface SendCallDebugInformation {
	'@type': 'sendCallDebugInformation';
	/**
Call identifier.
*/
	call_id: number;
	/**
Debug information in application-specific format.
*/
	debug_information: string;
}

/**
Sends log file for a call to Telegram servers.
Request type for {@link Tdjson#sendCallLog}.
*/
export interface SendCallLog {
	'@type': 'sendCallLog';
	/**
Call identifier.
*/
	call_id: number;
	/**
Call log file. Only inputFileLocal and inputFileGenerated are supported.
*/
	log_file: InputFile;
}

/**
Returns list of participant identifiers, on whose behalf a video chat in the chat can be joined.
Request type for {@link Tdjson#getVideoChatAvailableParticipants}.
*/
export interface GetVideoChatAvailableParticipants {
	'@type': 'getVideoChatAvailableParticipants';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Changes default participant identifier, on whose behalf a video chat in the chat will be joined.
Request type for {@link Tdjson#setVideoChatDefaultParticipant}.
*/
export interface SetVideoChatDefaultParticipant {
	'@type': 'setVideoChatDefaultParticipant';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Default group call participant identifier to join the video chats.
*/
	default_participant_id: MessageSender;
}

/**
Creates a video chat (a group call bound to a chat). Available only for basic groups, supergroups and channels; requires
can_manage_video_chats rights.
Request type for {@link Tdjson#createVideoChat}.
*/
export interface CreateVideoChat {
	'@type': 'createVideoChat';
	/**
Identifier of a chat in which the video chat will be created.
*/
	chat_id: number;
	/**
Group call title; if empty, chat title will be used.
*/
	title: string;
	/**
Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 to start the video
chat immediately. The date must be at least 10 seconds and at most 8 days in the future.
*/
	start_date: number;
	/**
Pass true to create an RTMP stream instead of an ordinary video chat; requires creator privileges.
*/
	is_rtmp_stream?: boolean;
}

/**
Returns RTMP URL for streaming to the chat; requires creator privileges.
Request type for {@link Tdjson#getVideoChatRtmpUrl}.
*/
export interface GetVideoChatRtmpUrl {
	'@type': 'getVideoChatRtmpUrl';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Replaces the current RTMP URL for streaming to the chat; requires creator privileges.
Request type for {@link Tdjson#replaceVideoChatRtmpUrl}.
*/
export interface ReplaceVideoChatRtmpUrl {
	'@type': 'replaceVideoChatRtmpUrl';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Returns information about a group call.
Request type for {@link Tdjson#getGroupCall}.
*/
export interface GetGroupCall {
	'@type': 'getGroupCall';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Starts a scheduled group call.
Request type for {@link Tdjson#startScheduledGroupCall}.
*/
export interface StartScheduledGroupCall {
	'@type': 'startScheduledGroupCall';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Toggles whether the current user will receive a notification when the group call will start; scheduled group calls only.
Request type for {@link Tdjson#toggleGroupCallEnabledStartNotification}.
*/
export interface ToggleGroupCallEnabledStartNotification {
	'@type': 'toggleGroupCallEnabledStartNotification';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
New value of the enabled_start_notification setting.
*/
	enabled_start_notification?: boolean;
}

/**
Joins an active group call. Returns join response payload for tgcalls.
Request type for {@link Tdjson#joinGroupCall}.
*/
export interface JoinGroupCall {
	'@type': 'joinGroupCall';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Identifier of a group call participant, which will be used to join the call; pass null to join as self; video chats
only.
*/
	participant_id: MessageSender;
	/**
Caller audio channel synchronization source identifier; received from tgcalls.
*/
	audio_source_id: number;
	/**
Group call join payload; received from tgcalls.
*/
	payload: string;
	/**
Pass true to join the call with muted microphone.
*/
	is_muted?: boolean;
	/**
Pass true if the user's video is enabled.
*/
	is_my_video_enabled?: boolean;
	/**
If non-empty, invite hash to be used to join the group call without being muted by administrators.
*/
	invite_hash: string;
}

/**
Starts screen sharing in a joined group call. Returns join response payload for tgcalls.
Request type for {@link Tdjson#startGroupCallScreenSharing}.
*/
export interface StartGroupCallScreenSharing {
	'@type': 'startGroupCallScreenSharing';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Screen sharing audio channel synchronization source identifier; received from tgcalls.
*/
	audio_source_id: number;
	/**
Group call join payload; received from tgcalls.
*/
	payload: string;
}

/**
Pauses or unpauses screen sharing in a joined group call.
Request type for {@link Tdjson#toggleGroupCallScreenSharingIsPaused}.
*/
export interface ToggleGroupCallScreenSharingIsPaused {
	'@type': 'toggleGroupCallScreenSharingIsPaused';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
True if screen sharing is paused.
*/
	is_paused?: boolean;
}

/**
Ends screen sharing in a joined group call.
Request type for {@link Tdjson#endGroupCallScreenSharing}.
*/
export interface EndGroupCallScreenSharing {
	'@type': 'endGroupCallScreenSharing';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Sets group call title. Requires groupCall.can_be_managed group call flag.
Request type for {@link Tdjson#setGroupCallTitle}.
*/
export interface SetGroupCallTitle {
	'@type': 'setGroupCallTitle';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
New group call title; 1-64 characters.
*/
	title: string;
}

/**
Toggles whether new participants of a group call can be unmuted only by administrators of the group call. Requires
groupCall.can_toggle_mute_new_participants group call flag.
Request type for {@link Tdjson#toggleGroupCallMuteNewParticipants}.
*/
export interface ToggleGroupCallMuteNewParticipants {
	'@type': 'toggleGroupCallMuteNewParticipants';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
New value of the mute_new_participants setting.
*/
	mute_new_participants?: boolean;
}

/**
Invites users to an active group call. Sends a service message of type messageInviteToGroupCall for video chats.
Request type for {@link Tdjson#inviteGroupCallParticipants}.
*/
export interface InviteGroupCallParticipants {
	'@type': 'inviteGroupCallParticipants';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
User identifiers. At most 10 users can be invited simultaneously.
*/
	user_ids: number[];
}

/**
Returns invite link to a video chat in a public chat.
Request type for {@link Tdjson#getGroupCallInviteLink}.
*/
export interface GetGroupCallInviteLink {
	'@type': 'getGroupCallInviteLink';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Pass true if the invite link needs to contain an invite hash, passing which to joinGroupCall would allow the invited
user to unmute themselves. Requires groupCall.can_be_managed group call flag.
*/
	can_self_unmute?: boolean;
}

/**
Revokes invite link for a group call. Requires groupCall.can_be_managed group call flag.
Request type for {@link Tdjson#revokeGroupCallInviteLink}.
*/
export interface RevokeGroupCallInviteLink {
	'@type': 'revokeGroupCallInviteLink';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Starts recording of an active group call. Requires groupCall.can_be_managed group call flag.
Request type for {@link Tdjson#startGroupCallRecording}.
*/
export interface StartGroupCallRecording {
	'@type': 'startGroupCallRecording';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Group call recording title; 0-64 characters.
*/
	title: string;
	/**
Pass true to record a video file instead of an audio file.
*/
	record_video?: boolean;
	/**
Pass true to use portrait orientation for video instead of landscape one.
*/
	use_portrait_orientation?: boolean;
}

/**
Ends recording of an active group call. Requires groupCall.can_be_managed group call flag.
Request type for {@link Tdjson#endGroupCallRecording}.
*/
export interface EndGroupCallRecording {
	'@type': 'endGroupCallRecording';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Toggles whether current user's video is paused.
Request type for {@link Tdjson#toggleGroupCallIsMyVideoPaused}.
*/
export interface ToggleGroupCallIsMyVideoPaused {
	'@type': 'toggleGroupCallIsMyVideoPaused';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Pass true if the current user's video is paused.
*/
	is_my_video_paused?: boolean;
}

/**
Toggles whether current user's video is enabled.
Request type for {@link Tdjson#toggleGroupCallIsMyVideoEnabled}.
*/
export interface ToggleGroupCallIsMyVideoEnabled {
	'@type': 'toggleGroupCallIsMyVideoEnabled';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Pass true if the current user's video is enabled.
*/
	is_my_video_enabled?: boolean;
}

/**
Informs TDLib that speaking state of a participant of an active group has changed.
Request type for {@link Tdjson#setGroupCallParticipantIsSpeaking}.
*/
export interface SetGroupCallParticipantIsSpeaking {
	'@type': 'setGroupCallParticipantIsSpeaking';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Group call participant's synchronization audio source identifier, or 0 for the current user.
*/
	audio_source: number;
	/**
Pass true if the user is speaking.
*/
	is_speaking?: boolean;
}

/**
Toggles whether a participant of an active group call is muted, unmuted, or allowed to unmute themselves.
Request type for {@link Tdjson#toggleGroupCallParticipantIsMuted}.
*/
export interface ToggleGroupCallParticipantIsMuted {
	'@type': 'toggleGroupCallParticipantIsMuted';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Participant identifier.
*/
	participant_id: MessageSender;
	/**
Pass true to mute the user; pass false to unmute the them.
*/
	is_muted?: boolean;
}

/**
Changes volume level of a participant of an active group call. If the current user can manage the group call, then the
participant's volume level will be changed for all users with the default volume level.
Request type for {@link Tdjson#setGroupCallParticipantVolumeLevel}.
*/
export interface SetGroupCallParticipantVolumeLevel {
	'@type': 'setGroupCallParticipantVolumeLevel';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Participant identifier.
*/
	participant_id: MessageSender;
	/**
New participant's volume level; 1-20000 in hundreds of percents.
*/
	volume_level: number;
}

/**
Toggles whether a group call participant hand is rased.
Request type for {@link Tdjson#toggleGroupCallParticipantIsHandRaised}.
*/
export interface ToggleGroupCallParticipantIsHandRaised {
	'@type': 'toggleGroupCallParticipantIsHandRaised';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Participant identifier.
*/
	participant_id: MessageSender;
	/**
Pass true if the user's hand needs to be raised. Only self hand can be raised. Requires groupCall.can_be_managed group
call flag to lower other's hand.
*/
	is_hand_raised?: boolean;
}

/**
Loads more participants of a group call. The loaded participants will be received through updates. Use the field
groupCall.loaded_all_participants to check whether all participants have already been loaded.
Request type for {@link Tdjson#loadGroupCallParticipants}.
*/
export interface LoadGroupCallParticipants {
	'@type': 'loadGroupCallParticipants';
	/**
Group call identifier. The group call must be previously received through getGroupCall and must be joined or being
joined.
*/
	group_call_id: number;
	/**
The maximum number of participants to load; up to 100.
*/
	limit: number;
}

/**
Leaves a group call.
Request type for {@link Tdjson#leaveGroupCall}.
*/
export interface LeaveGroupCall {
	'@type': 'leaveGroupCall';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Ends a group call. Requires groupCall.can_be_managed.
Request type for {@link Tdjson#endGroupCall}.
*/
export interface EndGroupCall {
	'@type': 'endGroupCall';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Returns information about available group call streams.
Request type for {@link Tdjson#getGroupCallStreams}.
*/
export interface GetGroupCallStreams {
	'@type': 'getGroupCallStreams';
	/**
Group call identifier.
*/
	group_call_id: number;
}

/**
Returns a file with a segment of a group call stream in a modified OGG format for audio or MPEG-4 format for video.
Request type for {@link Tdjson#getGroupCallStreamSegment}.
*/
export interface GetGroupCallStreamSegment {
	'@type': 'getGroupCallStreamSegment';
	/**
Group call identifier.
*/
	group_call_id: number;
	/**
Point in time when the stream segment begins; Unix timestamp in milliseconds.
*/
	time_offset: number;
	/**
Segment duration scale; 0-1. Segment's duration is 1000/(2**scale) milliseconds.
*/
	scale: number;
	/**
Identifier of an audio/video channel to get as received from tgcalls.
*/
	channel_id: number;
	/**
Video quality as received from tgcalls; pass null to get the worst available quality.
*/
	video_quality: GroupCallVideoQuality;
}

/**
Changes the block state of a message sender. Currently, only users and supergroup chats can be blocked.
Request type for {@link Tdjson#toggleMessageSenderIsBlocked}.
*/
export interface ToggleMessageSenderIsBlocked {
	'@type': 'toggleMessageSenderIsBlocked';
	/**
Identifier of a message sender to block/unblock.
*/
	sender_id: MessageSender;
	/**
New value of is_blocked.
*/
	is_blocked?: boolean;
}

/**
Blocks an original sender of a message in the Replies chat.
Request type for {@link Tdjson#blockMessageSenderFromReplies}.
*/
export interface BlockMessageSenderFromReplies {
	'@type': 'blockMessageSenderFromReplies';
	/**
The identifier of an incoming message in the Replies chat.
*/
	message_id: number;
	/**
Pass true to delete the message.
*/
	delete_message?: boolean;
	/**
Pass true to delete all messages from the same sender.
*/
	delete_all_messages?: boolean;
	/**
Pass true to report the sender to the Telegram moderators.
*/
	report_spam?: boolean;
}

/**
Returns users and chats that were blocked by the current user.
Request type for {@link Tdjson#getBlockedMessageSenders}.
*/
export interface GetBlockedMessageSenders {
	'@type': 'getBlockedMessageSenders';
	/**
Number of users and chats to skip in the result; must be non-negative.
*/
	offset: number;
	/**
The maximum number of users and chats to return; up to 100.
*/
	limit: number;
}

/**
Adds a user to the contact list or edits an existing contact by their user identifier.
Request type for {@link Tdjson#addContact}.
*/
export interface AddContact {
	'@type': 'addContact';
	/**
The contact to add or edit; phone number may be empty and needs to be specified only if known, vCard is ignored.
*/
	contact: Contact;
	/**
Pass true to share the current user's phone number with the new contact. A corresponding rule to
userPrivacySettingShowPhoneNumber will be added if needed. Use the field
userFullInfo.need_phone_number_privacy_exception to check whether the current user needs to be asked to share their
phone number.
*/
	share_phone_number?: boolean;
}

/**
Adds new contacts or edits existing contacts by their phone numbers; contacts' user identifiers are ignored.
Request type for {@link Tdjson#importContacts}.
*/
export interface ImportContacts {
	'@type': 'importContacts';
	/**
The list of contacts to import or edit; contacts' vCard are ignored and are not imported.
*/
	contacts: Contact[];
}

/**
Returns all user contacts.
Request type for {@link Tdjson#getContacts}.
*/
export interface GetContacts {
	'@type': 'getContacts';

}

/**
Searches for the specified query in the first names, last names and usernames of the known user contacts.
Request type for {@link Tdjson#searchContacts}.
*/
export interface SearchContacts {
	'@type': 'searchContacts';
	/**
Query to search for; may be empty to return all contacts.
*/
	query: string;
	/**
The maximum number of users to be returned.
*/
	limit: number;
}

/**
Removes users from the contact list.
Request type for {@link Tdjson#removeContacts}.
*/
export interface RemoveContacts {
	'@type': 'removeContacts';
	/**
Identifiers of users to be deleted.
*/
	user_ids: number[];
}

/**
Returns the total number of imported contacts.
Request type for {@link Tdjson#getImportedContactCount}.
*/
export interface GetImportedContactCount {
	'@type': 'getImportedContactCount';

}

/**
Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least
the file database is enabled, deletes recently deleted contacts. Query result depends on the result of the previous
query, so only one query is possible at the same time.
Request type for {@link Tdjson#changeImportedContacts}.
*/
export interface ChangeImportedContacts {
	'@type': 'changeImportedContacts';
	/**
The new list of contacts, contact's vCard are ignored and are not imported.
*/
	contacts: Contact[];
}

/**
Clears all imported contacts, contact list remains unchanged.
Request type for {@link Tdjson#clearImportedContacts}.
*/
export interface ClearImportedContacts {
	'@type': 'clearImportedContacts';

}

/**
Searches a user by their phone number. Returns a 404 error if the user can't be found.
Request type for {@link Tdjson#searchUserByPhoneNumber}.
*/
export interface SearchUserByPhoneNumber {
	'@type': 'searchUserByPhoneNumber';
	/**
Phone number to search for.
*/
	phone_number: string;
}

/**
Shares the phone number of the current user with a mutual contact. Supposed to be called when the user clicks on
chatActionBarSharePhoneNumber.
Request type for {@link Tdjson#sharePhoneNumber}.
*/
export interface SharePhoneNumber {
	'@type': 'sharePhoneNumber';
	/**
Identifier of the user with whom to share the phone number. The user must be a mutual contact.
*/
	user_id: number;
}

/**
Returns the profile photos of a user. The result of this query may be outdated: some photos might have been deleted
already.
Request type for {@link Tdjson#getUserProfilePhotos}.
*/
export interface GetUserProfilePhotos {
	'@type': 'getUserProfilePhotos';
	/**
User identifier.
*/
	user_id: number;
	/**
The number of photos to skip; must be non-negative.
*/
	offset: number;
	/**
The maximum number of photos to be returned; up to 100.
*/
	limit: number;
}

/**
Returns stickers from the installed sticker sets that correspond to a given emoji or can be found by sticker-specific
keywords. If the query is non-empty, then favorite, recently used or trending stickers may also be returned.
Request type for {@link Tdjson#getStickers}.
*/
export interface GetStickers {
	'@type': 'getStickers';
	/**
Type of the stickers to return.
*/
	sticker_type: StickerType;
	/**
Search query; an emoji or a keyword prefix. If empty, returns all known installed stickers.
*/
	query: string;
	/**
The maximum number of stickers to be returned.
*/
	limit: number;
	/**
Chat identifier for which to return stickers. Available custom emoji stickers may be different for different chats.
*/
	chat_id: number;
}

/**
Searches for stickers from public sticker sets that correspond to a given emoji.
Request type for {@link Tdjson#searchStickers}.
*/
export interface SearchStickers {
	'@type': 'searchStickers';
	/**
String representation of emoji; must be non-empty.
*/
	emoji: string;
	/**
The maximum number of stickers to be returned; 0-100.
*/
	limit: number;
}

/**
Returns premium stickers from regular sticker sets.
Request type for {@link Tdjson#getPremiumStickers}.
*/
export interface GetPremiumStickers {
	'@type': 'getPremiumStickers';
	/**
The maximum number of stickers to be returned; 0-100.
*/
	limit: number;
}

/**
Returns a list of installed sticker sets.
Request type for {@link Tdjson#getInstalledStickerSets}.
*/
export interface GetInstalledStickerSets {
	'@type': 'getInstalledStickerSets';
	/**
Type of the sticker sets to return.
*/
	sticker_type: StickerType;
}

/**
Returns a list of archived sticker sets.
Request type for {@link Tdjson#getArchivedStickerSets}.
*/
export interface GetArchivedStickerSets {
	'@type': 'getArchivedStickerSets';
	/**
Type of the sticker sets to return.
*/
	sticker_type: StickerType;
	/**
Identifier of the sticker set from which to return the result.
*/
	offset_sticker_set_id: string;
	/**
The maximum number of sticker sets to return; up to 100.
*/
	limit: number;
}

/**
Returns a list of trending sticker sets. For optimal performance, the number of returned sticker sets is chosen by
TDLib.
Request type for {@link Tdjson#getTrendingStickerSets}.
*/
export interface GetTrendingStickerSets {
	'@type': 'getTrendingStickerSets';
	/**
Type of the sticker sets to return.
*/
	sticker_type: StickerType;
	/**
The offset from which to return the sticker sets; must be non-negative.
*/
	offset: number;
	/**
The maximum number of sticker sets to be returned; up to 100. For optimal performance, the number of returned sticker
sets is chosen by TDLib and can be smaller than the specified limit, even if the end of the list has not been reached.
*/
	limit: number;
}

/**
Returns a list of sticker sets attached to a file. Currently, only photos and videos can have attached sticker sets.
Request type for {@link Tdjson#getAttachedStickerSets}.
*/
export interface GetAttachedStickerSets {
	'@type': 'getAttachedStickerSets';
	/**
File identifier.
*/
	file_id: number;
}

/**
Returns information about a sticker set by its identifier.
Request type for {@link Tdjson#getStickerSet}.
*/
export interface GetStickerSet {
	'@type': 'getStickerSet';
	/**
Identifier of the sticker set.
*/
	set_id: string;
}

/**
Searches for a sticker set by its name.
Request type for {@link Tdjson#searchStickerSet}.
*/
export interface SearchStickerSet {
	'@type': 'searchStickerSet';
	/**
Name of the sticker set.
*/
	name: string;
}

/**
Searches for installed sticker sets by looking for specified query in their title and name.
Request type for {@link Tdjson#searchInstalledStickerSets}.
*/
export interface SearchInstalledStickerSets {
	'@type': 'searchInstalledStickerSets';
	/**
Type of the sticker sets to search for.
*/
	sticker_type: StickerType;
	/**
Query to search for.
*/
	query: string;
	/**
The maximum number of sticker sets to return.
*/
	limit: number;
}

/**
Searches for ordinary sticker sets by looking for specified query in their title and name. Excludes installed sticker
sets from the results.
Request type for {@link Tdjson#searchStickerSets}.
*/
export interface SearchStickerSets {
	'@type': 'searchStickerSets';
	/**
Query to search for.
*/
	query: string;
}

/**
Installs/uninstalls or activates/archives a sticker set.
Request type for {@link Tdjson#changeStickerSet}.
*/
export interface ChangeStickerSet {
	'@type': 'changeStickerSet';
	/**
Identifier of the sticker set.
*/
	set_id: string;
	/**
The new value of is_installed.
*/
	is_installed?: boolean;
	/**
The new value of is_archived. A sticker set can't be installed and archived simultaneously.
*/
	is_archived?: boolean;
}

/**
Informs the server that some trending sticker sets have been viewed by the user.
Request type for {@link Tdjson#viewTrendingStickerSets}.
*/
export interface ViewTrendingStickerSets {
	'@type': 'viewTrendingStickerSets';
	/**
Identifiers of viewed trending sticker sets.
*/
	sticker_set_ids: string[];
}

/**
Changes the order of installed sticker sets.
Request type for {@link Tdjson#reorderInstalledStickerSets}.
*/
export interface ReorderInstalledStickerSets {
	'@type': 'reorderInstalledStickerSets';
	/**
Type of the sticker sets to reorder.
*/
	sticker_type: StickerType;
	/**
Identifiers of installed sticker sets in the new correct order.
*/
	sticker_set_ids: string[];
}

/**
Returns a list of recently used stickers.
Request type for {@link Tdjson#getRecentStickers}.
*/
export interface GetRecentStickers {
	'@type': 'getRecentStickers';
	/**
Pass true to return stickers and masks that were recently attached to photos or video files; pass false to return
recently sent stickers.
*/
	is_attached?: boolean;
}

/**
Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If
the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be
added to this list. Emoji stickers can't be added to recent stickers.
Request type for {@link Tdjson#addRecentSticker}.
*/
export interface AddRecentSticker {
	'@type': 'addRecentSticker';
	/**
Pass true to add the sticker to the list of stickers recently attached to photo or video files; pass false to add the
sticker to the list of recently sent stickers.
*/
	is_attached?: boolean;
	/**
Sticker file to add.
*/
	sticker: InputFile;
}

/**
Removes a sticker from the list of recently used stickers.
Request type for {@link Tdjson#removeRecentSticker}.
*/
export interface RemoveRecentSticker {
	'@type': 'removeRecentSticker';
	/**
Pass true to remove the sticker from the list of stickers recently attached to photo or video files; pass false to
remove the sticker from the list of recently sent stickers.
*/
	is_attached?: boolean;
	/**
Sticker file to delete.
*/
	sticker: InputFile;
}

/**
Clears the list of recently used stickers.
Request type for {@link Tdjson#clearRecentStickers}.
*/
export interface ClearRecentStickers {
	'@type': 'clearRecentStickers';
	/**
Pass true to clear the list of stickers recently attached to photo or video files; pass false to clear the list of
recently sent stickers.
*/
	is_attached?: boolean;
}

/**
Returns favorite stickers.
Request type for {@link Tdjson#getFavoriteStickers}.
*/
export interface GetFavoriteStickers {
	'@type': 'getFavoriteStickers';

}

/**
Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was
already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be added to this
list. Emoji stickers can't be added to favorite stickers.
Request type for {@link Tdjson#addFavoriteSticker}.
*/
export interface AddFavoriteSticker {
	'@type': 'addFavoriteSticker';
	/**
Sticker file to add.
*/
	sticker: InputFile;
}

/**
Removes a sticker from the list of favorite stickers.
Request type for {@link Tdjson#removeFavoriteSticker}.
*/
export interface RemoveFavoriteSticker {
	'@type': 'removeFavoriteSticker';
	/**
Sticker file to delete from the list.
*/
	sticker: InputFile;
}

/**
Returns emoji corresponding to a sticker. The list is only for informational purposes, because a sticker is always sent
with a fixed emoji from the corresponding Sticker object.
Request type for {@link Tdjson#getStickerEmojis}.
*/
export interface GetStickerEmojis {
	'@type': 'getStickerEmojis';
	/**
Sticker file identifier.
*/
	sticker: InputFile;
}

/**
Searches for emojis by keywords. Supported only if the file database is enabled.
Request type for {@link Tdjson#searchEmojis}.
*/
export interface SearchEmojis {
	'@type': 'searchEmojis';
	/**
Text to search for.
*/
	text: string;
	/**
Pass true if only emojis, which exactly match the text, needs to be returned.
*/
	exact_match?: boolean;
	/**
List of possible IETF language tags of the user's input language; may be empty if unknown.
*/
	input_language_codes: string[];
}

/**
Returns an animated emoji corresponding to a given emoji. Returns a 404 error if the emoji has no animated emoji.
Request type for {@link Tdjson#getAnimatedEmoji}.
*/
export interface GetAnimatedEmoji {
	'@type': 'getAnimatedEmoji';
	/**
The emoji.
*/
	emoji: string;
}

/**
Returns an HTTP URL which can be used to automatically log in to the translation platform and suggest new emoji
replacements. The URL will be valid for 30 seconds after generation.
Request type for {@link Tdjson#getEmojiSuggestionsUrl}.
*/
export interface GetEmojiSuggestionsUrl {
	'@type': 'getEmojiSuggestionsUrl';
	/**
Language code for which the emoji replacements will be suggested.
*/
	language_code: string;
}

/**
Returns list of custom emoji stickers by their identifiers. Stickers are returned in arbitrary order. Only found
stickers are returned.
Request type for {@link Tdjson#getCustomEmojiStickers}.
*/
export interface GetCustomEmojiStickers {
	'@type': 'getCustomEmojiStickers';
	/**
Identifiers of custom emoji stickers. At most 200 custom emoji stickers can be received simultaneously.
*/
	custom_emoji_ids: string[];
}

/**
Returns saved animations.
Request type for {@link Tdjson#getSavedAnimations}.
*/
export interface GetSavedAnimations {
	'@type': 'getSavedAnimations';

}

/**
Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list.
If the animation was already in the list, it is removed first. Only non-secret video animations with MIME type
"video/mp4" can be added to the list.
Request type for {@link Tdjson#addSavedAnimation}.
*/
export interface AddSavedAnimation {
	'@type': 'addSavedAnimation';
	/**
The animation file to be added. Only animations known to the server (i.e., successfully sent via a message) can be added
to the list.
*/
	animation: InputFile;
}

/**
Removes an animation from the list of saved animations.
Request type for {@link Tdjson#removeSavedAnimation}.
*/
export interface RemoveSavedAnimation {
	'@type': 'removeSavedAnimation';
	/**
Animation file to be removed.
*/
	animation: InputFile;
}

/**
Returns up to 20 recently used inline bots in the order of their last usage.
Request type for {@link Tdjson#getRecentInlineBots}.
*/
export interface GetRecentInlineBots {
	'@type': 'getRecentInlineBots';

}

/**
Searches for recently used hashtags by their prefix.
Request type for {@link Tdjson#searchHashtags}.
*/
export interface SearchHashtags {
	'@type': 'searchHashtags';
	/**
Hashtag prefix to search for.
*/
	prefix: string;
	/**
The maximum number of hashtags to be returned.
*/
	limit: number;
}

/**
Removes a hashtag from the list of recently used hashtags.
Request type for {@link Tdjson#removeRecentHashtag}.
*/
export interface RemoveRecentHashtag {
	'@type': 'removeRecentHashtag';
	/**
Hashtag to delete.
*/
	hashtag: string;
}

/**
Returns a web page preview by the text of the message. Do not call this function too often. Returns a 404 error if the
web page has no preview.
Request type for {@link Tdjson#getWebPagePreview}.
*/
export interface GetWebPagePreview {
	'@type': 'getWebPagePreview';
	/**
Message text with formatting.
*/
	text: FormattedText;
}

/**
Returns an instant view version of a web page if available. Returns a 404 error if the web page has no instant view
page.
Request type for {@link Tdjson#getWebPageInstantView}.
*/
export interface GetWebPageInstantView {
	'@type': 'getWebPageInstantView';
	/**
The web page URL.
*/
	url: string;
	/**
Pass true to get full instant view for the web page.
*/
	force_full?: boolean;
}

/**
Changes a profile photo for the current user.
Request type for {@link Tdjson#setProfilePhoto}.
*/
export interface SetProfilePhoto {
	'@type': 'setProfilePhoto';
	/**
Profile photo to set.
*/
	photo: InputChatPhoto;
}

/**
Deletes a profile photo.
Request type for {@link Tdjson#deleteProfilePhoto}.
*/
export interface DeleteProfilePhoto {
	'@type': 'deleteProfilePhoto';
	/**
Identifier of the profile photo to delete.
*/
	profile_photo_id: string;
}

/**
Changes the first and last name of the current user.
Request type for {@link Tdjson#setName}.
*/
export interface SetName {
	'@type': 'setName';
	/**
The new value of the first name for the current user; 1-64 characters.
*/
	first_name: string;
	/**
The new value of the optional last name for the current user; 0-64 characters.
*/
	last_name: string;
}

/**
Changes the bio of the current user.
Request type for {@link Tdjson#setBio}.
*/
export interface SetBio {
	'@type': 'setBio';
	/**
The new value of the user bio; 0-GetOption("bio_length_max") characters without line feeds.
*/
	bio: string;
}

/**
Changes the username of the current user.
Request type for {@link Tdjson#setUsername}.
*/
export interface SetUsername {
	'@type': 'setUsername';
	/**
The new value of the username. Use an empty string to remove the username.
*/
	username: string;
}

/**
Changes the emoji status of the current user; for Telegram Premium users only.
Request type for {@link Tdjson#setEmojiStatus}.
*/
export interface SetEmojiStatus {
	'@type': 'setEmojiStatus';
	/**
New emoji status; pass null to switch to the default badge.
*/
	emoji_status: EmojiStatus;
	/**
Duration of the status, in seconds; pass 0 to keep the status active until it will be changed manually.
*/
	duration: number;
}

/**
Changes the location of the current user. Needs to be called if GetOption("is_location_visible") is true and location
changes for more than 1 kilometer.
Request type for {@link Tdjson#setLocation}.
*/
export interface SetLocation {
	'@type': 'setLocation';
	/**
The new location of the user.
*/
	location: Location;
}

/**
Changes the phone number of the user and sends an authentication code to the user's new phone number. On success,
returns information about the sent code.
Request type for {@link Tdjson#changePhoneNumber}.
*/
export interface ChangePhoneNumber {
	'@type': 'changePhoneNumber';
	/**
The new phone number of the user in international format.
*/
	phone_number: string;
	/**
Settings for the authentication of the user's phone number; pass null to use default settings.
*/
	settings: PhoneNumberAuthenticationSettings;
}

/**
Resends the authentication code sent to confirm a new phone number for the current user. Works only if the previously
received authenticationCodeInfo next_code_type was not null and the server-specified timeout has passed.
Request type for {@link Tdjson#resendChangePhoneNumberCode}.
*/
export interface ResendChangePhoneNumberCode {
	'@type': 'resendChangePhoneNumberCode';

}

/**
Checks the authentication code sent to confirm a new phone number of the user.
Request type for {@link Tdjson#checkChangePhoneNumberCode}.
*/
export interface CheckChangePhoneNumberCode {
	'@type': 'checkChangePhoneNumberCode';
	/**
Authentication code to check.
*/
	code: string;
}

/**
Sets the list of commands supported by the bot for the given user scope and language; for bots only.
Request type for {@link Tdjson#setCommands}.
*/
export interface SetCommands {
	'@type': 'setCommands';
	/**
The scope to which the commands are relevant; pass null to change commands in the default bot command scope.
*/
	scope: BotCommandScope;
	/**
A two-letter ISO 639-1 language code. If empty, the commands will be applied to all users from the given scope, for
which language there are no dedicated commands.
*/
	language_code: string;
	/**
List of the bot's commands.
*/
	commands: BotCommand[];
}

/**
Deletes commands supported by the bot for the given user scope and language; for bots only.
Request type for {@link Tdjson#deleteCommands}.
*/
export interface DeleteCommands {
	'@type': 'deleteCommands';
	/**
The scope to which the commands are relevant; pass null to delete commands in the default bot command scope.
*/
	scope: BotCommandScope;
	/**
A two-letter ISO 639-1 language code or an empty string.
*/
	language_code: string;
}

/**
Returns the list of commands supported by the bot for the given user scope and language; for bots only.
Request type for {@link Tdjson#getCommands}.
*/
export interface GetCommands {
	'@type': 'getCommands';
	/**
The scope to which the commands are relevant; pass null to get commands in the default bot command scope.
*/
	scope: BotCommandScope;
	/**
A two-letter ISO 639-1 language code or an empty string.
*/
	language_code: string;
}

/**
Sets menu button for the given user or for all users; for bots only.
Request type for {@link Tdjson#setMenuButton}.
*/
export interface SetMenuButton {
	'@type': 'setMenuButton';
	/**
Identifier of the user or 0 to set menu button for all users.
*/
	user_id: number;
	/**
New menu button.
*/
	menu_button: BotMenuButton;
}

/**
Returns menu button set by the bot for the given user; for bots only.
Request type for {@link Tdjson#getMenuButton}.
*/
export interface GetMenuButton {
	'@type': 'getMenuButton';
	/**
Identifier of the user or 0 to get the default menu button.
*/
	user_id: number;
}

/**
Sets default administrator rights for adding the bot to basic group and supergroup chats; for bots only.
Request type for {@link Tdjson#setDefaultGroupAdministratorRights}.
*/
export interface SetDefaultGroupAdministratorRights {
	'@type': 'setDefaultGroupAdministratorRights';
	/**
Default administrator rights for adding the bot to basic group and supergroup chats; may be null.
*/
	default_group_administrator_rights: ChatAdministratorRights;
}

/**
Sets default administrator rights for adding the bot to channel chats; for bots only.
Request type for {@link Tdjson#setDefaultChannelAdministratorRights}.
*/
export interface SetDefaultChannelAdministratorRights {
	'@type': 'setDefaultChannelAdministratorRights';
	/**
Default administrator rights for adding the bot to channels; may be null.
*/
	default_channel_administrator_rights: ChatAdministratorRights;
}

/**
Returns all active sessions of the current user.
Request type for {@link Tdjson#getActiveSessions}.
*/
export interface GetActiveSessions {
	'@type': 'getActiveSessions';

}

/**
Terminates a session of the current user.
Request type for {@link Tdjson#terminateSession}.
*/
export interface TerminateSession {
	'@type': 'terminateSession';
	/**
Session identifier.
*/
	session_id: string;
}

/**
Terminates all other sessions of the current user.
Request type for {@link Tdjson#terminateAllOtherSessions}.
*/
export interface TerminateAllOtherSessions {
	'@type': 'terminateAllOtherSessions';

}

/**
Toggles whether a session can accept incoming calls.
Request type for {@link Tdjson#toggleSessionCanAcceptCalls}.
*/
export interface ToggleSessionCanAcceptCalls {
	'@type': 'toggleSessionCanAcceptCalls';
	/**
Session identifier.
*/
	session_id: string;
	/**
Pass true to allow accepting incoming calls by the session; pass false otherwise.
*/
	can_accept_calls?: boolean;
}

/**
Toggles whether a session can accept incoming secret chats.
Request type for {@link Tdjson#toggleSessionCanAcceptSecretChats}.
*/
export interface ToggleSessionCanAcceptSecretChats {
	'@type': 'toggleSessionCanAcceptSecretChats';
	/**
Session identifier.
*/
	session_id: string;
	/**
Pass true to allow accepring secret chats by the session; pass false otherwise.
*/
	can_accept_secret_chats?: boolean;
}

/**
Changes the period of inactivity after which sessions will automatically be terminated.
Request type for {@link Tdjson#setInactiveSessionTtl}.
*/
export interface SetInactiveSessionTtl {
	'@type': 'setInactiveSessionTtl';
	/**
New number of days of inactivity before sessions will be automatically terminated; 1-366 days.
*/
	inactive_session_ttl_days: number;
}

/**
Returns all website where the current user used Telegram to log in.
Request type for {@link Tdjson#getConnectedWebsites}.
*/
export interface GetConnectedWebsites {
	'@type': 'getConnectedWebsites';

}

/**
Disconnects website from the current user's Telegram account.
Request type for {@link Tdjson#disconnectWebsite}.
*/
export interface DisconnectWebsite {
	'@type': 'disconnectWebsite';
	/**
Website identifier.
*/
	website_id: string;
}

/**
Disconnects all websites from the current user's Telegram account.
Request type for {@link Tdjson#disconnectAllWebsites}.
*/
export interface DisconnectAllWebsites {
	'@type': 'disconnectAllWebsites';

}

/**
Changes the username of a supergroup or channel, requires owner privileges in the supergroup or channel.
Request type for {@link Tdjson#setSupergroupUsername}.
*/
export interface SetSupergroupUsername {
	'@type': 'setSupergroupUsername';
	/**
Identifier of the supergroup or channel.
*/
	supergroup_id: number;
	/**
New value of the username. Use an empty string to remove the username.
*/
	username: string;
}

/**
Changes the sticker set of a supergroup; requires can_change_info administrator right.
Request type for {@link Tdjson#setSupergroupStickerSet}.
*/
export interface SetSupergroupStickerSet {
	'@type': 'setSupergroupStickerSet';
	/**
Identifier of the supergroup.
*/
	supergroup_id: number;
	/**
New value of the supergroup sticker set identifier. Use 0 to remove the supergroup sticker set.
*/
	sticker_set_id: string;
}

/**
Toggles whether sender signature is added to sent messages in a channel; requires can_change_info administrator right.
Request type for {@link Tdjson#toggleSupergroupSignMessages}.
*/
export interface ToggleSupergroupSignMessages {
	'@type': 'toggleSupergroupSignMessages';
	/**
Identifier of the channel.
*/
	supergroup_id: number;
	/**
New value of sign_messages.
*/
	sign_messages?: boolean;
}

/**
Toggles whether joining is mandatory to send messages to a discussion supergroup; requires can_restrict_members
administrator right.
Request type for {@link Tdjson#toggleSupergroupJoinToSendMessages}.
*/
export interface ToggleSupergroupJoinToSendMessages {
	'@type': 'toggleSupergroupJoinToSendMessages';
	/**
Identifier of the supergroup.
*/
	supergroup_id: number;
	/**
New value of join_to_send_messages.
*/
	join_to_send_messages?: boolean;
}

/**
Toggles whether all users directly joining the supergroup need to be approved by supergroup administrators; requires
can_restrict_members administrator right.
Request type for {@link Tdjson#toggleSupergroupJoinByRequest}.
*/
export interface ToggleSupergroupJoinByRequest {
	'@type': 'toggleSupergroupJoinByRequest';
	/**
Identifier of the channel.
*/
	supergroup_id: number;
	/**
New value of join_by_request.
*/
	join_by_request?: boolean;
}

/**
Toggles whether the message history of a supergroup is available to new members; requires can_change_info administrator
right.
Request type for {@link Tdjson#toggleSupergroupIsAllHistoryAvailable}.
*/
export interface ToggleSupergroupIsAllHistoryAvailable {
	'@type': 'toggleSupergroupIsAllHistoryAvailable';
	/**
The identifier of the supergroup.
*/
	supergroup_id: number;
	/**
The new value of is_all_history_available.
*/
	is_all_history_available?: boolean;
}

/**
Upgrades supergroup to a broadcast group; requires owner privileges in the supergroup.
Request type for {@link Tdjson#toggleSupergroupIsBroadcastGroup}.
*/
export interface ToggleSupergroupIsBroadcastGroup {
	'@type': 'toggleSupergroupIsBroadcastGroup';
	/**
Identifier of the supergroup.
*/
	supergroup_id: number;
}

/**
Reports messages in a supergroup as spam; requires administrator rights in the supergroup.
Request type for {@link Tdjson#reportSupergroupSpam}.
*/
export interface ReportSupergroupSpam {
	'@type': 'reportSupergroupSpam';
	/**
Supergroup identifier.
*/
	supergroup_id: number;
	/**
Identifiers of messages to report.
*/
	message_ids: number[];
}

/**
Returns information about members or banned users in a supergroup or channel. Can be used only if
supergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters.
Request type for {@link Tdjson#getSupergroupMembers}.
*/
export interface GetSupergroupMembers {
	'@type': 'getSupergroupMembers';
	/**
Identifier of the supergroup or channel.
*/
	supergroup_id: number;
	/**
The type of users to return; pass null to use supergroupMembersFilterRecent.
*/
	filter: SupergroupMembersFilter;
	/**
Number of users to skip.
*/
	offset: number;
	/**
The maximum number of users be returned; up to 200.
*/
	limit: number;
}

/**
Closes a secret chat, effectively transferring its state to secretChatStateClosed.
Request type for {@link Tdjson#closeSecretChat}.
*/
export interface CloseSecretChat {
	'@type': 'closeSecretChat';
	/**
Secret chat identifier.
*/
	secret_chat_id: number;
}

/**
Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only for
supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i.e., in order
of decreasing event_id).
Request type for {@link Tdjson#getChatEventLog}.
*/
export interface GetChatEventLog {
	'@type': 'getChatEventLog';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Search query by which to filter events.
*/
	query: string;
	/**
Identifier of an event from which to return results. Use 0 to get results from the latest events.
*/
	from_event_id: string;
	/**
The maximum number of events to return; up to 100.
*/
	limit: number;
	/**
The types of events to return; pass null to get chat events of all types.
*/
	filters: ChatEventLogFilters;
	/**
User identifiers by which to filter events. By default, events relating to all users will be returned.
*/
	user_ids: number[];
}

/**
Returns an invoice payment form. This method must be called when the user presses inlineKeyboardButtonBuy.
Request type for {@link Tdjson#getPaymentForm}.
*/
export interface GetPaymentForm {
	'@type': 'getPaymentForm';
	/**
The invoice.
*/
	input_invoice: InputInvoice;
	/**
Preferred payment form theme; pass null to use the default theme.
*/
	theme: ThemeParameters;
}

/**
Validates the order information provided by a user and returns the available shipping options for a flexible invoice.
Request type for {@link Tdjson#validateOrderInfo}.
*/
export interface ValidateOrderInfo {
	'@type': 'validateOrderInfo';
	/**
The invoice.
*/
	input_invoice: InputInvoice;
	/**
The order information, provided by the user; pass null if empty.
*/
	order_info: OrderInfo;
	/**
Pass true to save the order information.
*/
	allow_save?: boolean;
}

/**
Sends a filled-out payment form to the bot for final verification.
Request type for {@link Tdjson#sendPaymentForm}.
*/
export interface SendPaymentForm {
	'@type': 'sendPaymentForm';
	/**
The invoice.
*/
	input_invoice: InputInvoice;
	/**
Payment form identifier returned by getPaymentForm.
*/
	payment_form_id: string;
	/**
Identifier returned by validateOrderInfo, or an empty string.
*/
	order_info_id: string;
	/**
Identifier of a chosen shipping option, if applicable.
*/
	shipping_option_id: string;
	/**
The credentials chosen by user for payment.
*/
	credentials: InputCredentials;
	/**
Chosen by the user amount of tip in the smallest units of the currency.
*/
	tip_amount: number;
}

/**
Returns information about a successful payment.
Request type for {@link Tdjson#getPaymentReceipt}.
*/
export interface GetPaymentReceipt {
	'@type': 'getPaymentReceipt';
	/**
Chat identifier of the PaymentSuccessful message.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
}

/**
Returns saved order information. Returns a 404 error if there is no saved order information.
Request type for {@link Tdjson#getSavedOrderInfo}.
*/
export interface GetSavedOrderInfo {
	'@type': 'getSavedOrderInfo';

}

/**
Deletes saved order information.
Request type for {@link Tdjson#deleteSavedOrderInfo}.
*/
export interface DeleteSavedOrderInfo {
	'@type': 'deleteSavedOrderInfo';

}

/**
Deletes saved credentials for all payment provider bots.
Request type for {@link Tdjson#deleteSavedCredentials}.
*/
export interface DeleteSavedCredentials {
	'@type': 'deleteSavedCredentials';

}

/**
Creates a link for the given invoice; for bots only.
Request type for {@link Tdjson#createInvoiceLink}.
*/
export interface CreateInvoiceLink {
	'@type': 'createInvoiceLink';
	/**
Information about the invoice of the type inputMessageInvoice.
*/
	invoice: InputMessageContent;
}

/**
Returns a user that can be contacted to get support.
Request type for {@link Tdjson#getSupportUser}.
*/
export interface GetSupportUser {
	'@type': 'getSupportUser';

}

/**
Returns backgrounds installed by the user.
Request type for {@link Tdjson#getBackgrounds}.
*/
export interface GetBackgrounds {
	'@type': 'getBackgrounds';
	/**
Pass true to order returned backgrounds for a dark theme.
*/
	for_dark_theme?: boolean;
}

/**
Constructs a persistent HTTP URL for a background.
Request type for {@link Tdjson#getBackgroundUrl}.
*/
export interface GetBackgroundUrl {
	'@type': 'getBackgroundUrl';
	/**
Background name.
*/
	name: string;
	/**
Background type.
*/
	type: BackgroundType;
}

/**
Searches for a background by its name.
Request type for {@link Tdjson#searchBackground}.
*/
export interface SearchBackground {
	'@type': 'searchBackground';
	/**
The name of the background.
*/
	name: string;
}

/**
Changes the background selected by the user; adds background to the list of installed backgrounds.
Request type for {@link Tdjson#setBackground}.
*/
export interface SetBackground {
	'@type': 'setBackground';
	/**
The input background to use; pass null to create a new filled backgrounds or to remove the current background.
*/
	background: InputBackground;
	/**
Background type; pass null to use the default type of the remote background or to remove the current background.
*/
	type: BackgroundType;
	/**
Pass true if the background is changed for a dark theme.
*/
	for_dark_theme?: boolean;
}

/**
Removes background from the list of installed backgrounds.
Request type for {@link Tdjson#removeBackground}.
*/
export interface RemoveBackground {
	'@type': 'removeBackground';
	/**
The background identifier.
*/
	background_id: string;
}

/**
Resets list of installed backgrounds to its default value.
Request type for {@link Tdjson#resetBackgrounds}.
*/
export interface ResetBackgrounds {
	'@type': 'resetBackgrounds';

}

/**
Returns information about the current localization target. This is an offline request if only_local is true. Can be
called before authorization.
Request type for {@link Tdjson#getLocalizationTargetInfo}.
*/
export interface GetLocalizationTargetInfo {
	'@type': 'getLocalizationTargetInfo';
	/**
Pass true to get only locally available information without sending network requests.
*/
	only_local?: boolean;
}

/**
Returns information about a language pack. Returned language pack identifier may be different from a provided one. Can
be called before authorization.
Request type for {@link Tdjson#getLanguagePackInfo}.
*/
export interface GetLanguagePackInfo {
	'@type': 'getLanguagePackInfo';
	/**
Language pack identifier.
*/
	language_pack_id: string;
}

/**
Returns strings from a language pack in the current localization target by their keys. Can be called before
authorization.
Request type for {@link Tdjson#getLanguagePackStrings}.
*/
export interface GetLanguagePackStrings {
	'@type': 'getLanguagePackStrings';
	/**
Language pack identifier of the strings to be returned.
*/
	language_pack_id: string;
	/**
Language pack keys of the strings to be returned; leave empty to request all available strings.
*/
	keys: string[];
}

/**
Fetches the latest versions of all strings from a language pack in the current localization target from the server. This
method doesn't need to be called explicitly for the current used/base language packs. Can be called before
authorization.
Request type for {@link Tdjson#synchronizeLanguagePack}.
*/
export interface SynchronizeLanguagePack {
	'@type': 'synchronizeLanguagePack';
	/**
Language pack identifier.
*/
	language_pack_id: string;
}

/**
Adds a custom server language pack to the list of installed language packs in current localization target. Can be called
before authorization.
Request type for {@link Tdjson#addCustomServerLanguagePack}.
*/
export interface AddCustomServerLanguagePack {
	'@type': 'addCustomServerLanguagePack';
	/**
Identifier of a language pack to be added; may be different from a name that is used in an "https://t.me/setlanguage/"
link.
*/
	language_pack_id: string;
}

/**
Adds or changes a custom local language pack to the current localization target.
Request type for {@link Tdjson#setCustomLanguagePack}.
*/
export interface SetCustomLanguagePack {
	'@type': 'setCustomLanguagePack';
	/**
Information about the language pack. Language pack ID must start with 'X', consist only of English letters, digits and
hyphens, and must not exceed 64 characters. Can be called before authorization.
*/
	info: LanguagePackInfo;
	/**
Strings of the new language pack.
*/
	strings: LanguagePackString[];
}

/**
Edits information about a custom local language pack in the current localization target. Can be called before
authorization.
Request type for {@link Tdjson#editCustomLanguagePackInfo}.
*/
export interface EditCustomLanguagePackInfo {
	'@type': 'editCustomLanguagePackInfo';
	/**
New information about the custom local language pack.
*/
	info: LanguagePackInfo;
}

/**
Adds, edits or deletes a string in a custom local language pack. Can be called before authorization.
Request type for {@link Tdjson#setCustomLanguagePackString}.
*/
export interface SetCustomLanguagePackString {
	'@type': 'setCustomLanguagePackString';
	/**
Identifier of a previously added custom local language pack in the current localization target.
*/
	language_pack_id: string;
	/**
New language pack string.
*/
	new_string: LanguagePackString;
}

/**
Deletes all information about a language pack in the current localization target. The language pack which is currently
in use (including base language pack) or is being synchronized can't be deleted. Can be called before authorization.
Request type for {@link Tdjson#deleteLanguagePack}.
*/
export interface DeleteLanguagePack {
	'@type': 'deleteLanguagePack';
	/**
Identifier of the language pack to delete.
*/
	language_pack_id: string;
}

/**
Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push
notification subscription.
Request type for {@link Tdjson#registerDevice}.
*/
export interface RegisterDevice {
	'@type': 'registerDevice';
	/**
Device token.
*/
	device_token: DeviceToken;
	/**
List of user identifiers of other users currently using the application.
*/
	other_user_ids: number[];
}

/**
Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the
server is required to fetch new data. Can be called before authorization.
Request type for {@link Tdjson#processPushNotification}.
*/
export interface ProcessPushNotification {
	'@type': 'processPushNotification';
	/**
JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time" and
"google.notification.sound" fields added.
*/
	payload: string;
}

/**
Returns a globally unique push notification subscription identifier for identification of an account, which has received
a push notification. Can be called synchronously.
Request type for {@link Tdjson#getPushReceiverId}.
*/
export interface GetPushReceiverId {
	'@type': 'getPushReceiverId';
	/**
JSON-encoded push notification payload.
*/
	payload: string;
}

/**
Returns t.me URLs recently visited by a newly registered user.
Request type for {@link Tdjson#getRecentlyVisitedTMeUrls}.
*/
export interface GetRecentlyVisitedTMeUrls {
	'@type': 'getRecentlyVisitedTMeUrls';
	/**
Google Play referrer to identify the user.
*/
	referrer: string;
}

/**
Changes user privacy settings.
Request type for {@link Tdjson#setUserPrivacySettingRules}.
*/
export interface SetUserPrivacySettingRules {
	'@type': 'setUserPrivacySettingRules';
	/**
The privacy setting.
*/
	setting: UserPrivacySetting;
	/**
The new privacy rules.
*/
	rules: UserPrivacySettingRules;
}

/**
Returns the current privacy settings.
Request type for {@link Tdjson#getUserPrivacySettingRules}.
*/
export interface GetUserPrivacySettingRules {
	'@type': 'getUserPrivacySettingRules';
	/**
The privacy setting.
*/
	setting: UserPrivacySetting;
}

/**
Returns the value of an option by its name. (Check the list of available options on
https://core.telegram.org/tdlib/options.) Can be called before authorization. Can be called synchronously for options
"version" and "commit_hash".
Request type for {@link Tdjson#getOption}.
*/
export interface GetOption {
	'@type': 'getOption';
	/**
The name of the option.
*/
	name: string;
}

/**
Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only
writable options can be set. Can be called before authorization.
Request type for {@link Tdjson#setOption}.
*/
export interface SetOption {
	'@type': 'setOption';
	/**
The name of the option.
*/
	name: string;
	/**
The new value of the option; pass null to reset option value to a default value.
*/
	value: OptionValue;
}

/**
Changes the period of inactivity after which the account of the current user will automatically be deleted.
Request type for {@link Tdjson#setAccountTtl}.
*/
export interface SetAccountTtl {
	'@type': 'setAccountTtl';
	/**
New account TTL.
*/
	ttl: AccountTtl;
}

/**
Returns the period of inactivity after which the account of the current user will automatically be deleted.
Request type for {@link Tdjson#getAccountTtl}.
*/
export interface GetAccountTtl {
	'@type': 'getAccountTtl';

}

/**
Deletes the account of the current user, deleting all information associated with the user from the server. The phone
number of the account can be used to create a new account. Can be called before authorization when the current
authorization state is authorizationStateWaitPassword.
Request type for {@link Tdjson#deleteAccount}.
*/
export interface DeleteAccount {
	'@type': 'deleteAccount';
	/**
The reason why the account was deleted; optional.
*/
	reason: string;
	/**
The 2-step verification password of the current user. If not specified, account deletion can be canceled within one
week.
*/
	password: string;
}

/**
Removes a chat action bar without any other action.
Request type for {@link Tdjson#removeChatActionBar}.
*/
export interface RemoveChatActionBar {
	'@type': 'removeChatActionBar';
	/**
Chat identifier.
*/
	chat_id: number;
}

/**
Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if
chat.can_be_reported.
Request type for {@link Tdjson#reportChat}.
*/
export interface ReportChat {
	'@type': 'reportChat';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifiers of reported messages; may be empty to report the whole chat.
*/
	message_ids: number[];
	/**
The reason for reporting the chat.
*/
	reason: ChatReportReason;
	/**
Additional report details; 0-1024 characters.
*/
	text: string;
}

/**
Reports a chat photo to the Telegram moderators. A chat photo can be reported only if chat.can_be_reported.
Request type for {@link Tdjson#reportChatPhoto}.
*/
export interface ReportChatPhoto {
	'@type': 'reportChatPhoto';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Identifier of the photo to report. Only full photos from chatPhoto can be reported.
*/
	file_id: number;
	/**
The reason for reporting the chat photo.
*/
	reason: ChatReportReason;
	/**
Additional report details; 0-1024 characters.
*/
	text: string;
}

/**
Reports reactions set on a message to the Telegram moderators. Reactions on a message can be reported only if
message.can_report_reactions.
Request type for {@link Tdjson#reportMessageReactions}.
*/
export interface ReportMessageReactions {
	'@type': 'reportMessageReactions';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Identifier of the sender, which added the reaction.
*/
	sender_id: MessageSender;
}

/**
Returns detailed statistics about a chat. Currently, this method can be used only for supergroups and channels. Can be
used only if supergroupFullInfo.can_get_statistics == true.
Request type for {@link Tdjson#getChatStatistics}.
*/
export interface GetChatStatistics {
	'@type': 'getChatStatistics';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Pass true if a dark theme is used by the application.
*/
	is_dark?: boolean;
}

/**
Returns detailed statistics about a message. Can be used only if message.can_get_statistics == true.
Request type for {@link Tdjson#getMessageStatistics}.
*/
export interface GetMessageStatistics {
	'@type': 'getMessageStatistics';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
Message identifier.
*/
	message_id: number;
	/**
Pass true if a dark theme is used by the application.
*/
	is_dark?: boolean;
}

/**
Loads an asynchronous or a zoomed in statistical graph.
Request type for {@link Tdjson#getStatisticalGraph}.
*/
export interface GetStatisticalGraph {
	'@type': 'getStatisticalGraph';
	/**
Chat identifier.
*/
	chat_id: number;
	/**
The token for graph loading.
*/
	token: string;
	/**
X-value for zoomed in graph or 0 otherwise.
*/
	x: number;
}

/**
Returns storage usage statistics. Can be called before authorization.
Request type for {@link Tdjson#getStorageStatistics}.
*/
export interface GetStorageStatistics {
	'@type': 'getStorageStatistics';
	/**
The maximum number of chats with the largest storage usage for which separate statistics need to be returned. All other
chats will be grouped in entries with chat_id == 0. If the chat info database is not used, the chat_limit is ignored and
is always set to 0.
*/
	chat_limit: number;
}

/**
Quickly returns approximate storage usage statistics. Can be called before authorization.
Request type for {@link Tdjson#getStorageStatisticsFast}.
*/
export interface GetStorageStatisticsFast {
	'@type': 'getStorageStatisticsFast';

}

/**
Returns database statistics.
Request type for {@link Tdjson#getDatabaseStatistics}.
*/
export interface GetDatabaseStatistics {
	'@type': 'getDatabaseStatistics';

}

/**
Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be
deleted.
Request type for {@link Tdjson#optimizeStorage}.
*/
export interface OptimizeStorage {
	'@type': 'optimizeStorage';
	/**
Limit on the total size of files after deletion, in bytes. Pass -1 to use the default limit.
*/
	size: number;
	/**
Limit on the time that has passed since the last time a file was accessed (or creation time for some filesystems). Pass
-1 to use the default limit.
*/
	ttl: number;
	/**
Limit on the total number of files after deletion. Pass -1 to use the default limit.
*/
	count: number;
	/**
The amount of time after the creation of a file during which it can't be deleted, in seconds. Pass -1 to use the default
value.
*/
	immunity_delay: number;
	/**
If non-empty, only files with the given types are considered. By default, all types except thumbnails, profile photos,
stickers and wallpapers are deleted.
*/
	file_types: FileType[];
	/**
If non-empty, only files from the given chats are considered. Use 0 as chat identifier to delete files not belonging to
any chat (e.g., profile photos).
*/
	chat_ids: number[];
	/**
If non-empty, files from the given chats are excluded. Use 0 as chat identifier to exclude all files not belonging to
any chat (e.g., profile photos).
*/
	exclude_chat_ids: number[];
	/**
Pass true if statistics about the files that were deleted must be returned instead of the whole storage usage
statistics. Affects only returned statistics.
*/
	return_deleted_file_statistics?: boolean;
	/**
Same as in getStorageStatistics. Affects only returned statistics.
*/
	chat_limit: number;
}

/**
Sets the current network type. Can be called before authorization. Calling this method forces all network connections to
reopen, mitigating the delay in switching between different networks, so it must be called whenever the network is
changed, even if the network type remains the same. Network type is used to check whether the library can use the
network at all and also for collecting detailed network data usage statistics.
Request type for {@link Tdjson#setNetworkType}.
*/
export interface SetNetworkType {
	'@type': 'setNetworkType';
	/**
The new network type; pass null to set network type to networkTypeOther.
*/
	type: NetworkType;
}

/**
Returns network data usage statistics. Can be called before authorization.
Request type for {@link Tdjson#getNetworkStatistics}.
*/
export interface GetNetworkStatistics {
	'@type': 'getNetworkStatistics';
	/**
Pass true to get statistics only for the current library launch.
*/
	only_current?: boolean;
}

/**
Adds the specified data to data usage statistics. Can be called before authorization.
Request type for {@link Tdjson#addNetworkStatistics}.
*/
export interface AddNetworkStatistics {
	'@type': 'addNetworkStatistics';
	/**
The network statistics entry with the data to be added to statistics.
*/
	entry: NetworkStatisticsEntry;
}

/**
Resets all network data usage statistics to zero. Can be called before authorization.
Request type for {@link Tdjson#resetNetworkStatistics}.
*/
export interface ResetNetworkStatistics {
	'@type': 'resetNetworkStatistics';

}

/**
Returns auto-download settings presets for the current user.
Request type for {@link Tdjson#getAutoDownloadSettingsPresets}.
*/
export interface GetAutoDownloadSettingsPresets {
	'@type': 'getAutoDownloadSettingsPresets';

}

/**
Sets auto-download settings.
Request type for {@link Tdjson#setAutoDownloadSettings}.
*/
export interface SetAutoDownloadSettings {
	'@type': 'setAutoDownloadSettings';
	/**
New user auto-download settings.
*/
	settings: AutoDownloadSettings;
	/**
Type of the network for which the new settings are relevant.
*/
	type: NetworkType;
}

/**
Returns information about a bank card.
Request type for {@link Tdjson#getBankCardInfo}.
*/
export interface GetBankCardInfo {
	'@type': 'getBankCardInfo';
	/**
The bank card number.
*/
	bank_card_number: string;
}

/**
Returns one of the available Telegram Passport elements.
Request type for {@link Tdjson#getPassportElement}.
*/
export interface GetPassportElement {
	'@type': 'getPassportElement';
	/**
Telegram Passport element type.
*/
	type: PassportElementType;
	/**
The 2-step verification password of the current user.
*/
	password: string;
}

/**
Returns all available Telegram Passport elements.
Request type for {@link Tdjson#getAllPassportElements}.
*/
export interface GetAllPassportElements {
	'@type': 'getAllPassportElements';
	/**
The 2-step verification password of the current user.
*/
	password: string;
}

/**
Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or
"EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first.
Request type for {@link Tdjson#setPassportElement}.
*/
export interface SetPassportElement {
	'@type': 'setPassportElement';
	/**
Input Telegram Passport element.
*/
	element: InputPassportElement;
	/**
The 2-step verification password of the current user.
*/
	password: string;
}

/**
Deletes a Telegram Passport element.
Request type for {@link Tdjson#deletePassportElement}.
*/
export interface DeletePassportElement {
	'@type': 'deletePassportElement';
	/**
Element type.
*/
	type: PassportElementType;
}

/**
Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not
be able to resend the elements, until the errors are fixed.
Request type for {@link Tdjson#setPassportElementErrors}.
*/
export interface SetPassportElementErrors {
	'@type': 'setPassportElementErrors';
	/**
User identifier.
*/
	user_id: number;
	/**
The errors.
*/
	errors: InputPassportElementError[];
}

/**
Returns an IETF language tag of the language preferred in the country, which must be used to fill native fields in
Telegram Passport personal details. Returns a 404 error if unknown.
Request type for {@link Tdjson#getPreferredCountryLanguage}.
*/
export interface GetPreferredCountryLanguage {
	'@type': 'getPreferredCountryLanguage';
	/**
A two-letter ISO 3166-1 alpha-2 country code.
*/
	country_code: string;
}

/**
Sends a code to verify a phone number to be added to a user's Telegram Passport.
Request type for {@link Tdjson#sendPhoneNumberVerificationCode}.
*/
export interface SendPhoneNumberVerificationCode {
	'@type': 'sendPhoneNumberVerificationCode';
	/**
The phone number of the user, in international format.
*/
	phone_number: string;
	/**
Settings for the authentication of the user's phone number; pass null to use default settings.
*/
	settings: PhoneNumberAuthenticationSettings;
}

/**
Resends the code to verify a phone number to be added to a user's Telegram Passport.
Request type for {@link Tdjson#resendPhoneNumberVerificationCode}.
*/
export interface ResendPhoneNumberVerificationCode {
	'@type': 'resendPhoneNumberVerificationCode';

}

/**
Checks the phone number verification code for Telegram Passport.
Request type for {@link Tdjson#checkPhoneNumberVerificationCode}.
*/
export interface CheckPhoneNumberVerificationCode {
	'@type': 'checkPhoneNumberVerificationCode';
	/**
Verification code to check.
*/
	code: string;
}

/**
Sends a code to verify an email address to be added to a user's Telegram Passport.
Request type for {@link Tdjson#sendEmailAddressVerificationCode}.
*/
export interface SendEmailAddressVerificationCode {
	'@type': 'sendEmailAddressVerificationCode';
	/**
Email address.
*/
	email_address: string;
}

/**
Resends the code to verify an email address to be added to a user's Telegram Passport.
Request type for {@link Tdjson#resendEmailAddressVerificationCode}.
*/
export interface ResendEmailAddressVerificationCode {
	'@type': 'resendEmailAddressVerificationCode';

}

/**
Checks the email address verification code for Telegram Passport.
Request type for {@link Tdjson#checkEmailAddressVerificationCode}.
*/
export interface CheckEmailAddressVerificationCode {
	'@type': 'checkEmailAddressVerificationCode';
	/**
Verification code to check.
*/
	code: string;
}

/**
Returns a Telegram Passport authorization form for sharing data with a service.
Request type for {@link Tdjson#getPassportAuthorizationForm}.
*/
export interface GetPassportAuthorizationForm {
	'@type': 'getPassportAuthorizationForm';
	/**
User identifier of the service's bot.
*/
	bot_user_id: number;
	/**
Telegram Passport element types requested by the service.
*/
	scope: string;
	/**
Service's public key.
*/
	public_key: string;
	/**
Unique request identifier provided by the service.
*/
	nonce: string;
}

/**
Returns already available Telegram Passport elements suitable for completing a Telegram Passport authorization form.
Result can be received only once for each authorization form.
Request type for {@link Tdjson#getPassportAuthorizationFormAvailableElements}.
*/
export interface GetPassportAuthorizationFormAvailableElements {
	'@type': 'getPassportAuthorizationFormAvailableElements';
	/**
Authorization form identifier.
*/
	autorization_form_id: number;
	/**
The 2-step verification password of the current user.
*/
	password: string;
}

/**
Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called
after getPassportAuthorizationFormAvailableElements if some previously available elements are going to be reused.
Request type for {@link Tdjson#sendPassportAuthorizationForm}.
*/
export interface SendPassportAuthorizationForm {
	'@type': 'sendPassportAuthorizationForm';
	/**
Authorization form identifier.
*/
	autorization_form_id: number;
	/**
Types of Telegram Passport elements chosen by user to complete the authorization form.
*/
	types: PassportElementType[];
}

/**
Sends phone number confirmation code to handle links of the type internalLinkTypePhoneNumberConfirmation.
Request type for {@link Tdjson#sendPhoneNumberConfirmationCode}.
*/
export interface SendPhoneNumberConfirmationCode {
	'@type': 'sendPhoneNumberConfirmationCode';
	/**
Hash value from the link.
*/
	hash: string;
	/**
Phone number value from the link.
*/
	phone_number: string;
	/**
Settings for the authentication of the user's phone number; pass null to use default settings.
*/
	settings: PhoneNumberAuthenticationSettings;
}

/**
Resends phone number confirmation code.
Request type for {@link Tdjson#resendPhoneNumberConfirmationCode}.
*/
export interface ResendPhoneNumberConfirmationCode {
	'@type': 'resendPhoneNumberConfirmationCode';

}

/**
Checks phone number confirmation code.
Request type for {@link Tdjson#checkPhoneNumberConfirmationCode}.
*/
export interface CheckPhoneNumberConfirmationCode {
	'@type': 'checkPhoneNumberConfirmationCode';
	/**
Confirmation code to check.
*/
	code: string;
}

/**
Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots
only.
Request type for {@link Tdjson#setBotUpdatesStatus}.
*/
export interface SetBotUpdatesStatus {
	'@type': 'setBotUpdatesStatus';
	/**
The number of pending updates.
*/
	pending_update_count: number;
	/**
The last error message.
*/
	error_message: string;
}

/**
Uploads a file with a sticker; returns the uploaded file.
Request type for {@link Tdjson#uploadStickerFile}.
*/
export interface UploadStickerFile {
	'@type': 'uploadStickerFile';
	/**
Sticker file owner; ignored for regular users.
*/
	user_id: number;
	/**
Sticker file to upload.
*/
	sticker: InputSticker;
}

/**
Returns a suggested name for a new sticker set with a given title.
Request type for {@link Tdjson#getSuggestedStickerSetName}.
*/
export interface GetSuggestedStickerSetName {
	'@type': 'getSuggestedStickerSetName';
	/**
Sticker set title; 1-64 characters.
*/
	title: string;
}

/**
Checks whether a name can be used for a new sticker set.
Request type for {@link Tdjson#checkStickerSetName}.
*/
export interface CheckStickerSetName {
	'@type': 'checkStickerSetName';
	/**
Name to be checked.
*/
	name: string;
}

/**
Creates a new sticker set. Returns the newly created sticker set.
Request type for {@link Tdjson#createNewStickerSet}.
*/
export interface CreateNewStickerSet {
	'@type': 'createNewStickerSet';
	/**
Sticker set owner; ignored for regular users.
*/
	user_id: number;
	/**
Sticker set title; 1-64 characters.
*/
	title: string;
	/**
Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"*
(*<bot_username>* is case insensitive) for bots; 1-64 characters.
*/
	name: string;
	/**
Type of the stickers in the set.
*/
	sticker_type: StickerType;
	/**
List of stickers to be added to the set; must be non-empty. All stickers must have the same format. For TGS stickers,
uploadStickerFile must be used before the sticker is shown.
*/
	stickers: InputSticker[];
	/**
Source of the sticker set; may be empty if unknown.
*/
	source: string;
}

/**
Adds a new sticker to a set; for bots only. Returns the sticker set.
Request type for {@link Tdjson#addStickerToSet}.
*/
export interface AddStickerToSet {
	'@type': 'addStickerToSet';
	/**
Sticker set owner.
*/
	user_id: number;
	/**
Sticker set name.
*/
	name: string;
	/**
Sticker to add to the set.
*/
	sticker: InputSticker;
}

/**
Sets a sticker set thumbnail; for bots only. Returns the sticker set.
Request type for {@link Tdjson#setStickerSetThumbnail}.
*/
export interface SetStickerSetThumbnail {
	'@type': 'setStickerSetThumbnail';
	/**
Sticker set owner.
*/
	user_id: number;
	/**
Sticker set name.
*/
	name: string;
	/**
Thumbnail to set in PNG, TGS, or WEBM format; pass null to remove the sticker set thumbnail. Thumbnail format must match
the format of stickers in the set.
*/
	thumbnail: InputFile;
}

/**
Changes the position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created
by the bot.
Request type for {@link Tdjson#setStickerPositionInSet}.
*/
export interface SetStickerPositionInSet {
	'@type': 'setStickerPositionInSet';
	/**
Sticker.
*/
	sticker: InputFile;
	/**
New position of the sticker in the set, 0-based.
*/
	position: number;
}

/**
Removes a sticker from the set to which it belongs; for bots only. The sticker set must have been created by the bot.
Request type for {@link Tdjson#removeStickerFromSet}.
*/
export interface RemoveStickerFromSet {
	'@type': 'removeStickerFromSet';
	/**
Sticker.
*/
	sticker: InputFile;
}

/**
Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB
can be downloaded.
Request type for {@link Tdjson#getMapThumbnailFile}.
*/
export interface GetMapThumbnailFile {
	'@type': 'getMapThumbnailFile';
	/**
Location of the map center.
*/
	location: Location;
	/**
Map zoom level; 13-20.
*/
	zoom: number;
	/**
Map width in pixels before applying scale; 16-1024.
*/
	width: number;
	/**
Map height in pixels before applying scale; 16-1024.
*/
	height: number;
	/**
Map scale; 1-3.
*/
	scale: number;
	/**
Identifier of a chat in which the thumbnail will be shown. Use 0 if unknown.
*/
	chat_id: number;
}

/**
Returns information about a limit, increased for Premium users. Returns a 404 error if the limit is unknown.
Request type for {@link Tdjson#getPremiumLimit}.
*/
export interface GetPremiumLimit {
	'@type': 'getPremiumLimit';
	/**
Type of the limit.
*/
	limit_type: PremiumLimitType;
}

/**
Returns information about features, available to Premium users.
Request type for {@link Tdjson#getPremiumFeatures}.
*/
export interface GetPremiumFeatures {
	'@type': 'getPremiumFeatures';
	/**
Source of the request; pass null if the method is called from some non-standard source.
*/
	source: PremiumSource;
}

/**
Returns examples of premium stickers for demonstration purposes.
Request type for {@link Tdjson#getPremiumStickerExamples}.
*/
export interface GetPremiumStickerExamples {
	'@type': 'getPremiumStickerExamples';

}

/**
Informs TDLib that the user viewed detailed information about a Premium feature on the Premium features screen.
Request type for {@link Tdjson#viewPremiumFeature}.
*/
export interface ViewPremiumFeature {
	'@type': 'viewPremiumFeature';
	/**
The viewed premium feature.
*/
	feature: PremiumFeature;
}

/**
Informs TDLib that the user clicked Premium subscription button on the Premium features screen.
Request type for {@link Tdjson#clickPremiumSubscriptionButton}.
*/
export interface ClickPremiumSubscriptionButton {
	'@type': 'clickPremiumSubscriptionButton';

}

/**
Returns state of Telegram Premium subscription and promotion videos for Premium features.
Request type for {@link Tdjson#getPremiumState}.
*/
export interface GetPremiumState {
	'@type': 'getPremiumState';

}

/**
Checks whether Telegram Premium purchase is possible. Must be called before in-store Premium purchase.
Request type for {@link Tdjson#canPurchasePremium}.
*/
export interface CanPurchasePremium {
	'@type': 'canPurchasePremium';
	/**
Transaction purpose.
*/
	purpose: StorePaymentPurpose;
}

/**
Informs server about a purchase through App Store. For official applications only.
Request type for {@link Tdjson#assignAppStoreTransaction}.
*/
export interface AssignAppStoreTransaction {
	'@type': 'assignAppStoreTransaction';
	/**
App Store receipt.
*/
	receipt: string;
	/**
Transaction purpose.
*/
	purpose: StorePaymentPurpose;
}

/**
Informs server about a purchase through Google Play. For official applications only.
Request type for {@link Tdjson#assignGooglePlayTransaction}.
*/
export interface AssignGooglePlayTransaction {
	'@type': 'assignGooglePlayTransaction';
	/**
Application package name.
*/
	package_name: string;
	/**
Identifier of the purchased store product.
*/
	store_product_id: string;
	/**
Google Play purchase token.
*/
	purchase_token: string;
	/**
Transaction purpose.
*/
	purpose: StorePaymentPurpose;
}

/**
Accepts Telegram terms of services.
Request type for {@link Tdjson#acceptTermsOfService}.
*/
export interface AcceptTermsOfService {
	'@type': 'acceptTermsOfService';
	/**
Terms of service identifier.
*/
	terms_of_service_id: string;
}

/**
Sends a custom request; for bots only.
Request type for {@link Tdjson#sendCustomRequest}.
*/
export interface SendCustomRequest {
	'@type': 'sendCustomRequest';
	/**
The method name.
*/
	method: string;
	/**
JSON-serialized method parameters.
*/
	parameters: string;
}

/**
Answers a custom query; for bots only.
Request type for {@link Tdjson#answerCustomQuery}.
*/
export interface AnswerCustomQuery {
	'@type': 'answerCustomQuery';
	/**
Identifier of a custom query.
*/
	custom_query_id: string;
	/**
JSON-serialized answer to the query.
*/
	data: string;
}

/**
Succeeds after a specified amount of time has passed. Can be called before initialization.
Request type for {@link Tdjson#setAlarm}.
*/
export interface SetAlarm {
	'@type': 'setAlarm';
	/**
Number of seconds before the function returns.
*/
	seconds: number;
}

/**
Returns information about existing countries. Can be called before authorization.
Request type for {@link Tdjson#getCountries}.
*/
export interface GetCountries {
	'@type': 'getCountries';

}

/**
Uses the current IP address to find the current country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be
called before authorization.
Request type for {@link Tdjson#getCountryCode}.
*/
export interface GetCountryCode {
	'@type': 'getCountryCode';

}

/**
Returns information about a phone number by its prefix. Can be called before authorization.
Request type for {@link Tdjson#getPhoneNumberInfo}.
*/
export interface GetPhoneNumberInfo {
	'@type': 'getPhoneNumberInfo';
	/**
The phone number prefix.
*/
	phone_number_prefix: string;
}

/**
Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after
changing localization to the specified language if properly localized country information is expected. Can be called
synchronously.
Request type for {@link Tdjson#getPhoneNumberInfoSync}.
*/
export interface GetPhoneNumberInfoSync {
	'@type': 'getPhoneNumberInfoSync';
	/**
A two-letter ISO 639-1 language code for country information localization.
*/
	language_code: string;
	/**
The phone number prefix.
*/
	phone_number_prefix: string;
}

/**
Returns the link for downloading official Telegram application to be used when the current user invites friends to
Telegram.
Request type for {@link Tdjson#getApplicationDownloadLink}.
*/
export interface GetAppDownloadLink {
	'@type': 'getApplicationDownloadLink';

}

/**
Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature"
for testing. Returns a 404 error for unknown links. Can be called before authorization.
Request type for {@link Tdjson#getDeepLinkInfo}.
*/
export interface GetDeepLinkInfo {
	'@type': 'getDeepLinkInfo';
	/**
The link.
*/
	link: string;
}

/**
Returns application config, provided by the server. Can be called before authorization.
Request type for {@link Tdjson#getApplicationConfig}.
*/
export interface GetAppConfig {
	'@type': 'getApplicationConfig';

}

/**
Saves application log event on the server. Can be called before authorization.
Request type for {@link Tdjson#saveApplicationLogEvent}.
*/
export interface SaveAppLogEvent {
	'@type': 'saveApplicationLogEvent';
	/**
Event type.
*/
	type: string;
	/**
Optional chat identifier, associated with the event.
*/
	chat_id: number;
	/**
The log event data.
*/
	data: JsonValue;
}

/**
Adds a proxy server for network requests. Can be called before authorization.
Request type for {@link Tdjson#addProxy}.
*/
export interface AddProxy {
	'@type': 'addProxy';
	/**
Proxy server IP address.
*/
	server: string;
	/**
Proxy server port.
*/
	port: number;
	/**
Pass true to immediately enable the proxy.
*/
	enable?: boolean;
	/**
Proxy type.
*/
	type: ProxyType;
}

/**
Edits an existing proxy server for network requests. Can be called before authorization.
Request type for {@link Tdjson#editProxy}.
*/
export interface EditProxy {
	'@type': 'editProxy';
	/**
Proxy identifier.
*/
	proxy_id: number;
	/**
Proxy server IP address.
*/
	server: string;
	/**
Proxy server port.
*/
	port: number;
	/**
Pass true to immediately enable the proxy.
*/
	enable?: boolean;
	/**
Proxy type.
*/
	type: ProxyType;
}

/**
Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization.
Request type for {@link Tdjson#enableProxy}.
*/
export interface EnableProxy {
	'@type': 'enableProxy';
	/**
Proxy identifier.
*/
	proxy_id: number;
}

/**
Disables the currently enabled proxy. Can be called before authorization.
Request type for {@link Tdjson#disableProxy}.
*/
export interface DisableProxy {
	'@type': 'disableProxy';

}

/**
Removes a proxy server. Can be called before authorization.
Request type for {@link Tdjson#removeProxy}.
*/
export interface RemoveProxy {
	'@type': 'removeProxy';
	/**
Proxy identifier.
*/
	proxy_id: number;
}

/**
Returns list of proxies that are currently set up. Can be called before authorization.
Request type for {@link Tdjson#getProxies}.
*/
export interface GetProxies {
	'@type': 'getProxies';

}

/**
Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called
before authorization.
Request type for {@link Tdjson#getProxyLink}.
*/
export interface GetProxyLink {
	'@type': 'getProxyLink';
	/**
Proxy identifier.
*/
	proxy_id: number;
}

/**
Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization.
Request type for {@link Tdjson#pingProxy}.
*/
export interface PingProxy {
	'@type': 'pingProxy';
	/**
Proxy identifier. Use 0 to ping a Telegram server without a proxy.
*/
	proxy_id: number;
}

/**
Sets new log stream for internal logging of TDLib. Can be called synchronously.
Request type for {@link Tdjson#setLogStream}.
*/
export interface SetLogStream {
	'@type': 'setLogStream';
	/**
New log stream.
*/
	log_stream: LogStream;
}

/**
Returns information about currently used log stream for internal logging of TDLib. Can be called synchronously.
Request type for {@link Tdjson#getLogStream}.
*/
export interface GetLogStream {
	'@type': 'getLogStream';

}

/**
Sets the verbosity level of the internal logging of TDLib. Can be called synchronously.
Request type for {@link Tdjson#setLogVerbosityLevel}.
*/
export interface SetLogVerbosityLevel {
	'@type': 'setLogVerbosityLevel';
	/**
New value of the verbosity level for logging. Value 0 corresponds to fatal errors, value 1 corresponds to errors, value
2 corresponds to warnings and debug warnings, value 3 corresponds to informational, value 4 corresponds to debug, value
5 corresponds to verbose debug, value greater than 5 and up to 1023 can be used to enable even more logging.
*/
	new_verbosity_level: number;
}

/**
Returns current verbosity level of the internal logging of TDLib. Can be called synchronously.
Request type for {@link Tdjson#getLogVerbosityLevel}.
*/
export interface GetLogVerbosityLevel {
	'@type': 'getLogVerbosityLevel';

}

/**
Returns list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications",
"proxy"]. Can be called synchronously.
Request type for {@link Tdjson#getLogTags}.
*/
export interface GetLogTags {
	'@type': 'getLogTags';

}

/**
Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously.
Request type for {@link Tdjson#setLogTagVerbosityLevel}.
*/
export interface SetLogTagVerbosityLevel {
	'@type': 'setLogTagVerbosityLevel';
	/**
Logging tag to change verbosity level.
*/
	tag: string;
	/**
New verbosity level; 1-1024.
*/
	new_verbosity_level: number;
}

/**
Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously.
Request type for {@link Tdjson#getLogTagVerbosityLevel}.
*/
export interface GetLogTagVerbosityLevel {
	'@type': 'getLogTagVerbosityLevel';
	/**
Logging tag to change verbosity level.
*/
	tag: string;
}

/**
Adds a message to TDLib internal log. Can be called synchronously.
Request type for {@link Tdjson#addLogMessage}.
*/
export interface AddLogMessage {
	'@type': 'addLogMessage';
	/**
The minimum verbosity level needed for the message to be logged; 0-1023.
*/
	verbosity_level: number;
	/**
Text of a message to log.
*/
	text: string;
}

/**
Returns support information for the given user; for Telegram support only.
Request type for {@link Tdjson#getUserSupportInfo}.
*/
export interface GetUserSupportInfo {
	'@type': 'getUserSupportInfo';
	/**
User identifier.
*/
	user_id: number;
}

/**
Sets support information for the given user; for Telegram support only.
Request type for {@link Tdjson#setUserSupportInfo}.
*/
export interface SetUserSupportInfo {
	'@type': 'setUserSupportInfo';
	/**
User identifier.
*/
	user_id: number;
	/**
New information message.
*/
	message: FormattedText;
}

/**
Does nothing; for testing only. This is an offline method. Can be called before authorization.
Request type for {@link Tdjson#testCallEmpty}.
*/
export interface TestCallEmpty {
	'@type': 'testCallEmpty';

}

/**
Returns the received string; for testing only. This is an offline method. Can be called before authorization.
Request type for {@link Tdjson#testCallString}.
*/
export interface TestCallString {
	'@type': 'testCallString';
	/**
String to return.
*/
	x: string;
}

/**
Returns the received bytes; for testing only. This is an offline method. Can be called before authorization.
Request type for {@link Tdjson#testCallBytes}.
*/
export interface TestCallBytes {
	'@type': 'testCallBytes';
	/**
Bytes to return.
*/
	x: string;
}

/**
Returns the received vector of numbers; for testing only. This is an offline method. Can be called before authorization.
Request type for {@link Tdjson#testCallVectorInt}.
*/
export interface TestCallVectorInt {
	'@type': 'testCallVectorInt';
	/**
Vector of numbers to return.
*/
	x: number[];
}

/**
Returns the received vector of objects containing a number; for testing only. This is an offline method. Can be called
before authorization.
Request type for {@link Tdjson#testCallVectorIntObject}.
*/
export interface TestCallVectorIntObject {
	'@type': 'testCallVectorIntObject';
	/**
Vector of objects to return.
*/
	x: TestInt[];
}

/**
Returns the received vector of strings; for testing only. This is an offline method. Can be called before authorization.
Request type for {@link Tdjson#testCallVectorString}.
*/
export interface TestCallVectorString {
	'@type': 'testCallVectorString';
	/**
Vector of strings to return.
*/
	x: string[];
}

/**
Returns the received vector of objects containing a string; for testing only. This is an offline method. Can be called
before authorization.
Request type for {@link Tdjson#testCallVectorStringObject}.
*/
export interface TestCallVectorStringObject {
	'@type': 'testCallVectorStringObject';
	/**
Vector of objects to return.
*/
	x: TestString[];
}

/**
Returns the squared received number; for testing only. This is an offline method. Can be called before authorization.
Request type for {@link Tdjson#testSquareInt}.
*/
export interface TestSquareInt {
	'@type': 'testSquareInt';
	/**
Number to square.
*/
	x: number;
}

/**
Sends a simple network request to the Telegram servers; for testing only. Can be called before authorization.
Request type for {@link Tdjson#testNetwork}.
*/
export interface TestNetwork {
	'@type': 'testNetwork';

}

/**
Sends a simple network request to the Telegram servers via proxy; for testing only. Can be called before authorization.
Request type for {@link Tdjson#testProxy}.
*/
export interface TestProxy {
	'@type': 'testProxy';
	/**
Proxy server IP address.
*/
	server: string;
	/**
Proxy server port.
*/
	port: number;
	/**
Proxy type.
*/
	type: ProxyType;
	/**
Identifier of a datacenter with which to test connection.
*/
	dc_id: number;
	/**
The maximum overall timeout for the request.
*/
	timeout: number;
}

/**
Forces an updates.getDifference call to the Telegram servers; for testing only.
Request type for {@link Tdjson#testGetDifference}.
*/
export interface TestGetDifference {
	'@type': 'testGetDifference';

}

/**
Does nothing and ensures that the Update object is used; for testing only. This is an offline method. Can be called
before authorization.
Request type for {@link Tdjson#testUseUpdate}.
*/
export interface TestUseUpdate {
	'@type': 'testUseUpdate';

}

/**
Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously.
Request type for {@link Tdjson#testReturnError}.
*/
export interface TestReturnError {
	'@type': 'testReturnError';
	/**
The error to be returned.
*/
	error: Error;
}

export type Request =
	| GetAuthorizationState
	| SetTdlibParameters
	| SetAuthenticationPhoneNumber
	| SetAuthenticationEmailAddress
	| ResendAuthenticationCode
	| CheckAuthenticationEmailCode
	| CheckAuthenticationCode
	| RequestQrCodeAuthentication
	| RegisterUser
	| CheckAuthenticationPassword
	| RequestAuthenticationPasswordRecovery
	| CheckAuthenticationPasswordRecoveryCode
	| RecoverAuthenticationPassword
	| CheckAuthenticationBotToken
	| LogOut
	| Close
	| Destroy
	| ConfirmQrCodeAuthentication
	| GetCurrentState
	| SetDatabaseEncryptionKey
	| GetPasswordState
	| SetPassword
	| SetLoginEmailAddress
	| ResendLoginEmailAddressCode
	| CheckLoginEmailAddressCode
	| GetRecoveryEmailAddress
	| SetRecoveryEmailAddress
	| CheckRecoveryEmailAddressCode
	| ResendRecoveryEmailAddressCode
	| RequestPasswordRecovery
	| CheckPasswordRecoveryCode
	| RecoverPassword
	| ResetPassword
	| CancelPasswordReset
	| CreateTemporaryPassword
	| GetTemporaryPasswordState
	| GetMe
	| GetUser
	| GetUserFullInfo
	| GetBasicGroup
	| GetBasicGroupFullInfo
	| GetSupergroup
	| GetSupergroupFullInfo
	| GetSecretChat
	| GetChat
	| GetMessage
	| GetMessageLocally
	| GetRepliedMessage
	| GetChatPinnedMessage
	| GetCallbackQueryMessage
	| GetMessages
	| GetMessageThread
	| GetMessageViewers
	| GetFile
	| GetRemoteFile
	| LoadChats
	| GetChats
	| SearchPublicChat
	| SearchPublicChats
	| SearchChats
	| SearchChatsOnServer
	| SearchChatsNearby
	| GetTopChats
	| RemoveTopChat
	| AddRecentlyFoundChat
	| RemoveRecentlyFoundChat
	| ClearRecentlyFoundChats
	| GetRecentlyOpenedChats
	| CheckChatUsername
	| GetCreatedPublicChats
	| CheckCreatedPublicChatsLimit
	| GetSuitableDiscussionChats
	| GetInactiveSupergroupChats
	| GetGroupsInCommon
	| GetChatHistory
	| GetMessageThreadHistory
	| DeleteChatHistory
	| DeleteChat
	| SearchChatMessages
	| SearchMessages
	| SearchSecretMessages
	| SearchCallMessages
	| SearchOutgoingDocumentMessages
	| DeleteAllCallMessages
	| SearchChatRecentLocationMessages
	| GetActiveLiveLocationMessages
	| GetChatMessageByDate
	| GetChatSparseMessagePositions
	| GetChatMessageCalendar
	| GetChatMessageCount
	| GetChatMessagePosition
	| GetChatScheduledMessages
	| GetMessagePublicForwards
	| GetChatSponsoredMessage
	| RemoveNotification
	| RemoveNotificationGroup
	| GetMessageLink
	| GetMessageEmbeddingCode
	| GetMessageLinkInfo
	| TranslateText
	| RecognizeSpeech
	| RateSpeechRecognition
	| GetChatAvailableMessageSenders
	| SetChatMessageSender
	| SendMessage
	| SendMessageAlbum
	| SendBotStartMessage
	| SendInlineQueryResultMessage
	| ForwardMessages
	| ResendMessages
	| SendChatScreenshotTakenNotification
	| AddLocalMessage
	| DeleteMessages
	| DeleteChatMessagesBySender
	| DeleteChatMessagesByDate
	| EditMessageText
	| EditMessageLiveLocation
	| EditMessageMedia
	| EditMessageCaption
	| EditMessageReplyMarkup
	| EditInlineMessageText
	| EditInlineMessageLiveLocation
	| EditInlineMessageMedia
	| EditInlineMessageCaption
	| EditInlineMessageReplyMarkup
	| EditMessageSchedulingState
	| GetEmojiReaction
	| GetCustomEmojiReactionAnimations
	| GetMessageAvailableReactions
	| ClearRecentReactions
	| AddMessageReaction
	| RemoveMessageReaction
	| GetMessageAddedReactions
	| SetDefaultReactionType
	| GetTextEntities
	| ParseTextEntities
	| ParseMarkdown
	| GetMarkdownText
	| GetFileMimeType
	| GetFileExtension
	| CleanFileName
	| GetLanguagePackString
	| GetJsonValue
	| GetJsonString
	| GetThemeParametersJsonString
	| SetPollAnswer
	| GetPollVoters
	| StopPoll
	| HideSuggestedAction
	| GetLoginUrlInfo
	| GetLoginUrl
	| GetInlineQueryResults
	| AnswerInlineQuery
	| GetWebAppUrl
	| SendWebAppData
	| OpenWebApp
	| CloseWebApp
	| AnswerWebAppQuery
	| GetCallbackQueryAnswer
	| AnswerCallbackQuery
	| AnswerShippingQuery
	| AnswerPreCheckoutQuery
	| SetGameScore
	| SetInlineGameScore
	| GetGameHighScores
	| GetInlineGameHighScores
	| DeleteChatReplyMarkup
	| SendChatAction
	| OpenChat
	| CloseChat
	| ViewMessages
	| OpenMessageContent
	| ClickAnimatedEmojiMessage
	| GetInternalLinkType
	| GetExternalLinkInfo
	| GetExternalLink
	| ReadAllChatMentions
	| ReadAllChatReactions
	| CreatePrivateChat
	| CreateBasicGroupChat
	| CreateSupergroupChat
	| CreateSecretChat
	| CreateNewBasicGroupChat
	| CreateNewSupergroupChat
	| CreateNewSecretChat
	| UpgradeBasicGroupChatToSupergroupChat
	| GetChatListsToAddChat
	| AddChatToList
	| GetChatFilter
	| CreateChatFilter
	| EditChatFilter
	| DeleteChatFilter
	| ReorderChatFilters
	| GetRecommendedChatFilters
	| GetChatFilterDefaultIconName
	| SetChatTitle
	| SetChatPhoto
	| SetChatMessageTtl
	| SetChatPermissions
	| SetChatTheme
	| SetChatDraftMessage
	| SetChatNotificationSettings
	| ToggleChatHasProtectedContent
	| ToggleChatIsMarkedAsUnread
	| ToggleChatDefaultDisableNotification
	| SetChatAvailableReactions
	| SetChatClientData
	| SetChatDescription
	| SetChatDiscussionGroup
	| SetChatLocation
	| SetChatSlowModeDelay
	| PinChatMessage
	| UnpinChatMessage
	| UnpinAllChatMessages
	| JoinChat
	| LeaveChat
	| AddChatMember
	| AddChatMembers
	| SetChatMemberStatus
	| BanChatMember
	| CanTransferOwnership
	| TransferChatOwnership
	| GetChatMember
	| SearchChatMembers
	| GetChatAdministrators
	| ClearAllDraftMessages
	| GetSavedNotificationSound
	| GetSavedNotificationSounds
	| AddSavedNotificationSound
	| RemoveSavedNotificationSound
	| GetChatNotificationSettingsExceptions
	| GetScopeNotificationSettings
	| SetScopeNotificationSettings
	| ResetAllNotificationSettings
	| ToggleChatIsPinned
	| SetPinnedChats
	| GetAttachmentMenuBot
	| ToggleBotIsAddedToAttachmentMenu
	| GetThemedEmojiStatuses
	| GetRecentEmojiStatuses
	| GetDefaultEmojiStatuses
	| ClearRecentEmojiStatuses
	| DownloadFile
	| GetFileDownloadedPrefixSize
	| CancelDownloadFile
	| GetSuggestedFileName
	| PreliminaryUploadFile
	| CancelPreliminaryUploadFile
	| WriteGeneratedFilePart
	| SetFileGenerationProgress
	| FinishFileGeneration
	| ReadFilePart
	| DeleteFile
	| AddFileToDownloads
	| ToggleDownloadIsPaused
	| ToggleAllDownloadsArePaused
	| RemoveFileFromDownloads
	| RemoveAllFilesFromDownloads
	| SearchFileDownloads
	| GetMessageFileType
	| GetMessageImportConfirmationText
	| ImportMessages
	| ReplacePrimaryChatInviteLink
	| CreateChatInviteLink
	| EditChatInviteLink
	| GetChatInviteLink
	| GetChatInviteLinkCounts
	| GetChatInviteLinks
	| GetChatInviteLinkMembers
	| RevokeChatInviteLink
	| DeleteRevokedChatInviteLink
	| DeleteAllRevokedChatInviteLinks
	| CheckChatInviteLink
	| JoinChatByInviteLink
	| GetChatJoinRequests
	| ProcessChatJoinRequest
	| ProcessChatJoinRequests
	| CreateCall
	| AcceptCall
	| SendCallSignalingData
	| DiscardCall
	| SendCallRating
	| SendCallDebugInformation
	| SendCallLog
	| GetVideoChatAvailableParticipants
	| SetVideoChatDefaultParticipant
	| CreateVideoChat
	| GetVideoChatRtmpUrl
	| ReplaceVideoChatRtmpUrl
	| GetGroupCall
	| StartScheduledGroupCall
	| ToggleGroupCallEnabledStartNotification
	| JoinGroupCall
	| StartGroupCallScreenSharing
	| ToggleGroupCallScreenSharingIsPaused
	| EndGroupCallScreenSharing
	| SetGroupCallTitle
	| ToggleGroupCallMuteNewParticipants
	| InviteGroupCallParticipants
	| GetGroupCallInviteLink
	| RevokeGroupCallInviteLink
	| StartGroupCallRecording
	| EndGroupCallRecording
	| ToggleGroupCallIsMyVideoPaused
	| ToggleGroupCallIsMyVideoEnabled
	| SetGroupCallParticipantIsSpeaking
	| ToggleGroupCallParticipantIsMuted
	| SetGroupCallParticipantVolumeLevel
	| ToggleGroupCallParticipantIsHandRaised
	| LoadGroupCallParticipants
	| LeaveGroupCall
	| EndGroupCall
	| GetGroupCallStreams
	| GetGroupCallStreamSegment
	| ToggleMessageSenderIsBlocked
	| BlockMessageSenderFromReplies
	| GetBlockedMessageSenders
	| AddContact
	| ImportContacts
	| GetContacts
	| SearchContacts
	| RemoveContacts
	| GetImportedContactCount
	| ChangeImportedContacts
	| ClearImportedContacts
	| SearchUserByPhoneNumber
	| SharePhoneNumber
	| GetUserProfilePhotos
	| GetStickers
	| SearchStickers
	| GetPremiumStickers
	| GetInstalledStickerSets
	| GetArchivedStickerSets
	| GetTrendingStickerSets
	| GetAttachedStickerSets
	| GetStickerSet
	| SearchStickerSet
	| SearchInstalledStickerSets
	| SearchStickerSets
	| ChangeStickerSet
	| ViewTrendingStickerSets
	| ReorderInstalledStickerSets
	| GetRecentStickers
	| AddRecentSticker
	| RemoveRecentSticker
	| ClearRecentStickers
	| GetFavoriteStickers
	| AddFavoriteSticker
	| RemoveFavoriteSticker
	| GetStickerEmojis
	| SearchEmojis
	| GetAnimatedEmoji
	| GetEmojiSuggestionsUrl
	| GetCustomEmojiStickers
	| GetSavedAnimations
	| AddSavedAnimation
	| RemoveSavedAnimation
	| GetRecentInlineBots
	| SearchHashtags
	| RemoveRecentHashtag
	| GetWebPagePreview
	| GetWebPageInstantView
	| SetProfilePhoto
	| DeleteProfilePhoto
	| SetName
	| SetBio
	| SetUsername
	| SetEmojiStatus
	| SetLocation
	| ChangePhoneNumber
	| ResendChangePhoneNumberCode
	| CheckChangePhoneNumberCode
	| SetCommands
	| DeleteCommands
	| GetCommands
	| SetMenuButton
	| GetMenuButton
	| SetDefaultGroupAdministratorRights
	| SetDefaultChannelAdministratorRights
	| GetActiveSessions
	| TerminateSession
	| TerminateAllOtherSessions
	| ToggleSessionCanAcceptCalls
	| ToggleSessionCanAcceptSecretChats
	| SetInactiveSessionTtl
	| GetConnectedWebsites
	| DisconnectWebsite
	| DisconnectAllWebsites
	| SetSupergroupUsername
	| SetSupergroupStickerSet
	| ToggleSupergroupSignMessages
	| ToggleSupergroupJoinToSendMessages
	| ToggleSupergroupJoinByRequest
	| ToggleSupergroupIsAllHistoryAvailable
	| ToggleSupergroupIsBroadcastGroup
	| ReportSupergroupSpam
	| GetSupergroupMembers
	| CloseSecretChat
	| GetChatEventLog
	| GetPaymentForm
	| ValidateOrderInfo
	| SendPaymentForm
	| GetPaymentReceipt
	| GetSavedOrderInfo
	| DeleteSavedOrderInfo
	| DeleteSavedCredentials
	| CreateInvoiceLink
	| GetSupportUser
	| GetBackgrounds
	| GetBackgroundUrl
	| SearchBackground
	| SetBackground
	| RemoveBackground
	| ResetBackgrounds
	| GetLocalizationTargetInfo
	| GetLanguagePackInfo
	| GetLanguagePackStrings
	| SynchronizeLanguagePack
	| AddCustomServerLanguagePack
	| SetCustomLanguagePack
	| EditCustomLanguagePackInfo
	| SetCustomLanguagePackString
	| DeleteLanguagePack
	| RegisterDevice
	| ProcessPushNotification
	| GetPushReceiverId
	| GetRecentlyVisitedTMeUrls
	| SetUserPrivacySettingRules
	| GetUserPrivacySettingRules
	| GetOption
	| SetOption
	| SetAccountTtl
	| GetAccountTtl
	| DeleteAccount
	| RemoveChatActionBar
	| ReportChat
	| ReportChatPhoto
	| ReportMessageReactions
	| GetChatStatistics
	| GetMessageStatistics
	| GetStatisticalGraph
	| GetStorageStatistics
	| GetStorageStatisticsFast
	| GetDatabaseStatistics
	| OptimizeStorage
	| SetNetworkType
	| GetNetworkStatistics
	| AddNetworkStatistics
	| ResetNetworkStatistics
	| GetAutoDownloadSettingsPresets
	| SetAutoDownloadSettings
	| GetBankCardInfo
	| GetPassportElement
	| GetAllPassportElements
	| SetPassportElement
	| DeletePassportElement
	| SetPassportElementErrors
	| GetPreferredCountryLanguage
	| SendPhoneNumberVerificationCode
	| ResendPhoneNumberVerificationCode
	| CheckPhoneNumberVerificationCode
	| SendEmailAddressVerificationCode
	| ResendEmailAddressVerificationCode
	| CheckEmailAddressVerificationCode
	| GetPassportAuthorizationForm
	| GetPassportAuthorizationFormAvailableElements
	| SendPassportAuthorizationForm
	| SendPhoneNumberConfirmationCode
	| ResendPhoneNumberConfirmationCode
	| CheckPhoneNumberConfirmationCode
	| SetBotUpdatesStatus
	| UploadStickerFile
	| GetSuggestedStickerSetName
	| CheckStickerSetName
	| CreateNewStickerSet
	| AddStickerToSet
	| SetStickerSetThumbnail
	| SetStickerPositionInSet
	| RemoveStickerFromSet
	| GetMapThumbnailFile
	| GetPremiumLimit
	| GetPremiumFeatures
	| GetPremiumStickerExamples
	| ViewPremiumFeature
	| ClickPremiumSubscriptionButton
	| GetPremiumState
	| CanPurchasePremium
	| AssignAppStoreTransaction
	| AssignGooglePlayTransaction
	| AcceptTermsOfService
	| SendCustomRequest
	| AnswerCustomQuery
	| SetAlarm
	| GetCountries
	| GetCountryCode
	| GetPhoneNumberInfo
	| GetPhoneNumberInfoSync
	| GetAppDownloadLink
	| GetDeepLinkInfo
	| GetAppConfig
	| SaveAppLogEvent
	| AddProxy
	| EditProxy
	| EnableProxy
	| DisableProxy
	| RemoveProxy
	| GetProxies
	| GetProxyLink
	| PingProxy
	| SetLogStream
	| GetLogStream
	| SetLogVerbosityLevel
	| GetLogVerbosityLevel
	| GetLogTags
	| SetLogTagVerbosityLevel
	| GetLogTagVerbosityLevel
	| AddLogMessage
	| GetUserSupportInfo
	| SetUserSupportInfo
	| TestCallEmpty
	| TestCallString
	| TestCallBytes
	| TestCallVectorInt
	| TestCallVectorIntObject
	| TestCallVectorString
	| TestCallVectorStringObject
	| TestSquareInt
	| TestNetwork
	| TestProxy
	| TestGetDifference
	| TestUseUpdate
	| TestReturnError;

export abstract class Tdjson {
	/**
Returns the current authorization state; this is an offline request. For informational purposes only. Use
updateAuthorizationState instead to maintain the current authorization state. Can be called before initialization.
*/
	async getAuthorizationState(): Promise<AuthorizationState> {
		return this._request({
			'@type': 'getAuthorizationState',
		});
	}

	/**
Sets the parameters for TDLib initialization. Works only when the current authorization state is
authorizationStateWaitTdlibParameters.
*/
	async setTdlibParameters(options: Omit<SetTdlibParameters, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setTdlibParameters',
		});
	}

	/**
Sets the phone number of the user and sends an authentication code to the user. Works only when the current
authorization state is authorizationStateWaitPhoneNumber, or if there is no pending authentication query and the current
authorization state is authorizationStateWaitCode, authorizationStateWaitRegistration, or
authorizationStateWaitPassword.
*/
	async setAuthenticationPhoneNumber(options: Omit<SetAuthenticationPhoneNumber, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setAuthenticationPhoneNumber',
		});
	}

	/**
Sets the email address of the user and sends an authentication code to the email address. Works only when the current
authorization state is authorizationStateWaitEmailAddress.
*/
	async setAuthenticationEmailAddress(options: Omit<SetAuthenticationEmailAddress, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setAuthenticationEmailAddress',
		});
	}

	/**
Resends an authentication code to the user. Works only when the current authorization state is
authorizationStateWaitCode, the next_code_type of the result is not null and the server-specified timeout has passed, or
when the current authorization state is authorizationStateWaitEmailCode.
*/
	async resendAuthenticationCode(): Promise<Ok> {
		return this._request({
			'@type': 'resendAuthenticationCode',
		});
	}

	/**
Checks the authentication of a email address. Works only when the current authorization state is
authorizationStateWaitEmailCode.
*/
	async checkAuthenticationEmailCode(options: Omit<CheckAuthenticationEmailCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkAuthenticationEmailCode',
		});
	}

	/**
Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode.
*/
	async checkAuthenticationCode(options: Omit<CheckAuthenticationCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkAuthenticationCode',
		});
	}

	/**
Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current
authorization state is authorizationStateWaitPhoneNumber, or if there is no pending authentication query and the current
authorization state is authorizationStateWaitCode, authorizationStateWaitRegistration, or
authorizationStateWaitPassword.
*/
	async requestQrCodeAuthentication(options: Omit<RequestQrCodeAuthentication, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'requestQrCodeAuthentication',
		});
	}

	/**
Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration.
*/
	async registerUser(options: Omit<RegisterUser, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'registerUser',
		});
	}

	/**
Checks the 2-step verification password for correctness. Works only when the current authorization state is
authorizationStateWaitPassword.
*/
	async checkAuthenticationPassword(options: Omit<CheckAuthenticationPassword, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkAuthenticationPassword',
		});
	}

	/**
Requests to send a 2-step verification password recovery code to an email address that was previously set up. Works only
when the current authorization state is authorizationStateWaitPassword.
*/
	async requestAuthenticationPasswordRecovery(): Promise<Ok> {
		return this._request({
			'@type': 'requestAuthenticationPasswordRecovery',
		});
	}

	/**
Checks whether a 2-step verification password recovery code sent to an email address is valid. Works only when the
current authorization state is authorizationStateWaitPassword.
*/
	async checkAuthenticationPasswordRecoveryCode(options: Omit<CheckAuthenticationPasswordRecoveryCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkAuthenticationPasswordRecoveryCode',
		});
	}

	/**
Recovers the 2-step verification password with a password recovery code sent to an email address that was previously set
up. Works only when the current authorization state is authorizationStateWaitPassword.
*/
	async recoverAuthenticationPassword(options: Omit<RecoverAuthenticationPassword, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'recoverAuthenticationPassword',
		});
	}

	/**
Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is
authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to
log in.
*/
	async checkAuthenticationBotToken(options: Omit<CheckAuthenticationBotToken, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkAuthenticationBotToken',
		});
	}

	/**
Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be
destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent.
*/
	async logOut(): Promise<Ok> {
		return this._request({
			'@type': 'logOut',
		});
	}

	/**
Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes,
updateAuthorizationState with authorizationStateClosed will be sent. Can be called before initialization.
*/
	async close(): Promise<Ok> {
		return this._request({
			'@type': 'close',
		});
	}

	/**
Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in
the list of all active sessions. All local data will be destroyed. After the destruction completes
updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization.
*/
	async destroy(): Promise<Ok> {
		return this._request({
			'@type': 'destroy',
		});
	}

	/**
Confirms QR code authentication on another device. Returns created session on success.
*/
	async confirmQrCodeAuthentication(options: Omit<ConfirmQrCodeAuthentication, '@type'>): Promise<Session> {
		return this._request({
			...options,
			'@type': 'confirmQrCodeAuthentication',
		});
	}

	/**
Returns all updates needed to restore current TDLib state, i.e. all actual
UpdateAuthorizationState/UpdateUser/UpdateNewChat and others. This is especially useful if TDLib is run in a separate
process. Can be called before initialization.
*/
	async getCurrentState(): Promise<Updates> {
		return this._request({
			'@type': 'getCurrentState',
		});
	}

	/**
Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain.
*/
	async setDatabaseEncryptionKey(options: Omit<SetDatabaseEncryptionKey, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setDatabaseEncryptionKey',
		});
	}

	/**
Returns the current state of 2-step verification.
*/
	async getPasswordState(): Promise<PasswordState> {
		return this._request({
			'@type': 'getPasswordState',
		});
	}

	/**
Changes the 2-step verification password for the current user. If a new recovery email address is specified, then the
change will not be applied until the new recovery email address is confirmed.
*/
	async setPassword(options: Omit<SetPassword, '@type'>): Promise<PasswordState> {
		return this._request({
			...options,
			'@type': 'setPassword',
		});
	}

	/**
Changes the login email address of the user. The change will not be applied until the new login email address is
confirmed with `checkLoginEmailAddressCode`. To use Apple ID/Google ID instead of a email address, call
`checkLoginEmailAddressCode` directly.
*/
	async setLoginEmailAddress(options: Omit<SetLoginEmailAddress, '@type'>): Promise<EmailAddressAuthenticationCodeInfo> {
		return this._request({
			...options,
			'@type': 'setLoginEmailAddress',
		});
	}

	/**
Resends the login email address verification code.
*/
	async resendLoginEmailAddressCode(): Promise<EmailAddressAuthenticationCodeInfo> {
		return this._request({
			'@type': 'resendLoginEmailAddressCode',
		});
	}

	/**
Checks the login email address authentication.
*/
	async checkLoginEmailAddressCode(options: Omit<CheckLoginEmailAddressCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkLoginEmailAddressCode',
		});
	}

	/**
Returns a 2-step verification recovery email address that was previously set up. This method can be used to verify a
password provided by the user.
*/
	async getRecoveryEmailAddress(options: Omit<GetRecoveryEmailAddress, '@type'>): Promise<RecoveryEmailAddress> {
		return this._request({
			...options,
			'@type': 'getRecoveryEmailAddress',
		});
	}

	/**
Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then
the change will not be applied until the new recovery email address is confirmed. If new_recovery_email_address is the
same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting
for an email confirmation.
*/
	async setRecoveryEmailAddress(options: Omit<SetRecoveryEmailAddress, '@type'>): Promise<PasswordState> {
		return this._request({
			...options,
			'@type': 'setRecoveryEmailAddress',
		});
	}

	/**
Checks the 2-step verification recovery email address verification code.
*/
	async checkRecoveryEmailAddressCode(options: Omit<CheckRecoveryEmailAddressCode, '@type'>): Promise<PasswordState> {
		return this._request({
			...options,
			'@type': 'checkRecoveryEmailAddressCode',
		});
	}

	/**
Resends the 2-step verification recovery email address verification code.
*/
	async resendRecoveryEmailAddressCode(): Promise<PasswordState> {
		return this._request({
			'@type': 'resendRecoveryEmailAddressCode',
		});
	}

	/**
Requests to send a 2-step verification password recovery code to an email address that was previously set up.
*/
	async requestPasswordRecovery(): Promise<EmailAddressAuthenticationCodeInfo> {
		return this._request({
			'@type': 'requestPasswordRecovery',
		});
	}

	/**
Checks whether a 2-step verification password recovery code sent to an email address is valid.
*/
	async checkPasswordRecoveryCode(options: Omit<CheckPasswordRecoveryCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkPasswordRecoveryCode',
		});
	}

	/**
Recovers the 2-step verification password using a recovery code sent to an email address that was previously set up.
*/
	async recoverPassword(options: Omit<RecoverPassword, '@type'>): Promise<PasswordState> {
		return this._request({
			...options,
			'@type': 'recoverPassword',
		});
	}

	/**
Removes 2-step verification password without previous password and access to recovery email address. The password can't
be reset immediately and the request needs to be repeated after the specified time.
*/
	async resetPassword(): Promise<ResetPasswordResult> {
		return this._request({
			'@type': 'resetPassword',
		});
	}

	/**
Cancels reset of 2-step verification password. The method can be called if passwordState.pending_reset_date > 0.
*/
	async cancelPasswordReset(): Promise<Ok> {
		return this._request({
			'@type': 'cancelPasswordReset',
		});
	}

	/**
Creates a new temporary password for processing payments.
*/
	async createTemporaryPassword(options: Omit<CreateTemporaryPassword, '@type'>): Promise<TemporaryPasswordState> {
		return this._request({
			...options,
			'@type': 'createTemporaryPassword',
		});
	}

	/**
Returns information about the current temporary password.
*/
	async getTemporaryPasswordState(): Promise<TemporaryPasswordState> {
		return this._request({
			'@type': 'getTemporaryPasswordState',
		});
	}

	/**
Returns the current user.
*/
	async getMe(): Promise<User> {
		return this._request({
			'@type': 'getMe',
		});
	}

	/**
Returns information about a user by their identifier. This is an offline request if the current user is not a bot.
*/
	async getUser(options: Omit<GetUser, '@type'>): Promise<User> {
		return this._request({
			...options,
			'@type': 'getUser',
		});
	}

	/**
Returns full information about a user by their identifier.
*/
	async getUserFullInfo(options: Omit<GetUserFullInfo, '@type'>): Promise<UserFullInfo> {
		return this._request({
			...options,
			'@type': 'getUserFullInfo',
		});
	}

	/**
Returns information about a basic group by its identifier. This is an offline request if the current user is not a bot.
*/
	async getBasicGroup(options: Omit<GetBasicGroup, '@type'>): Promise<BasicGroup> {
		return this._request({
			...options,
			'@type': 'getBasicGroup',
		});
	}

	/**
Returns full information about a basic group by its identifier.
*/
	async getBasicGroupFullInfo(options: Omit<GetBasicGroupFullInfo, '@type'>): Promise<BasicGroupFullInfo> {
		return this._request({
			...options,
			'@type': 'getBasicGroupFullInfo',
		});
	}

	/**
Returns information about a supergroup or a channel by its identifier. This is an offline request if the current user is
not a bot.
*/
	async getSupergroup(options: Omit<GetSupergroup, '@type'>): Promise<Supergroup> {
		return this._request({
			...options,
			'@type': 'getSupergroup',
		});
	}

	/**
Returns full information about a supergroup or a channel by its identifier, cached for up to 1 minute.
*/
	async getSupergroupFullInfo(options: Omit<GetSupergroupFullInfo, '@type'>): Promise<SupergroupFullInfo> {
		return this._request({
			...options,
			'@type': 'getSupergroupFullInfo',
		});
	}

	/**
Returns information about a secret chat by its identifier. This is an offline request.
*/
	async getSecretChat(options: Omit<GetSecretChat, '@type'>): Promise<SecretChat> {
		return this._request({
			...options,
			'@type': 'getSecretChat',
		});
	}

	/**
Returns information about a chat by its identifier, this is an offline request if the current user is not a bot.
*/
	async getChat(options: Omit<GetChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'getChat',
		});
	}

	/**
Returns information about a message.
*/
	async getMessage(options: Omit<GetMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'getMessage',
		});
	}

	/**
Returns information about a message, if it is available without sending network request. This is an offline request.
*/
	async getMessageLocally(options: Omit<GetMessageLocally, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'getMessageLocally',
		});
	}

	/**
Returns information about a message that is replied by a given message. Also returns the pinned message, the game
message, and the invoice message for messages of the types messagePinMessage, messageGameScore, and
messagePaymentSuccessful respectively.
*/
	async getRepliedMessage(options: Omit<GetRepliedMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'getRepliedMessage',
		});
	}

	/**
Returns information about a newest pinned message in the chat.
*/
	async getChatPinnedMessage(options: Omit<GetChatPinnedMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'getChatPinnedMessage',
		});
	}

	/**
Returns information about a message with the callback button that originated a callback query; for bots only.
*/
	async getCallbackQueryMessage(options: Omit<GetCallbackQueryMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'getCallbackQueryMessage',
		});
	}

	/**
Returns information about messages. If a message is not found, returns null on the corresponding position of the result.
*/
	async getMessages(options: Omit<GetMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'getMessages',
		});
	}

	/**
Returns information about a message thread. Can be used only if message.can_get_message_thread == true.
*/
	async getMessageThread(options: Omit<GetMessageThread, '@type'>): Promise<MessageThreadInfo> {
		return this._request({
			...options,
			'@type': 'getMessageThread',
		});
	}

	/**
Returns viewers of a recent outgoing message in a basic group or a supergroup chat. For video notes and voice notes only
users, opened content of the message, are returned. The method can be called if message.can_get_viewers == true.
*/
	async getMessageViewers(options: Omit<GetMessageViewers, '@type'>): Promise<Users> {
		return this._request({
			...options,
			'@type': 'getMessageViewers',
		});
	}

	/**
Returns information about a file; this is an offline request.
*/
	async getFile(options: Omit<GetFile, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'getFile',
		});
	}

	/**
Returns information about a file by its remote ID; this is an offline request. Can be used to register a URL as a file
for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still
accessible to the user. For example, if the file is from a message, then the message must be not deleted and accessible
to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the
application.
*/
	async getRemoteFile(options: Omit<GetRemoteFile, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'getRemoteFile',
		});
	}

	/**
Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates.
Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have
been loaded.
*/
	async loadChats(options: Omit<LoadChats, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'loadChats',
		});
	}

	/**
Returns an ordered list of chats from the beginning of a chat list. For informational purposes only. Use loadChats and
updates processing instead to maintain chat lists in a consistent state.
*/
	async getChats(options: Omit<GetChats, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'getChats',
		});
	}

	/**
Searches a public chat by its username. Currently, only private chats, supergroups and channels can be public. Returns
the chat if found; otherwise an error is returned.
*/
	async searchPublicChat(options: Omit<SearchPublicChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'searchPublicChat',
		});
	}

	/**
Searches public chats by looking for specified query in their username and title. Currently, only private chats,
supergroups and channels can be public. Returns a meaningful number of results. Excludes private chats with contacts and
chats from the chat list from the results.
*/
	async searchPublicChats(options: Omit<SearchPublicChats, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'searchPublicChats',
		});
	}

	/**
Searches for the specified query in the title and username of already known chats, this is an offline request. Returns
chats in the order seen in the main chat list.
*/
	async searchChats(options: Omit<SearchChats, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'searchChats',
		});
	}

	/**
Searches for the specified query in the title and username of already known chats via request to the server. Returns
chats in the order seen in the main chat list.
*/
	async searchChatsOnServer(options: Omit<SearchChatsOnServer, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'searchChatsOnServer',
		});
	}

	/**
Returns a list of users and location-based supergroups nearby. The list of users nearby will be updated for 60 seconds
after the request by the updates updateUsersNearby. The request must be sent again every 25 seconds with adjusted
location to not miss new chats.
*/
	async searchChatsNearby(options: Omit<SearchChatsNearby, '@type'>): Promise<ChatsNearby> {
		return this._request({
			...options,
			'@type': 'searchChatsNearby',
		});
	}

	/**
Returns a list of frequently used chats. Supported only if the chat info database is enabled.
*/
	async getTopChats(options: Omit<GetTopChats, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'getTopChats',
		});
	}

	/**
Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled.
*/
	async removeTopChat(options: Omit<RemoveTopChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeTopChat',
		});
	}

	/**
Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already
in the list, it will be removed from the list first.
*/
	async addRecentlyFoundChat(options: Omit<AddRecentlyFoundChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addRecentlyFoundChat',
		});
	}

	/**
Removes a chat from the list of recently found chats.
*/
	async removeRecentlyFoundChat(options: Omit<RemoveRecentlyFoundChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeRecentlyFoundChat',
		});
	}

	/**
Clears the list of recently found chats.
*/
	async clearRecentlyFoundChats(): Promise<Ok> {
		return this._request({
			'@type': 'clearRecentlyFoundChats',
		});
	}

	/**
Returns recently opened chats, this is an offline request. Returns chats in the order of last opening.
*/
	async getRecentlyOpenedChats(options: Omit<GetRecentlyOpenedChats, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'getRecentlyOpenedChats',
		});
	}

	/**
Checks whether a username can be set for a chat.
*/
	async checkChatUsername(options: Omit<CheckChatUsername, '@type'>): Promise<CheckChatUsernameResult> {
		return this._request({
			...options,
			'@type': 'checkChatUsername',
		});
	}

	/**
Returns a list of public chats of the specified type, owned by the user.
*/
	async getCreatedPublicChats(options: Omit<GetCreatedPublicChats, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'getCreatedPublicChats',
		});
	}

	/**
Checks whether the maximum number of owned public chats has been reached. Returns corresponding error if the limit was
reached. The limit can be increased with Telegram Premium.
*/
	async checkCreatedPublicChatsLimit(options: Omit<CheckCreatedPublicChatsLimit, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkCreatedPublicChatsLimit',
		});
	}

	/**
Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned
basic group chats must be first upgraded to supergroups before they can be set as a discussion group. To set a returned
supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable
first.
*/
	async getSuitableDiscussionChats(): Promise<Chats> {
		return this._request({
			'@type': 'getSuitableDiscussionChats',
		});
	}

	/**
Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of
joined supergroups and channels and receives CHANNELS_TOO_MUCH error. Also, the limit can be increased with Telegram
Premium.
*/
	async getInactiveSupergroupChats(): Promise<Chats> {
		return this._request({
			'@type': 'getInactiveSupergroupChats',
		});
	}

	/**
Returns a list of common group chats with a given user. Chats are sorted by their type and creation date.
*/
	async getGroupsInCommon(options: Omit<GetGroupsInCommon, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'getGroupsInCommon',
		});
	}

	/**
Returns messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of decreasing
message_id). For optimal performance, the number of returned messages is chosen by TDLib. This is an offline request if
only_local is true.
*/
	async getChatHistory(options: Omit<GetChatHistory, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'getChatHistory',
		});
	}

	/**
Returns messages in a message thread of a message. Can be used only if message.can_get_message_thread == true. Message
thread of a channel message is in the channel's linked supergroup. The messages are returned in a reverse chronological
order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by
TDLib.
*/
	async getMessageThreadHistory(options: Omit<GetMessageThreadHistory, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'getMessageThreadHistory',
		});
	}

	/**
Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users fields to
find whether and how the method can be applied to the chat.
*/
	async deleteChatHistory(options: Omit<DeleteChatHistory, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteChatHistory',
		});
	}

	/**
Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release
the username and remove all members. Use the field chat.can_be_deleted_for_all_users to find whether the method can be
applied to the chat.
*/
	async deleteChat(options: Omit<DeleteChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteChat',
		});
	}

	/**
Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of
decreasing message_id. Cannot be used in secret chats with a non-empty query (searchSecretMessages must be used
instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by
TDLib and can be smaller than the specified limit.
*/
	async searchChatMessages(options: Omit<SearchChatMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'searchChatMessages',
		});
	}

	/**
Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in
order of decreasing (date, chat_id, message_id)). For optimal performance, the number of returned messages is chosen by
TDLib and can be smaller than the specified limit.
*/
	async searchMessages(options: Omit<SearchMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'searchMessages',
		});
	}

	/**
Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance, the
number of returned messages is chosen by TDLib.
*/
	async searchSecretMessages(options: Omit<SearchSecretMessages, '@type'>): Promise<FoundMessages> {
		return this._request({
			...options,
			'@type': 'searchSecretMessages',
		});
	}

	/**
Searches for call messages. Returns the results in reverse chronological order (i.e., in order of decreasing
message_id). For optimal performance, the number of returned messages is chosen by TDLib.
*/
	async searchCallMessages(options: Omit<SearchCallMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'searchCallMessages',
		});
	}

	/**
Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the
results in reverse chronological order.
*/
	async searchOutgoingDocumentMessages(options: Omit<SearchOutgoingDocumentMessages, '@type'>): Promise<FoundMessages> {
		return this._request({
			...options,
			'@type': 'searchOutgoingDocumentMessages',
		});
	}

	/**
Deletes all call messages.
*/
	async deleteAllCallMessages(options: Omit<DeleteAllCallMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteAllCallMessages',
		});
	}

	/**
Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location
message per user.
*/
	async searchChatRecentLocationMessages(options: Omit<SearchChatRecentLocationMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'searchChatRecentLocationMessages',
		});
	}

	/**
Returns all active live locations that need to be updated by the application. The list is persistent across application
restarts only if the message database is used.
*/
	async getActiveLiveLocationMessages(): Promise<Messages> {
		return this._request({
			'@type': 'getActiveLiveLocationMessages',
		});
	}

	/**
Returns the last message sent in a chat no later than the specified date.
*/
	async getChatMessageByDate(options: Omit<GetChatMessageByDate, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'getChatMessageByDate',
		});
	}

	/**
Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll
implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). Cannot be
used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database.
*/
	async getChatSparseMessagePositions(options: Omit<GetChatSparseMessagePositions, '@type'>): Promise<MessagePositions> {
		return this._request({
			...options,
			'@type': 'getChatSparseMessagePositions',
		});
	}

	/**
Returns information about the next messages of the specified type in the chat split by days. Returns the results in
reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the
value of the option "utc_time_offset".
*/
	async getChatMessageCalendar(options: Omit<GetChatMessageCalendar, '@type'>): Promise<MessageCalendar> {
		return this._request({
			...options,
			'@type': 'getChatMessageCalendar',
		});
	}

	/**
Returns approximate number of messages of the specified type in the chat.
*/
	async getChatMessageCount(options: Omit<GetChatMessageCount, '@type'>): Promise<Count> {
		return this._request({
			...options,
			'@type': 'getChatMessageCount',
		});
	}

	/**
Returns approximate 1-based position of a message among messages, which can be found by the specified filter in the
chat. Cannot be used in secret chats.
*/
	async getChatMessagePosition(options: Omit<GetChatMessagePosition, '@type'>): Promise<Count> {
		return this._request({
			...options,
			'@type': 'getChatMessagePosition',
		});
	}

	/**
Returns all scheduled messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of
decreasing message_id).
*/
	async getChatScheduledMessages(options: Omit<GetChatScheduledMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'getChatScheduledMessages',
		});
	}

	/**
Returns forwarded copies of a channel message to different public channels. For optimal performance, the number of
returned messages is chosen by TDLib.
*/
	async getMessagePublicForwards(options: Omit<GetMessagePublicForwards, '@type'>): Promise<FoundMessages> {
		return this._request({
			...options,
			'@type': 'getMessagePublicForwards',
		});
	}

	/**
Returns sponsored message to be shown in a chat; for channel chats only. Returns a 404 error if there is no sponsored
message in the chat.
*/
	async getChatSponsoredMessage(options: Omit<GetChatSponsoredMessage, '@type'>): Promise<SponsoredMessage> {
		return this._request({
			...options,
			'@type': 'getChatSponsoredMessage',
		});
	}

	/**
Removes an active notification from notification list. Needs to be called only if the notification is removed by the
current user.
*/
	async removeNotification(options: Omit<RemoveNotification, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeNotification',
		});
	}

	/**
Removes a group of active notifications. Needs to be called only if the notification group is removed by the current
user.
*/
	async removeNotificationGroup(options: Omit<RemoveNotificationGroup, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeNotificationGroup',
		});
	}

	/**
Returns an HTTPS link to a message in a chat. Available only for already sent messages in supergroups and channels, or
if message.can_get_media_timestamp_links and a media timestamp link is generated. This is an offline request.
*/
	async getMessageLink(options: Omit<GetMessageLink, '@type'>): Promise<MessageLink> {
		return this._request({
			...options,
			'@type': 'getMessageLink',
		});
	}

	/**
Returns an HTML code for embedding the message. Available only for messages in supergroups and channels with a username.
*/
	async getMessageEmbeddingCode(options: Omit<GetMessageEmbeddingCode, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getMessageEmbeddingCode',
		});
	}

	/**
Returns information about a public or private message link. Can be called for any internal link of the type
internalLinkTypeMessage.
*/
	async getMessageLinkInfo(options: Omit<GetMessageLinkInfo, '@type'>): Promise<MessageLinkInfo> {
		return this._request({
			...options,
			'@type': 'getMessageLinkInfo',
		});
	}

	/**
Translates a text to the given language. Returns a 404 error if the translation can't be performed.
*/
	async translateText(options: Omit<TranslateText, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'translateText',
		});
	}

	/**
Recognizes speech in a voice note message. The message must be successfully sent and must not be scheduled. May return
an error with a message "MSG_VOICE_TOO_LONG" if the voice note is too long to be recognized.
*/
	async recognizeSpeech(options: Omit<RecognizeSpeech, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'recognizeSpeech',
		});
	}

	/**
Rates recognized speech in a voice note message.
*/
	async rateSpeechRecognition(options: Omit<RateSpeechRecognition, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'rateSpeechRecognition',
		});
	}

	/**
Returns list of message sender identifiers, which can be used to send messages in a chat.
*/
	async getChatAvailableMessageSenders(options: Omit<GetChatAvailableMessageSenders, '@type'>): Promise<ChatMessageSenders> {
		return this._request({
			...options,
			'@type': 'getChatAvailableMessageSenders',
		});
	}

	/**
Selects a message sender to send messages in a chat.
*/
	async setChatMessageSender(options: Omit<SetChatMessageSender, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatMessageSender',
		});
	}

	/**
Sends a message. Returns the sent message.
*/
	async sendMessage(options: Omit<SendMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'sendMessage',
		});
	}

	/**
Sends 2-10 messages grouped together into an album. Currently, only audio, document, photo and video messages can be
grouped into an album. Documents and audio files can be only grouped in an album with messages of the same type. Returns
sent messages.
*/
	async sendMessageAlbum(options: Omit<SendMessageAlbum, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'sendMessageAlbum',
		});
	}

	/**
Invites a bot to a chat (if it is not yet a member) and sends it the /start command. Bots can't be invited to a private
chat other than the chat with the bot. Bots can't be invited to channels (although they can be added as admins) and
secret chats. Returns the sent message.
*/
	async sendBotStartMessage(options: Omit<SendBotStartMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'sendBotStartMessage',
		});
	}

	/**
Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message.
*/
	async sendInlineQueryResultMessage(options: Omit<SendInlineQueryResultMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'sendInlineQueryResultMessage',
		});
	}

	/**
Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in
message_ids. If a message can't be forwarded, null will be returned instead of the message.
*/
	async forwardMessages(options: Omit<ForwardMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'forwardMessages',
		});
	}

	/**
Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is
true and after specified in messageSendingStateFailed.retry_after time passed. If a message is re-sent, the
corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers
passed in message_ids. If a message can't be re-sent, null will be returned instead of the message.
*/
	async resendMessages(options: Omit<ResendMessages, '@type'>): Promise<Messages> {
		return this._request({
			...options,
			'@type': 'resendMessages',
		});
	}

	/**
Sends a notification about a screenshot taken in a chat. Supported only in private and secret chats.
*/
	async sendChatScreenshotTakenNotification(options: Omit<SendChatScreenshotTakenNotification, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendChatScreenshotTakenNotification',
		});
	}

	/**
Adds a local message to a chat. The message is persistent across application restarts only if the message database is
used. Returns the added message.
*/
	async addLocalMessage(options: Omit<AddLocalMessage, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'addLocalMessage',
		});
	}

	/**
Deletes messages.
*/
	async deleteMessages(options: Omit<DeleteMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteMessages',
		});
	}

	/**
Deletes all messages sent by the specified message sender in a chat. Supported only for supergroups; requires
can_delete_messages administrator privileges.
*/
	async deleteChatMessagesBySender(options: Omit<DeleteChatMessagesBySender, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteChatMessagesBySender',
		});
	}

	/**
Deletes all messages between the specified dates in a chat. Supported only for private chats and basic groups. Messages
sent in the last 30 seconds will not be deleted.
*/
	async deleteChatMessagesByDate(options: Omit<DeleteChatMessagesByDate, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteChatMessagesByDate',
		});
	}

	/**
Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the
server side.
*/
	async editMessageText(options: Omit<EditMessageText, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'editMessageText',
		});
	}

	/**
Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live
location. Returns the edited message after the edit is completed on the server side.
*/
	async editMessageLiveLocation(options: Omit<EditMessageLiveLocation, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'editMessageLiveLocation',
		});
	}

	/**
Edits the content of a message with an animation, an audio, a document, a photo or a video, including message caption.
If only the caption needs to be edited, use editMessageCaption instead. The media can't be edited if the message was set
to self-destruct or to a self-destructing media. The type of message content in an album can't be changed with exception
of replacing a photo with a video or vice versa. Returns the edited message after the edit is completed on the server
side.
*/
	async editMessageMedia(options: Omit<EditMessageMedia, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'editMessageMedia',
		});
	}

	/**
Edits the message content caption. Returns the edited message after the edit is completed on the server side.
*/
	async editMessageCaption(options: Omit<EditMessageCaption, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'editMessageCaption',
		});
	}

	/**
Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server
side.
*/
	async editMessageReplyMarkup(options: Omit<EditMessageReplyMarkup, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'editMessageReplyMarkup',
		});
	}

	/**
Edits the text of an inline text or game message sent via a bot; for bots only.
*/
	async editInlineMessageText(options: Omit<EditInlineMessageText, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editInlineMessageText',
		});
	}

	/**
Edits the content of a live location in an inline message sent via a bot; for bots only.
*/
	async editInlineMessageLiveLocation(options: Omit<EditInlineMessageLiveLocation, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editInlineMessageLiveLocation',
		});
	}

	/**
Edits the content of a message with an animation, an audio, a document, a photo or a video in an inline message sent via
a bot; for bots only.
*/
	async editInlineMessageMedia(options: Omit<EditInlineMessageMedia, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editInlineMessageMedia',
		});
	}

	/**
Edits the caption of an inline message sent via a bot; for bots only.
*/
	async editInlineMessageCaption(options: Omit<EditInlineMessageCaption, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editInlineMessageCaption',
		});
	}

	/**
Edits the reply markup of an inline message sent via a bot; for bots only.
*/
	async editInlineMessageReplyMarkup(options: Omit<EditInlineMessageReplyMarkup, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editInlineMessageReplyMarkup',
		});
	}

	/**
Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded
together with the message will be also changed.
*/
	async editMessageSchedulingState(options: Omit<EditMessageSchedulingState, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editMessageSchedulingState',
		});
	}

	/**
Returns information about a emoji reaction. Returns a 404 error if the reaction is not found.
*/
	async getEmojiReaction(options: Omit<GetEmojiReaction, '@type'>): Promise<EmojiReaction> {
		return this._request({
			...options,
			'@type': 'getEmojiReaction',
		});
	}

	/**
Returns TGS stickers with generic animations for custom emoji reactions.
*/
	async getCustomEmojiReactionAnimations(): Promise<Stickers> {
		return this._request({
			'@type': 'getCustomEmojiReactionAnimations',
		});
	}

	/**
Returns reactions, which can be added to a message. The list can change after updateActiveEmojiReactions,
updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the message.
*/
	async getMessageAvailableReactions(options: Omit<GetMessageAvailableReactions, '@type'>): Promise<AvailableReactions> {
		return this._request({
			...options,
			'@type': 'getMessageAvailableReactions',
		});
	}

	/**
Clears the list of recently used reactions.
*/
	async clearRecentReactions(): Promise<Ok> {
		return this._request({
			'@type': 'clearRecentReactions',
		});
	}

	/**
Adds a reaction to a message. Use getMessageAvailableReactions to receive the list of available reactions for the
message.
*/
	async addMessageReaction(options: Omit<AddMessageReaction, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addMessageReaction',
		});
	}

	/**
Removes a reaction from a message. A chosen reaction can always be removed.
*/
	async removeMessageReaction(options: Omit<RemoveMessageReaction, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeMessageReaction',
		});
	}

	/**
Returns reactions added for a message, along with their sender.
*/
	async getMessageAddedReactions(options: Omit<GetMessageAddedReactions, '@type'>): Promise<AddedReactions> {
		return this._request({
			...options,
			'@type': 'getMessageAddedReactions',
		});
	}

	/**
Changes type of default reaction for the current user.
*/
	async setDefaultReactionType(options: Omit<SetDefaultReactionType, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setDefaultReactionType',
		});
	}

	/**
Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses)
contained in the text. Can be called synchronously.
*/
	async getTextEntities(options: Omit<GetTextEntities, '@type'>): Promise<TextEntities> {
		return this._request({
			...options,
			'@type': 'getTextEntities',
		});
	}

	/**
Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, Code, Pre, PreCode, TextUrl and MentionName
entities contained in the text. Can be called synchronously.
*/
	async parseTextEntities(options: Omit<ParseTextEntities, '@type'>): Promise<FormattedText> {
		return this._request({
			...options,
			'@type': 'parseTextEntities',
		});
	}

	/**
Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously.
*/
	async parseMarkdown(options: Omit<ParseMarkdown, '@type'>): Promise<FormattedText> {
		return this._request({
			...options,
			'@type': 'parseMarkdown',
		});
	}

	/**
Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in
Markdown unambiguously are kept as is. Can be called synchronously.
*/
	async getMarkdownText(options: Omit<GetMarkdownText, '@type'>): Promise<FormattedText> {
		return this._request({
			...options,
			'@type': 'getMarkdownText',
		});
	}

	/**
Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called
synchronously.
*/
	async getFileMimeType(options: Omit<GetFileMimeType, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getFileMimeType',
		});
	}

	/**
Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called
synchronously.
*/
	async getFileExtension(options: Omit<GetFileExtension, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getFileExtension',
		});
	}

	/**
Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8.
Returns an empty string on failure. Can be called synchronously.
*/
	async cleanFileName(options: Omit<CleanFileName, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'cleanFileName',
		});
	}

	/**
Returns a string stored in the local database from the specified localization target and language pack by its key.
Returns a 404 error if the string is not found. Can be called synchronously.
*/
	async getLanguagePackString(options: Omit<GetLanguagePackString, '@type'>): Promise<LanguagePackStringValue> {
		return this._request({
			...options,
			'@type': 'getLanguagePackString',
		});
	}

	/**
Converts a JSON-serialized string to corresponding JsonValue object. Can be called synchronously.
*/
	async getJsonValue(options: Omit<GetJsonValue, '@type'>): Promise<JsonValue> {
		return this._request({
			...options,
			'@type': 'getJsonValue',
		});
	}

	/**
Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously.
*/
	async getJsonString(options: Omit<GetJsonString, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getJsonString',
		});
	}

	/**
Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously.
*/
	async getThemeParametersJsonString(options: Omit<GetThemeParametersJsonString, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getThemeParametersJsonString',
		});
	}

	/**
Changes the user answer to a poll. A poll in quiz mode can be answered only once.
*/
	async setPollAnswer(options: Omit<SetPollAnswer, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setPollAnswer',
		});
	}

	/**
Returns users voted for the specified option in a non-anonymous polls. For optimal performance, the number of returned
users is chosen by TDLib.
*/
	async getPollVoters(options: Omit<GetPollVoters, '@type'>): Promise<Users> {
		return this._request({
			...options,
			'@type': 'getPollVoters',
		});
	}

	/**
Stops a poll. A poll in a message can be stopped when the message has can_be_edited flag set.
*/
	async stopPoll(options: Omit<StopPoll, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'stopPoll',
		});
	}

	/**
Hides a suggested action.
*/
	async hideSuggestedAction(options: Omit<HideSuggestedAction, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'hideSuggestedAction',
		});
	}

	/**
Returns information about a button of type inlineKeyboardButtonTypeLoginUrl. The method needs to be called when the user
presses the button.
*/
	async getLoginUrlInfo(options: Omit<GetLoginUrlInfo, '@type'>): Promise<LoginUrlInfo> {
		return this._request({
			...options,
			'@type': 'getLoginUrlInfo',
		});
	}

	/**
Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button
of type inlineKeyboardButtonTypeLoginUrl. Use the method getLoginUrlInfo to find whether a prior user confirmation is
needed. If an error is returned, then the button must be handled as an ordinary URL button.
*/
	async getLoginUrl(options: Omit<GetLoginUrl, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getLoginUrl',
		});
	}

	/**
Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the
query before the query timeout expires.
*/
	async getInlineQueryResults(options: Omit<GetInlineQueryResults, '@type'>): Promise<InlineQueryResults> {
		return this._request({
			...options,
			'@type': 'getInlineQueryResults',
		});
	}

	/**
Sets the result of an inline query; for bots only.
*/
	async answerInlineQuery(options: Omit<AnswerInlineQuery, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'answerInlineQuery',
		});
	}

	/**
Returns an HTTPS URL of a Web App to open after keyboardButtonTypeWebApp button is pressed.
*/
	async getWebAppUrl(options: Omit<GetWebAppUrl, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getWebAppUrl',
		});
	}

	/**
Sends data received from a keyboardButtonTypeWebApp Web App to a bot.
*/
	async sendWebAppData(options: Omit<SendWebAppData, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendWebAppData',
		});
	}

	/**
Informs TDLib that a Web App is being opened from attachment menu, a botMenuButton button, an
internalLinkTypeAttachmentMenuBot link, or an inlineKeyboardButtonTypeWebApp button. For each bot, a confirmation alert
about data sent to the bot must be shown once.
*/
	async openWebApp(options: Omit<OpenWebApp, '@type'>): Promise<WebAppInfo> {
		return this._request({
			...options,
			'@type': 'openWebApp',
		});
	}

	/**
Informs TDLib that a previously opened Web App was closed.
*/
	async closeWebApp(options: Omit<CloseWebApp, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'closeWebApp',
		});
	}

	/**
Sets the result of interaction with a Web App and sends corresponding message on behalf of the user to the chat from
which the query originated; for bots only.
*/
	async answerWebAppQuery(options: Omit<AnswerWebAppQuery, '@type'>): Promise<SentWebAppMessage> {
		return this._request({
			...options,
			'@type': 'answerWebAppQuery',
		});
	}

	/**
Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the
query before the query timeout expires.
*/
	async getCallbackQueryAnswer(options: Omit<GetCallbackQueryAnswer, '@type'>): Promise<CallbackQueryAnswer> {
		return this._request({
			...options,
			'@type': 'getCallbackQueryAnswer',
		});
	}

	/**
Sets the result of a callback query; for bots only.
*/
	async answerCallbackQuery(options: Omit<AnswerCallbackQuery, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'answerCallbackQuery',
		});
	}

	/**
Sets the result of a shipping query; for bots only.
*/
	async answerShippingQuery(options: Omit<AnswerShippingQuery, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'answerShippingQuery',
		});
	}

	/**
Sets the result of a pre-checkout query; for bots only.
*/
	async answerPreCheckoutQuery(options: Omit<AnswerPreCheckoutQuery, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'answerPreCheckoutQuery',
		});
	}

	/**
Updates the game score of the specified user in the game; for bots only.
*/
	async setGameScore(options: Omit<SetGameScore, '@type'>): Promise<Message> {
		return this._request({
			...options,
			'@type': 'setGameScore',
		});
	}

	/**
Updates the game score of the specified user in a game; for bots only.
*/
	async setInlineGameScore(options: Omit<SetInlineGameScore, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setInlineGameScore',
		});
	}

	/**
Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots
only.
*/
	async getGameHighScores(options: Omit<GetGameHighScores, '@type'>): Promise<GameHighScores> {
		return this._request({
			...options,
			'@type': 'getGameHighScores',
		});
	}

	/**
Returns game high scores and some part of the high score table in the range of the specified user; for bots only.
*/
	async getInlineGameHighScores(options: Omit<GetInlineGameHighScores, '@type'>): Promise<GameHighScores> {
		return this._request({
			...options,
			'@type': 'getInlineGameHighScores',
		});
	}

	/**
Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a ForceReply reply markup has
been used. UpdateChatReplyMarkup will be sent if the reply markup is changed.
*/
	async deleteChatReplyMarkup(options: Omit<DeleteChatReplyMarkup, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteChatReplyMarkup',
		});
	}

	/**
Sends a notification about user activity in a chat.
*/
	async sendChatAction(options: Omit<SendChatAction, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendChatAction',
		});
	}

	/**
Informs TDLib that the chat is opened by the user. Many useful activities depend on the chat being opened or closed
(e.g., in supergroups and channels all updates are received only for opened chats).
*/
	async openChat(options: Omit<OpenChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'openChat',
		});
	}

	/**
Informs TDLib that the chat is closed by the user. Many useful activities depend on the chat being opened or closed.
*/
	async closeChat(options: Omit<CloseChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'closeChat',
		});
	}

	/**
Informs TDLib that messages are being viewed by the user. Sponsored messages must be marked as viewed only when the
entire text of the message is shown on the screen (excluding the button). Many useful activities depend on whether the
messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view
counter, removing deleted messages in supergroups and channels).
*/
	async viewMessages(options: Omit<ViewMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'viewMessages',
		});
	}

	/**
Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or
venue, or has listened to an audio file or voice note message). An updateMessageContentOpened update will be generated
if something has changed.
*/
	async openMessageContent(options: Omit<OpenMessageContent, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'openMessageContent',
		});
	}

	/**
Informs TDLib that a message with an animated emoji was clicked by the user. Returns a big animated sticker to be played
or a 404 error if usual animation needs to be played.
*/
	async clickAnimatedEmojiMessage(options: Omit<ClickAnimatedEmojiMessage, '@type'>): Promise<Sticker> {
		return this._request({
			...options,
			'@type': 'clickAnimatedEmojiMessage',
		});
	}

	/**
Returns information about the type of an internal link. Returns a 404 error if the link is not internal. Can be called
before authorization.
*/
	async getInternalLinkType(options: Omit<GetInternalLinkType, '@type'>): Promise<InternalLinkType> {
		return this._request({
			...options,
			'@type': 'getInternalLinkType',
		});
	}

	/**
Returns information about an action to be done when the current user clicks an external link. Don't use this method for
links from secret chats if web page preview is disabled in secret chats.
*/
	async getExternalLinkInfo(options: Omit<GetExternalLinkInfo, '@type'>): Promise<LoginUrlInfo> {
		return this._request({
			...options,
			'@type': 'getExternalLinkInfo',
		});
	}

	/**
Returns an HTTP URL which can be used to automatically authorize the current user on a website after clicking an HTTP
link. Use the method getExternalLinkInfo to find whether a prior user confirmation is needed.
*/
	async getExternalLink(options: Omit<GetExternalLink, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getExternalLink',
		});
	}

	/**
Marks all mentions in a chat as read.
*/
	async readAllChatMentions(options: Omit<ReadAllChatMentions, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'readAllChatMentions',
		});
	}

	/**
Marks all reactions in a chat as read.
*/
	async readAllChatReactions(options: Omit<ReadAllChatReactions, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'readAllChatReactions',
		});
	}

	/**
Returns an existing chat corresponding to a given user.
*/
	async createPrivateChat(options: Omit<CreatePrivateChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createPrivateChat',
		});
	}

	/**
Returns an existing chat corresponding to a known basic group.
*/
	async createBasicGroupChat(options: Omit<CreateBasicGroupChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createBasicGroupChat',
		});
	}

	/**
Returns an existing chat corresponding to a known supergroup or channel.
*/
	async createSupergroupChat(options: Omit<CreateSupergroupChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createSupergroupChat',
		});
	}

	/**
Returns an existing chat corresponding to a known secret chat.
*/
	async createSecretChat(options: Omit<CreateSecretChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createSecretChat',
		});
	}

	/**
Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns the newly created chat.
*/
	async createNewBasicGroupChat(options: Omit<CreateNewBasicGroupChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createNewBasicGroupChat',
		});
	}

	/**
Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created
chat.
*/
	async createNewSupergroupChat(options: Omit<CreateNewSupergroupChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createNewSupergroupChat',
		});
	}

	/**
Creates a new secret chat. Returns the newly created chat.
*/
	async createNewSecretChat(options: Omit<CreateNewSecretChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'createNewSecretChat',
		});
	}

	/**
Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and
messageChatUpgradeFrom; requires creator privileges. Deactivates the original basic group.
*/
	async upgradeBasicGroupChatToSupergroupChat(options: Omit<UpgradeBasicGroupChatToSupergroupChat, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'upgradeBasicGroupChatToSupergroupChat',
		});
	}

	/**
Returns chat lists to which the chat can be added. This is an offline request.
*/
	async getChatListsToAddChat(options: Omit<GetChatListsToAddChat, '@type'>): Promise<ChatLists> {
		return this._request({
			...options,
			'@type': 'getChatListsToAddChat',
		});
	}

	/**
Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat lists, so it is automatically
removed from another one if needed.
*/
	async addChatToList(options: Omit<AddChatToList, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addChatToList',
		});
	}

	/**
Returns information about a chat filter by its identifier.
*/
	async getChatFilter(options: Omit<GetChatFilter, '@type'>): Promise<ChatFilter> {
		return this._request({
			...options,
			'@type': 'getChatFilter',
		});
	}

	/**
Creates new chat filter. Returns information about the created chat filter. There can be up to
GetOption("chat_filter_count_max") chat filters, but the limit can be increased with Telegram Premium.
*/
	async createChatFilter(options: Omit<CreateChatFilter, '@type'>): Promise<ChatFilterInfo> {
		return this._request({
			...options,
			'@type': 'createChatFilter',
		});
	}

	/**
Edits existing chat filter. Returns information about the edited chat filter.
*/
	async editChatFilter(options: Omit<EditChatFilter, '@type'>): Promise<ChatFilterInfo> {
		return this._request({
			...options,
			'@type': 'editChatFilter',
		});
	}

	/**
Deletes existing chat filter.
*/
	async deleteChatFilter(options: Omit<DeleteChatFilter, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteChatFilter',
		});
	}

	/**
Changes the order of chat filters.
*/
	async reorderChatFilters(options: Omit<ReorderChatFilters, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'reorderChatFilters',
		});
	}

	/**
Returns recommended chat filters for the current user.
*/
	async getRecommendedChatFilters(): Promise<RecommendedChatFilters> {
		return this._request({
			'@type': 'getRecommendedChatFilters',
		});
	}

	/**
Returns default icon name for a filter. Can be called synchronously.
*/
	async getChatFilterDefaultIconName(options: Omit<GetChatFilterDefaultIconName, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getChatFilterDefaultIconName',
		});
	}

	/**
Changes the chat title. Supported only for basic groups, supergroups and channels. Requires can_change_info
administrator right.
*/
	async setChatTitle(options: Omit<SetChatTitle, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatTitle',
		});
	}

	/**
Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires can_change_info
administrator right.
*/
	async setChatPhoto(options: Omit<SetChatPhoto, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatPhoto',
		});
	}

	/**
Changes the message TTL in a chat. Requires can_delete_messages administrator right in basic groups, supergroups and
channels Message TTL can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).
*/
	async setChatMessageTtl(options: Omit<SetChatMessageTtl, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatMessageTtl',
		});
	}

	/**
Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members
administrator right.
*/
	async setChatPermissions(options: Omit<SetChatPermissions, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatPermissions',
		});
	}

	/**
Changes the chat theme. Supported only in private and secret chats.
*/
	async setChatTheme(options: Omit<SetChatTheme, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatTheme',
		});
	}

	/**
Changes the draft message in a chat.
*/
	async setChatDraftMessage(options: Omit<SetChatDraftMessage, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatDraftMessage',
		});
	}

	/**
Changes the notification settings of a chat. Notification settings of a chat with the current user (Saved Messages)
can't be changed.
*/
	async setChatNotificationSettings(options: Omit<SetChatNotificationSettings, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatNotificationSettings',
		});
	}

	/**
Changes the ability of users to save, forward, or copy chat content. Supported only for basic groups, supergroups and
channels. Requires owner privileges.
*/
	async toggleChatHasProtectedContent(options: Omit<ToggleChatHasProtectedContent, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleChatHasProtectedContent',
		});
	}

	/**
Changes the marked as unread state of a chat.
*/
	async toggleChatIsMarkedAsUnread(options: Omit<ToggleChatIsMarkedAsUnread, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleChatIsMarkedAsUnread',
		});
	}

	/**
Changes the value of the default disable_notification parameter, used when a message is sent to a chat.
*/
	async toggleChatDefaultDisableNotification(options: Omit<ToggleChatDefaultDisableNotification, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleChatDefaultDisableNotification',
		});
	}

	/**
Changes reactions, available in a chat. Available for basic groups, supergroups, and channels. Requires can_change_info
administrator right.
*/
	async setChatAvailableReactions(options: Omit<SetChatAvailableReactions, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatAvailableReactions',
		});
	}

	/**
Changes application-specific data associated with a chat.
*/
	async setChatClientData(options: Omit<SetChatClientData, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatClientData',
		});
	}

	/**
Changes information about a chat. Available for basic groups, supergroups, and channels. Requires can_change_info
administrator right.
*/
	async setChatDescription(options: Omit<SetChatDescription, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatDescription',
		});
	}

	/**
Changes the discussion group of a channel chat; requires can_change_info administrator right in the channel if it is
specified.
*/
	async setChatDiscussionGroup(options: Omit<SetChatDiscussionGroup, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatDiscussionGroup',
		});
	}

	/**
Changes the location of a chat. Available only for some location-based supergroups, use
supergroupFullInfo.can_set_location to check whether the method is allowed to use.
*/
	async setChatLocation(options: Omit<SetChatLocation, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatLocation',
		});
	}

	/**
Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members rights.
*/
	async setChatSlowModeDelay(options: Omit<SetChatSlowModeDelay, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatSlowModeDelay',
		});
	}

	/**
Pins a message in a chat; requires can_pin_messages rights or can_edit_messages rights in the channel.
*/
	async pinChatMessage(options: Omit<PinChatMessage, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'pinChatMessage',
		});
	}

	/**
Removes a pinned message from a chat; requires can_pin_messages rights in the group or can_edit_messages rights in the
channel.
*/
	async unpinChatMessage(options: Omit<UnpinChatMessage, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'unpinChatMessage',
		});
	}

	/**
Removes all pinned messages from a chat; requires can_pin_messages rights in the group or can_edit_messages rights in
the channel.
*/
	async unpinAllChatMessages(options: Omit<UnpinAllChatMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'unpinAllChatMessages',
		});
	}

	/**
Adds the current user as a new member to a chat. Private and secret chats can't be joined using this method. May return
an error with a message "INVITE_REQUEST_SENT" if only a join request was created.
*/
	async joinChat(options: Omit<JoinChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'joinChat',
		});
	}

	/**
Removes the current user from chat members. Private and secret chats can't be left using this method.
*/
	async leaveChat(options: Omit<LeaveChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'leaveChat',
		});
	}

	/**
Adds a new member to a chat. Members can't be added to private or secret chats.
*/
	async addChatMember(options: Omit<AddChatMember, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addChatMember',
		});
	}

	/**
Adds multiple new members to a chat. Currently, this method is only available for supergroups and channels. This method
can't be used to join a chat. Members can't be added to a channel if it has more than 200 members.
*/
	async addChatMembers(options: Omit<AddChatMembers, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addChatMembers',
		});
	}

	/**
Changes the status of a chat member, needs appropriate privileges. This function is currently not suitable for
transferring chat ownership; use transferChatOwnership instead. Use addChatMember or banChatMember if some additional
parameters needs to be passed.
*/
	async setChatMemberStatus(options: Omit<SetChatMemberStatus, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setChatMemberStatus',
		});
	}

	/**
Bans a member in a chat. Members can't be banned in private or secret chats. In supergroups and channels, the user will
not be able to return to the group on their own using invite links, etc., unless unbanned first.
*/
	async banChatMember(options: Omit<BanChatMember, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'banChatMember',
		});
	}

	/**
Checks whether the current session can be used to transfer a chat ownership to another user.
*/
	async canTransferOwnership(): Promise<CanTransferOwnershipResult> {
		return this._request({
			'@type': 'canTransferOwnership',
		});
	}

	/**
Changes the owner of a chat. The current user must be a current owner of the chat. Use the method canTransferOwnership
to check whether the ownership can be transferred from the current session. Available only for supergroups and channel
chats.
*/
	async transferChatOwnership(options: Omit<TransferChatOwnership, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'transferChatOwnership',
		});
	}

	/**
Returns information about a single member of a chat.
*/
	async getChatMember(options: Omit<GetChatMember, '@type'>): Promise<ChatMember> {
		return this._request({
			...options,
			'@type': 'getChatMember',
		});
	}

	/**
Searches for a specified query in the first name, last name and username of the members of a specified chat. Requires
administrator rights in channels.
*/
	async searchChatMembers(options: Omit<SearchChatMembers, '@type'>): Promise<ChatMembers> {
		return this._request({
			...options,
			'@type': 'searchChatMembers',
		});
	}

	/**
Returns a list of administrators of the chat with their custom titles.
*/
	async getChatAdministrators(options: Omit<GetChatAdministrators, '@type'>): Promise<ChatAdministrators> {
		return this._request({
			...options,
			'@type': 'getChatAdministrators',
		});
	}

	/**
Clears message drafts in all chats.
*/
	async clearAllDraftMessages(options: Omit<ClearAllDraftMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'clearAllDraftMessages',
		});
	}

	/**
Returns saved notification sound by its identifier. Returns a 404 error if there is no saved notification sound with the
specified identifier.
*/
	async getSavedNotificationSound(options: Omit<GetSavedNotificationSound, '@type'>): Promise<NotificationSounds> {
		return this._request({
			...options,
			'@type': 'getSavedNotificationSound',
		});
	}

	/**
Returns list of saved notification sounds. If a sound isn't in the list, then default sound needs to be used.
*/
	async getSavedNotificationSounds(): Promise<NotificationSounds> {
		return this._request({
			'@type': 'getSavedNotificationSounds',
		});
	}

	/**
Adds a new notification sound to the list of saved notification sounds. The new notification sound is added to the top
of the list. If it is already in the list, its position isn't changed.
*/
	async addSavedNotificationSound(options: Omit<AddSavedNotificationSound, '@type'>): Promise<NotificationSound> {
		return this._request({
			...options,
			'@type': 'addSavedNotificationSound',
		});
	}

	/**
Removes a notification sound from the list of saved notification sounds.
*/
	async removeSavedNotificationSound(options: Omit<RemoveSavedNotificationSound, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeSavedNotificationSound',
		});
	}

	/**
Returns list of chats with non-default notification settings.
*/
	async getChatNotificationSettingsExceptions(options: Omit<GetChatNotificationSettingsExceptions, '@type'>): Promise<Chats> {
		return this._request({
			...options,
			'@type': 'getChatNotificationSettingsExceptions',
		});
	}

	/**
Returns the notification settings for chats of a given type.
*/
	async getScopeNotificationSettings(options: Omit<GetScopeNotificationSettings, '@type'>): Promise<ScopeNotificationSettings> {
		return this._request({
			...options,
			'@type': 'getScopeNotificationSettings',
		});
	}

	/**
Changes notification settings for chats of a given type.
*/
	async setScopeNotificationSettings(options: Omit<SetScopeNotificationSettings, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setScopeNotificationSettings',
		});
	}

	/**
Resets all notification settings to their default values. By default, all chats are unmuted and message previews are
shown.
*/
	async resetAllNotificationSettings(): Promise<Ok> {
		return this._request({
			'@type': 'resetAllNotificationSettings',
		});
	}

	/**
Changes the pinned state of a chat. There can be up to
GetOption("pinned_chat_count_max")/GetOption("pinned_archived_chat_count_max") pinned non-secret chats and the same
number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium.
*/
	async toggleChatIsPinned(options: Omit<ToggleChatIsPinned, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleChatIsPinned',
		});
	}

	/**
Changes the order of pinned chats.
*/
	async setPinnedChats(options: Omit<SetPinnedChats, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setPinnedChats',
		});
	}

	/**
Returns information about a bot that can be added to attachment menu.
*/
	async getAttachmentMenuBot(options: Omit<GetAttachmentMenuBot, '@type'>): Promise<AttachmentMenuBot> {
		return this._request({
			...options,
			'@type': 'getAttachmentMenuBot',
		});
	}

	/**
Adds or removes a bot to attachment menu. Bot can be added to attachment menu, only if
userTypeBot.can_be_added_to_attachment_menu == true.
*/
	async toggleBotIsAddedToAttachmentMenu(options: Omit<ToggleBotIsAddedToAttachmentMenu, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleBotIsAddedToAttachmentMenu',
		});
	}

	/**
Returns up to 8 themed emoji statuses, which color must be changed to the color of the Telegram Premium badge.
*/
	async getThemedEmojiStatuses(): Promise<EmojiStatuses> {
		return this._request({
			'@type': 'getThemedEmojiStatuses',
		});
	}

	/**
Returns recent emoji statuses.
*/
	async getRecentEmojiStatuses(): Promise<EmojiStatuses> {
		return this._request({
			'@type': 'getRecentEmojiStatuses',
		});
	}

	/**
Returns default emoji statuses.
*/
	async getDefaultEmojiStatuses(): Promise<EmojiStatuses> {
		return this._request({
			'@type': 'getDefaultEmojiStatuses',
		});
	}

	/**
Clears the list of recently used emoji statuses.
*/
	async clearRecentEmojiStatuses(): Promise<Ok> {
		return this._request({
			'@type': 'clearRecentEmojiStatuses',
		});
	}

	/**
Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile
updates.
*/
	async downloadFile(options: Omit<DownloadFile, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'downloadFile',
		});
	}

	/**
Returns file downloaded prefix size from a given offset, in bytes.
*/
	async getFileDownloadedPrefixSize(options: Omit<GetFileDownloadedPrefixSize, '@type'>): Promise<FileDownloadedPrefixSize> {
		return this._request({
			...options,
			'@type': 'getFileDownloadedPrefixSize',
		});
	}

	/**
Stops the downloading of a file. If a file has already been downloaded, does nothing.
*/
	async cancelDownloadFile(options: Omit<CancelDownloadFile, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'cancelDownloadFile',
		});
	}

	/**
Returns suggested name for saving a file in a given directory.
*/
	async getSuggestedFileName(options: Omit<GetSuggestedFileName, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getSuggestedFileName',
		});
	}

	/**
Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being
recorded voice and video notes. Updates updateFile will be used to notify about upload progress and successful
completion of the upload. The file will not have a persistent remote identifier until it will be sent in a message.
*/
	async preliminaryUploadFile(options: Omit<PreliminaryUploadFile, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'preliminaryUploadFile',
		});
	}

	/**
Stops the preliminary uploading of a file. Supported only for files uploaded by using preliminaryUploadFile. For other
files the behavior is undefined.
*/
	async cancelPreliminaryUploadFile(options: Omit<CancelPreliminaryUploadFile, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'cancelPreliminaryUploadFile',
		});
	}

	/**
Writes a part of a generated file. This method is intended to be used only if the application has no direct access to
TDLib's file system, because it is usually slower than a direct write to the destination file.
*/
	async writeGeneratedFilePart(options: Omit<WriteGeneratedFilePart, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'writeGeneratedFilePart',
		});
	}

	/**
Informs TDLib on a file generation progress.
*/
	async setFileGenerationProgress(options: Omit<SetFileGenerationProgress, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setFileGenerationProgress',
		});
	}

	/**
Finishes the file generation.
*/
	async finishFileGeneration(options: Omit<FinishFileGeneration, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'finishFileGeneration',
		});
	}

	/**
Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the
application has no direct access to TDLib's file system, because it is usually slower than a direct read from the file.
*/
	async readFilePart(options: Omit<ReadFilePart, '@type'>): Promise<FilePart> {
		return this._request({
			...options,
			'@type': 'readFilePart',
		});
	}

	/**
Deletes a file from the TDLib file cache.
*/
	async deleteFile(options: Omit<DeleteFile, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteFile',
		});
	}

	/**
Adds a file from a message to the list of file downloads. Download progress and completion of the download will be
notified through updateFile updates. If message database is used, the list of file downloads is persistent across
application restarts. The downloading is independent from download using downloadFile, i.e. it continues if downloadFile
is canceled or is used to download a part of the file.
*/
	async addFileToDownloads(options: Omit<AddFileToDownloads, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'addFileToDownloads',
		});
	}

	/**
Changes pause state of a file in the file download list.
*/
	async toggleDownloadIsPaused(options: Omit<ToggleDownloadIsPaused, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleDownloadIsPaused',
		});
	}

	/**
Changes pause state of all files in the file download list.
*/
	async toggleAllDownloadsArePaused(options: Omit<ToggleAllDownloadsArePaused, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleAllDownloadsArePaused',
		});
	}

	/**
Removes a file from the file download list.
*/
	async removeFileFromDownloads(options: Omit<RemoveFileFromDownloads, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeFileFromDownloads',
		});
	}

	/**
Removes all files from the file download list.
*/
	async removeAllFilesFromDownloads(options: Omit<RemoveAllFilesFromDownloads, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeAllFilesFromDownloads',
		});
	}

	/**
Searches for files in the file download list or recently downloaded files from the list.
*/
	async searchFileDownloads(options: Omit<SearchFileDownloads, '@type'>): Promise<FoundFileDownloads> {
		return this._request({
			...options,
			'@type': 'searchFileDownloads',
		});
	}

	/**
Returns information about a file with messages exported from another application.
*/
	async getMessageFileType(options: Omit<GetMessageFileType, '@type'>): Promise<MessageFileType> {
		return this._request({
			...options,
			'@type': 'getMessageFileType',
		});
	}

	/**
Returns a confirmation text to be shown to the user before starting message import.
*/
	async getMessageImportConfirmationText(options: Omit<GetMessageImportConfirmationText, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getMessageImportConfirmationText',
		});
	}

	/**
Imports messages exported from another app.
*/
	async importMessages(options: Omit<ImportMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'importMessages',
		});
	}

	/**
Replaces current primary invite link for a chat with a new primary invite link. Available for basic groups, supergroups,
and channels. Requires administrator privileges and can_invite_users right.
*/
	async replacePrimaryChatInviteLink(options: Omit<ReplacePrimaryChatInviteLink, '@type'>): Promise<ChatInviteLink> {
		return this._request({
			...options,
			'@type': 'replacePrimaryChatInviteLink',
		});
	}

	/**
Creates a new invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator
privileges and can_invite_users right in the chat.
*/
	async createChatInviteLink(options: Omit<CreateChatInviteLink, '@type'>): Promise<ChatInviteLink> {
		return this._request({
			...options,
			'@type': 'createChatInviteLink',
		});
	}

	/**
Edits a non-primary invite link for a chat. Available for basic groups, supergroups, and channels. Requires
administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links.
*/
	async editChatInviteLink(options: Omit<EditChatInviteLink, '@type'>): Promise<ChatInviteLink> {
		return this._request({
			...options,
			'@type': 'editChatInviteLink',
		});
	}

	/**
Returns information about an invite link. Requires administrator privileges and can_invite_users right in the chat to
get own links and owner privileges to get other links.
*/
	async getChatInviteLink(options: Omit<GetChatInviteLink, '@type'>): Promise<ChatInviteLink> {
		return this._request({
			...options,
			'@type': 'getChatInviteLink',
		});
	}

	/**
Returns list of chat administrators with number of their invite links. Requires owner privileges in the chat.
*/
	async getChatInviteLinkCounts(options: Omit<GetChatInviteLinkCounts, '@type'>): Promise<ChatInviteLinkCounts> {
		return this._request({
			...options,
			'@type': 'getChatInviteLinkCounts',
		});
	}

	/**
Returns invite links for a chat created by specified administrator. Requires administrator privileges and
can_invite_users right in the chat to get own links and owner privileges to get other links.
*/
	async getChatInviteLinks(options: Omit<GetChatInviteLinks, '@type'>): Promise<ChatInviteLinks> {
		return this._request({
			...options,
			'@type': 'getChatInviteLinks',
		});
	}

	/**
Returns chat members joined a chat via an invite link. Requires administrator privileges and can_invite_users right in
the chat for own links and owner privileges for other links.
*/
	async getChatInviteLinkMembers(options: Omit<GetChatInviteLinkMembers, '@type'>): Promise<ChatInviteLinkMembers> {
		return this._request({
			...options,
			'@type': 'getChatInviteLinkMembers',
		});
	}

	/**
Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges
and can_invite_users right in the chat for own links and owner privileges for other links. If a primary link is revoked,
then additionally to the revoked link returns new primary link.
*/
	async revokeChatInviteLink(options: Omit<RevokeChatInviteLink, '@type'>): Promise<ChatInviteLinks> {
		return this._request({
			...options,
			'@type': 'revokeChatInviteLink',
		});
	}

	/**
Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own
links and owner privileges for other links.
*/
	async deleteRevokedChatInviteLink(options: Omit<DeleteRevokedChatInviteLink, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteRevokedChatInviteLink',
		});
	}

	/**
Deletes all revoked chat invite links created by a given chat administrator. Requires administrator privileges and
can_invite_users right in the chat for own links and owner privileges for other links.
*/
	async deleteAllRevokedChatInviteLinks(options: Omit<DeleteAllRevokedChatInviteLinks, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteAllRevokedChatInviteLinks',
		});
	}

	/**
Checks the validity of an invite link for a chat and returns information about the corresponding chat.
*/
	async checkChatInviteLink(options: Omit<CheckChatInviteLink, '@type'>): Promise<ChatInviteLinkInfo> {
		return this._request({
			...options,
			'@type': 'checkChatInviteLink',
		});
	}

	/**
Uses an invite link to add the current user to the chat if possible. May return an error with a message
"INVITE_REQUEST_SENT" if only a join request was created.
*/
	async joinChatByInviteLink(options: Omit<JoinChatByInviteLink, '@type'>): Promise<Chat> {
		return this._request({
			...options,
			'@type': 'joinChatByInviteLink',
		});
	}

	/**
Returns pending join requests in a chat.
*/
	async getChatJoinRequests(options: Omit<GetChatJoinRequests, '@type'>): Promise<ChatJoinRequests> {
		return this._request({
			...options,
			'@type': 'getChatJoinRequests',
		});
	}

	/**
Handles a pending join request in a chat.
*/
	async processChatJoinRequest(options: Omit<ProcessChatJoinRequest, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'processChatJoinRequest',
		});
	}

	/**
Handles all pending join requests for a given link in a chat.
*/
	async processChatJoinRequests(options: Omit<ProcessChatJoinRequests, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'processChatJoinRequests',
		});
	}

	/**
Creates a new call.
*/
	async createCall(options: Omit<CreateCall, '@type'>): Promise<CallId> {
		return this._request({
			...options,
			'@type': 'createCall',
		});
	}

	/**
Accepts an incoming call.
*/
	async acceptCall(options: Omit<AcceptCall, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'acceptCall',
		});
	}

	/**
Sends call signaling data.
*/
	async sendCallSignalingData(options: Omit<SendCallSignalingData, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendCallSignalingData',
		});
	}

	/**
Discards a call.
*/
	async discardCall(options: Omit<DiscardCall, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'discardCall',
		});
	}

	/**
Sends a call rating.
*/
	async sendCallRating(options: Omit<SendCallRating, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendCallRating',
		});
	}

	/**
Sends debug information for a call to Telegram servers.
*/
	async sendCallDebugInformation(options: Omit<SendCallDebugInformation, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendCallDebugInformation',
		});
	}

	/**
Sends log file for a call to Telegram servers.
*/
	async sendCallLog(options: Omit<SendCallLog, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendCallLog',
		});
	}

	/**
Returns list of participant identifiers, on whose behalf a video chat in the chat can be joined.
*/
	async getVideoChatAvailableParticipants(options: Omit<GetVideoChatAvailableParticipants, '@type'>): Promise<MessageSenders> {
		return this._request({
			...options,
			'@type': 'getVideoChatAvailableParticipants',
		});
	}

	/**
Changes default participant identifier, on whose behalf a video chat in the chat will be joined.
*/
	async setVideoChatDefaultParticipant(options: Omit<SetVideoChatDefaultParticipant, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setVideoChatDefaultParticipant',
		});
	}

	/**
Creates a video chat (a group call bound to a chat). Available only for basic groups, supergroups and channels; requires
can_manage_video_chats rights.
*/
	async createVideoChat(options: Omit<CreateVideoChat, '@type'>): Promise<GroupCallId> {
		return this._request({
			...options,
			'@type': 'createVideoChat',
		});
	}

	/**
Returns RTMP URL for streaming to the chat; requires creator privileges.
*/
	async getVideoChatRtmpUrl(options: Omit<GetVideoChatRtmpUrl, '@type'>): Promise<RtmpUrl> {
		return this._request({
			...options,
			'@type': 'getVideoChatRtmpUrl',
		});
	}

	/**
Replaces the current RTMP URL for streaming to the chat; requires creator privileges.
*/
	async replaceVideoChatRtmpUrl(options: Omit<ReplaceVideoChatRtmpUrl, '@type'>): Promise<RtmpUrl> {
		return this._request({
			...options,
			'@type': 'replaceVideoChatRtmpUrl',
		});
	}

	/**
Returns information about a group call.
*/
	async getGroupCall(options: Omit<GetGroupCall, '@type'>): Promise<GroupCall> {
		return this._request({
			...options,
			'@type': 'getGroupCall',
		});
	}

	/**
Starts a scheduled group call.
*/
	async startScheduledGroupCall(options: Omit<StartScheduledGroupCall, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'startScheduledGroupCall',
		});
	}

	/**
Toggles whether the current user will receive a notification when the group call will start; scheduled group calls only.
*/
	async toggleGroupCallEnabledStartNotification(options: Omit<ToggleGroupCallEnabledStartNotification, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallEnabledStartNotification',
		});
	}

	/**
Joins an active group call. Returns join response payload for tgcalls.
*/
	async joinGroupCall(options: Omit<JoinGroupCall, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'joinGroupCall',
		});
	}

	/**
Starts screen sharing in a joined group call. Returns join response payload for tgcalls.
*/
	async startGroupCallScreenSharing(options: Omit<StartGroupCallScreenSharing, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'startGroupCallScreenSharing',
		});
	}

	/**
Pauses or unpauses screen sharing in a joined group call.
*/
	async toggleGroupCallScreenSharingIsPaused(options: Omit<ToggleGroupCallScreenSharingIsPaused, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallScreenSharingIsPaused',
		});
	}

	/**
Ends screen sharing in a joined group call.
*/
	async endGroupCallScreenSharing(options: Omit<EndGroupCallScreenSharing, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'endGroupCallScreenSharing',
		});
	}

	/**
Sets group call title. Requires groupCall.can_be_managed group call flag.
*/
	async setGroupCallTitle(options: Omit<SetGroupCallTitle, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setGroupCallTitle',
		});
	}

	/**
Toggles whether new participants of a group call can be unmuted only by administrators of the group call. Requires
groupCall.can_toggle_mute_new_participants group call flag.
*/
	async toggleGroupCallMuteNewParticipants(options: Omit<ToggleGroupCallMuteNewParticipants, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallMuteNewParticipants',
		});
	}

	/**
Invites users to an active group call. Sends a service message of type messageInviteToGroupCall for video chats.
*/
	async inviteGroupCallParticipants(options: Omit<InviteGroupCallParticipants, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'inviteGroupCallParticipants',
		});
	}

	/**
Returns invite link to a video chat in a public chat.
*/
	async getGroupCallInviteLink(options: Omit<GetGroupCallInviteLink, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getGroupCallInviteLink',
		});
	}

	/**
Revokes invite link for a group call. Requires groupCall.can_be_managed group call flag.
*/
	async revokeGroupCallInviteLink(options: Omit<RevokeGroupCallInviteLink, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'revokeGroupCallInviteLink',
		});
	}

	/**
Starts recording of an active group call. Requires groupCall.can_be_managed group call flag.
*/
	async startGroupCallRecording(options: Omit<StartGroupCallRecording, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'startGroupCallRecording',
		});
	}

	/**
Ends recording of an active group call. Requires groupCall.can_be_managed group call flag.
*/
	async endGroupCallRecording(options: Omit<EndGroupCallRecording, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'endGroupCallRecording',
		});
	}

	/**
Toggles whether current user's video is paused.
*/
	async toggleGroupCallIsMyVideoPaused(options: Omit<ToggleGroupCallIsMyVideoPaused, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallIsMyVideoPaused',
		});
	}

	/**
Toggles whether current user's video is enabled.
*/
	async toggleGroupCallIsMyVideoEnabled(options: Omit<ToggleGroupCallIsMyVideoEnabled, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallIsMyVideoEnabled',
		});
	}

	/**
Informs TDLib that speaking state of a participant of an active group has changed.
*/
	async setGroupCallParticipantIsSpeaking(options: Omit<SetGroupCallParticipantIsSpeaking, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setGroupCallParticipantIsSpeaking',
		});
	}

	/**
Toggles whether a participant of an active group call is muted, unmuted, or allowed to unmute themselves.
*/
	async toggleGroupCallParticipantIsMuted(options: Omit<ToggleGroupCallParticipantIsMuted, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallParticipantIsMuted',
		});
	}

	/**
Changes volume level of a participant of an active group call. If the current user can manage the group call, then the
participant's volume level will be changed for all users with the default volume level.
*/
	async setGroupCallParticipantVolumeLevel(options: Omit<SetGroupCallParticipantVolumeLevel, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setGroupCallParticipantVolumeLevel',
		});
	}

	/**
Toggles whether a group call participant hand is rased.
*/
	async toggleGroupCallParticipantIsHandRaised(options: Omit<ToggleGroupCallParticipantIsHandRaised, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleGroupCallParticipantIsHandRaised',
		});
	}

	/**
Loads more participants of a group call. The loaded participants will be received through updates. Use the field
groupCall.loaded_all_participants to check whether all participants have already been loaded.
*/
	async loadGroupCallParticipants(options: Omit<LoadGroupCallParticipants, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'loadGroupCallParticipants',
		});
	}

	/**
Leaves a group call.
*/
	async leaveGroupCall(options: Omit<LeaveGroupCall, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'leaveGroupCall',
		});
	}

	/**
Ends a group call. Requires groupCall.can_be_managed.
*/
	async endGroupCall(options: Omit<EndGroupCall, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'endGroupCall',
		});
	}

	/**
Returns information about available group call streams.
*/
	async getGroupCallStreams(options: Omit<GetGroupCallStreams, '@type'>): Promise<GroupCallStreams> {
		return this._request({
			...options,
			'@type': 'getGroupCallStreams',
		});
	}

	/**
Returns a file with a segment of a group call stream in a modified OGG format for audio or MPEG-4 format for video.
*/
	async getGroupCallStreamSegment(options: Omit<GetGroupCallStreamSegment, '@type'>): Promise<FilePart> {
		return this._request({
			...options,
			'@type': 'getGroupCallStreamSegment',
		});
	}

	/**
Changes the block state of a message sender. Currently, only users and supergroup chats can be blocked.
*/
	async toggleMessageSenderIsBlocked(options: Omit<ToggleMessageSenderIsBlocked, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleMessageSenderIsBlocked',
		});
	}

	/**
Blocks an original sender of a message in the Replies chat.
*/
	async blockMessageSenderFromReplies(options: Omit<BlockMessageSenderFromReplies, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'blockMessageSenderFromReplies',
		});
	}

	/**
Returns users and chats that were blocked by the current user.
*/
	async getBlockedMessageSenders(options: Omit<GetBlockedMessageSenders, '@type'>): Promise<MessageSenders> {
		return this._request({
			...options,
			'@type': 'getBlockedMessageSenders',
		});
	}

	/**
Adds a user to the contact list or edits an existing contact by their user identifier.
*/
	async addContact(options: Omit<AddContact, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addContact',
		});
	}

	/**
Adds new contacts or edits existing contacts by their phone numbers; contacts' user identifiers are ignored.
*/
	async importContacts(options: Omit<ImportContacts, '@type'>): Promise<ImportedContacts> {
		return this._request({
			...options,
			'@type': 'importContacts',
		});
	}

	/**
Returns all user contacts.
*/
	async getContacts(): Promise<Users> {
		return this._request({
			'@type': 'getContacts',
		});
	}

	/**
Searches for the specified query in the first names, last names and usernames of the known user contacts.
*/
	async searchContacts(options: Omit<SearchContacts, '@type'>): Promise<Users> {
		return this._request({
			...options,
			'@type': 'searchContacts',
		});
	}

	/**
Removes users from the contact list.
*/
	async removeContacts(options: Omit<RemoveContacts, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeContacts',
		});
	}

	/**
Returns the total number of imported contacts.
*/
	async getImportedContactCount(): Promise<Count> {
		return this._request({
			'@type': 'getImportedContactCount',
		});
	}

	/**
Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least
the file database is enabled, deletes recently deleted contacts. Query result depends on the result of the previous
query, so only one query is possible at the same time.
*/
	async changeImportedContacts(options: Omit<ChangeImportedContacts, '@type'>): Promise<ImportedContacts> {
		return this._request({
			...options,
			'@type': 'changeImportedContacts',
		});
	}

	/**
Clears all imported contacts, contact list remains unchanged.
*/
	async clearImportedContacts(): Promise<Ok> {
		return this._request({
			'@type': 'clearImportedContacts',
		});
	}

	/**
Searches a user by their phone number. Returns a 404 error if the user can't be found.
*/
	async searchUserByPhoneNumber(options: Omit<SearchUserByPhoneNumber, '@type'>): Promise<User> {
		return this._request({
			...options,
			'@type': 'searchUserByPhoneNumber',
		});
	}

	/**
Shares the phone number of the current user with a mutual contact. Supposed to be called when the user clicks on
chatActionBarSharePhoneNumber.
*/
	async sharePhoneNumber(options: Omit<SharePhoneNumber, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sharePhoneNumber',
		});
	}

	/**
Returns the profile photos of a user. The result of this query may be outdated: some photos might have been deleted
already.
*/
	async getUserProfilePhotos(options: Omit<GetUserProfilePhotos, '@type'>): Promise<ChatPhotos> {
		return this._request({
			...options,
			'@type': 'getUserProfilePhotos',
		});
	}

	/**
Returns stickers from the installed sticker sets that correspond to a given emoji or can be found by sticker-specific
keywords. If the query is non-empty, then favorite, recently used or trending stickers may also be returned.
*/
	async getStickers(options: Omit<GetStickers, '@type'>): Promise<Stickers> {
		return this._request({
			...options,
			'@type': 'getStickers',
		});
	}

	/**
Searches for stickers from public sticker sets that correspond to a given emoji.
*/
	async searchStickers(options: Omit<SearchStickers, '@type'>): Promise<Stickers> {
		return this._request({
			...options,
			'@type': 'searchStickers',
		});
	}

	/**
Returns premium stickers from regular sticker sets.
*/
	async getPremiumStickers(options: Omit<GetPremiumStickers, '@type'>): Promise<Stickers> {
		return this._request({
			...options,
			'@type': 'getPremiumStickers',
		});
	}

	/**
Returns a list of installed sticker sets.
*/
	async getInstalledStickerSets(options: Omit<GetInstalledStickerSets, '@type'>): Promise<StickerSets> {
		return this._request({
			...options,
			'@type': 'getInstalledStickerSets',
		});
	}

	/**
Returns a list of archived sticker sets.
*/
	async getArchivedStickerSets(options: Omit<GetArchivedStickerSets, '@type'>): Promise<StickerSets> {
		return this._request({
			...options,
			'@type': 'getArchivedStickerSets',
		});
	}

	/**
Returns a list of trending sticker sets. For optimal performance, the number of returned sticker sets is chosen by
TDLib.
*/
	async getTrendingStickerSets(options: Omit<GetTrendingStickerSets, '@type'>): Promise<TrendingStickerSets> {
		return this._request({
			...options,
			'@type': 'getTrendingStickerSets',
		});
	}

	/**
Returns a list of sticker sets attached to a file. Currently, only photos and videos can have attached sticker sets.
*/
	async getAttachedStickerSets(options: Omit<GetAttachedStickerSets, '@type'>): Promise<StickerSets> {
		return this._request({
			...options,
			'@type': 'getAttachedStickerSets',
		});
	}

	/**
Returns information about a sticker set by its identifier.
*/
	async getStickerSet(options: Omit<GetStickerSet, '@type'>): Promise<StickerSet> {
		return this._request({
			...options,
			'@type': 'getStickerSet',
		});
	}

	/**
Searches for a sticker set by its name.
*/
	async searchStickerSet(options: Omit<SearchStickerSet, '@type'>): Promise<StickerSet> {
		return this._request({
			...options,
			'@type': 'searchStickerSet',
		});
	}

	/**
Searches for installed sticker sets by looking for specified query in their title and name.
*/
	async searchInstalledStickerSets(options: Omit<SearchInstalledStickerSets, '@type'>): Promise<StickerSets> {
		return this._request({
			...options,
			'@type': 'searchInstalledStickerSets',
		});
	}

	/**
Searches for ordinary sticker sets by looking for specified query in their title and name. Excludes installed sticker
sets from the results.
*/
	async searchStickerSets(options: Omit<SearchStickerSets, '@type'>): Promise<StickerSets> {
		return this._request({
			...options,
			'@type': 'searchStickerSets',
		});
	}

	/**
Installs/uninstalls or activates/archives a sticker set.
*/
	async changeStickerSet(options: Omit<ChangeStickerSet, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'changeStickerSet',
		});
	}

	/**
Informs the server that some trending sticker sets have been viewed by the user.
*/
	async viewTrendingStickerSets(options: Omit<ViewTrendingStickerSets, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'viewTrendingStickerSets',
		});
	}

	/**
Changes the order of installed sticker sets.
*/
	async reorderInstalledStickerSets(options: Omit<ReorderInstalledStickerSets, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'reorderInstalledStickerSets',
		});
	}

	/**
Returns a list of recently used stickers.
*/
	async getRecentStickers(options: Omit<GetRecentStickers, '@type'>): Promise<Stickers> {
		return this._request({
			...options,
			'@type': 'getRecentStickers',
		});
	}

	/**
Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If
the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be
added to this list. Emoji stickers can't be added to recent stickers.
*/
	async addRecentSticker(options: Omit<AddRecentSticker, '@type'>): Promise<Stickers> {
		return this._request({
			...options,
			'@type': 'addRecentSticker',
		});
	}

	/**
Removes a sticker from the list of recently used stickers.
*/
	async removeRecentSticker(options: Omit<RemoveRecentSticker, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeRecentSticker',
		});
	}

	/**
Clears the list of recently used stickers.
*/
	async clearRecentStickers(options: Omit<ClearRecentStickers, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'clearRecentStickers',
		});
	}

	/**
Returns favorite stickers.
*/
	async getFavoriteStickers(): Promise<Stickers> {
		return this._request({
			'@type': 'getFavoriteStickers',
		});
	}

	/**
Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was
already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be added to this
list. Emoji stickers can't be added to favorite stickers.
*/
	async addFavoriteSticker(options: Omit<AddFavoriteSticker, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addFavoriteSticker',
		});
	}

	/**
Removes a sticker from the list of favorite stickers.
*/
	async removeFavoriteSticker(options: Omit<RemoveFavoriteSticker, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeFavoriteSticker',
		});
	}

	/**
Returns emoji corresponding to a sticker. The list is only for informational purposes, because a sticker is always sent
with a fixed emoji from the corresponding Sticker object.
*/
	async getStickerEmojis(options: Omit<GetStickerEmojis, '@type'>): Promise<Emojis> {
		return this._request({
			...options,
			'@type': 'getStickerEmojis',
		});
	}

	/**
Searches for emojis by keywords. Supported only if the file database is enabled.
*/
	async searchEmojis(options: Omit<SearchEmojis, '@type'>): Promise<Emojis> {
		return this._request({
			...options,
			'@type': 'searchEmojis',
		});
	}

	/**
Returns an animated emoji corresponding to a given emoji. Returns a 404 error if the emoji has no animated emoji.
*/
	async getAnimatedEmoji(options: Omit<GetAnimatedEmoji, '@type'>): Promise<AnimatedEmoji> {
		return this._request({
			...options,
			'@type': 'getAnimatedEmoji',
		});
	}

	/**
Returns an HTTP URL which can be used to automatically log in to the translation platform and suggest new emoji
replacements. The URL will be valid for 30 seconds after generation.
*/
	async getEmojiSuggestionsUrl(options: Omit<GetEmojiSuggestionsUrl, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getEmojiSuggestionsUrl',
		});
	}

	/**
Returns list of custom emoji stickers by their identifiers. Stickers are returned in arbitrary order. Only found
stickers are returned.
*/
	async getCustomEmojiStickers(options: Omit<GetCustomEmojiStickers, '@type'>): Promise<Stickers> {
		return this._request({
			...options,
			'@type': 'getCustomEmojiStickers',
		});
	}

	/**
Returns saved animations.
*/
	async getSavedAnimations(): Promise<Animations> {
		return this._request({
			'@type': 'getSavedAnimations',
		});
	}

	/**
Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list.
If the animation was already in the list, it is removed first. Only non-secret video animations with MIME type
"video/mp4" can be added to the list.
*/
	async addSavedAnimation(options: Omit<AddSavedAnimation, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addSavedAnimation',
		});
	}

	/**
Removes an animation from the list of saved animations.
*/
	async removeSavedAnimation(options: Omit<RemoveSavedAnimation, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeSavedAnimation',
		});
	}

	/**
Returns up to 20 recently used inline bots in the order of their last usage.
*/
	async getRecentInlineBots(): Promise<Users> {
		return this._request({
			'@type': 'getRecentInlineBots',
		});
	}

	/**
Searches for recently used hashtags by their prefix.
*/
	async searchHashtags(options: Omit<SearchHashtags, '@type'>): Promise<Hashtags> {
		return this._request({
			...options,
			'@type': 'searchHashtags',
		});
	}

	/**
Removes a hashtag from the list of recently used hashtags.
*/
	async removeRecentHashtag(options: Omit<RemoveRecentHashtag, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeRecentHashtag',
		});
	}

	/**
Returns a web page preview by the text of the message. Do not call this function too often. Returns a 404 error if the
web page has no preview.
*/
	async getWebPagePreview(options: Omit<GetWebPagePreview, '@type'>): Promise<WebPage> {
		return this._request({
			...options,
			'@type': 'getWebPagePreview',
		});
	}

	/**
Returns an instant view version of a web page if available. Returns a 404 error if the web page has no instant view
page.
*/
	async getWebPageInstantView(options: Omit<GetWebPageInstantView, '@type'>): Promise<WebPageInstantView> {
		return this._request({
			...options,
			'@type': 'getWebPageInstantView',
		});
	}

	/**
Changes a profile photo for the current user.
*/
	async setProfilePhoto(options: Omit<SetProfilePhoto, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setProfilePhoto',
		});
	}

	/**
Deletes a profile photo.
*/
	async deleteProfilePhoto(options: Omit<DeleteProfilePhoto, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteProfilePhoto',
		});
	}

	/**
Changes the first and last name of the current user.
*/
	async setName(options: Omit<SetName, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setName',
		});
	}

	/**
Changes the bio of the current user.
*/
	async setBio(options: Omit<SetBio, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setBio',
		});
	}

	/**
Changes the username of the current user.
*/
	async setUsername(options: Omit<SetUsername, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setUsername',
		});
	}

	/**
Changes the emoji status of the current user; for Telegram Premium users only.
*/
	async setEmojiStatus(options: Omit<SetEmojiStatus, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setEmojiStatus',
		});
	}

	/**
Changes the location of the current user. Needs to be called if GetOption("is_location_visible") is true and location
changes for more than 1 kilometer.
*/
	async setLocation(options: Omit<SetLocation, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setLocation',
		});
	}

	/**
Changes the phone number of the user and sends an authentication code to the user's new phone number. On success,
returns information about the sent code.
*/
	async changePhoneNumber(options: Omit<ChangePhoneNumber, '@type'>): Promise<AuthenticationCodeInfo> {
		return this._request({
			...options,
			'@type': 'changePhoneNumber',
		});
	}

	/**
Resends the authentication code sent to confirm a new phone number for the current user. Works only if the previously
received authenticationCodeInfo next_code_type was not null and the server-specified timeout has passed.
*/
	async resendChangePhoneNumberCode(): Promise<AuthenticationCodeInfo> {
		return this._request({
			'@type': 'resendChangePhoneNumberCode',
		});
	}

	/**
Checks the authentication code sent to confirm a new phone number of the user.
*/
	async checkChangePhoneNumberCode(options: Omit<CheckChangePhoneNumberCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkChangePhoneNumberCode',
		});
	}

	/**
Sets the list of commands supported by the bot for the given user scope and language; for bots only.
*/
	async setCommands(options: Omit<SetCommands, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setCommands',
		});
	}

	/**
Deletes commands supported by the bot for the given user scope and language; for bots only.
*/
	async deleteCommands(options: Omit<DeleteCommands, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteCommands',
		});
	}

	/**
Returns the list of commands supported by the bot for the given user scope and language; for bots only.
*/
	async getCommands(options: Omit<GetCommands, '@type'>): Promise<BotCommands> {
		return this._request({
			...options,
			'@type': 'getCommands',
		});
	}

	/**
Sets menu button for the given user or for all users; for bots only.
*/
	async setMenuButton(options: Omit<SetMenuButton, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setMenuButton',
		});
	}

	/**
Returns menu button set by the bot for the given user; for bots only.
*/
	async getMenuButton(options: Omit<GetMenuButton, '@type'>): Promise<BotMenuButton> {
		return this._request({
			...options,
			'@type': 'getMenuButton',
		});
	}

	/**
Sets default administrator rights for adding the bot to basic group and supergroup chats; for bots only.
*/
	async setDefaultGroupAdministratorRights(options: Omit<SetDefaultGroupAdministratorRights, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setDefaultGroupAdministratorRights',
		});
	}

	/**
Sets default administrator rights for adding the bot to channel chats; for bots only.
*/
	async setDefaultChannelAdministratorRights(options: Omit<SetDefaultChannelAdministratorRights, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setDefaultChannelAdministratorRights',
		});
	}

	/**
Returns all active sessions of the current user.
*/
	async getActiveSessions(): Promise<Sessions> {
		return this._request({
			'@type': 'getActiveSessions',
		});
	}

	/**
Terminates a session of the current user.
*/
	async terminateSession(options: Omit<TerminateSession, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'terminateSession',
		});
	}

	/**
Terminates all other sessions of the current user.
*/
	async terminateAllOtherSessions(): Promise<Ok> {
		return this._request({
			'@type': 'terminateAllOtherSessions',
		});
	}

	/**
Toggles whether a session can accept incoming calls.
*/
	async toggleSessionCanAcceptCalls(options: Omit<ToggleSessionCanAcceptCalls, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSessionCanAcceptCalls',
		});
	}

	/**
Toggles whether a session can accept incoming secret chats.
*/
	async toggleSessionCanAcceptSecretChats(options: Omit<ToggleSessionCanAcceptSecretChats, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSessionCanAcceptSecretChats',
		});
	}

	/**
Changes the period of inactivity after which sessions will automatically be terminated.
*/
	async setInactiveSessionTtl(options: Omit<SetInactiveSessionTtl, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setInactiveSessionTtl',
		});
	}

	/**
Returns all website where the current user used Telegram to log in.
*/
	async getConnectedWebsites(): Promise<ConnectedWebsites> {
		return this._request({
			'@type': 'getConnectedWebsites',
		});
	}

	/**
Disconnects website from the current user's Telegram account.
*/
	async disconnectWebsite(options: Omit<DisconnectWebsite, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'disconnectWebsite',
		});
	}

	/**
Disconnects all websites from the current user's Telegram account.
*/
	async disconnectAllWebsites(): Promise<Ok> {
		return this._request({
			'@type': 'disconnectAllWebsites',
		});
	}

	/**
Changes the username of a supergroup or channel, requires owner privileges in the supergroup or channel.
*/
	async setSupergroupUsername(options: Omit<SetSupergroupUsername, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setSupergroupUsername',
		});
	}

	/**
Changes the sticker set of a supergroup; requires can_change_info administrator right.
*/
	async setSupergroupStickerSet(options: Omit<SetSupergroupStickerSet, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setSupergroupStickerSet',
		});
	}

	/**
Toggles whether sender signature is added to sent messages in a channel; requires can_change_info administrator right.
*/
	async toggleSupergroupSignMessages(options: Omit<ToggleSupergroupSignMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSupergroupSignMessages',
		});
	}

	/**
Toggles whether joining is mandatory to send messages to a discussion supergroup; requires can_restrict_members
administrator right.
*/
	async toggleSupergroupJoinToSendMessages(options: Omit<ToggleSupergroupJoinToSendMessages, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSupergroupJoinToSendMessages',
		});
	}

	/**
Toggles whether all users directly joining the supergroup need to be approved by supergroup administrators; requires
can_restrict_members administrator right.
*/
	async toggleSupergroupJoinByRequest(options: Omit<ToggleSupergroupJoinByRequest, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSupergroupJoinByRequest',
		});
	}

	/**
Toggles whether the message history of a supergroup is available to new members; requires can_change_info administrator
right.
*/
	async toggleSupergroupIsAllHistoryAvailable(options: Omit<ToggleSupergroupIsAllHistoryAvailable, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSupergroupIsAllHistoryAvailable',
		});
	}

	/**
Upgrades supergroup to a broadcast group; requires owner privileges in the supergroup.
*/
	async toggleSupergroupIsBroadcastGroup(options: Omit<ToggleSupergroupIsBroadcastGroup, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'toggleSupergroupIsBroadcastGroup',
		});
	}

	/**
Reports messages in a supergroup as spam; requires administrator rights in the supergroup.
*/
	async reportSupergroupSpam(options: Omit<ReportSupergroupSpam, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'reportSupergroupSpam',
		});
	}

	/**
Returns information about members or banned users in a supergroup or channel. Can be used only if
supergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters.
*/
	async getSupergroupMembers(options: Omit<GetSupergroupMembers, '@type'>): Promise<ChatMembers> {
		return this._request({
			...options,
			'@type': 'getSupergroupMembers',
		});
	}

	/**
Closes a secret chat, effectively transferring its state to secretChatStateClosed.
*/
	async closeSecretChat(options: Omit<CloseSecretChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'closeSecretChat',
		});
	}

	/**
Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only for
supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i.e., in order
of decreasing event_id).
*/
	async getChatEventLog(options: Omit<GetChatEventLog, '@type'>): Promise<ChatEvents> {
		return this._request({
			...options,
			'@type': 'getChatEventLog',
		});
	}

	/**
Returns an invoice payment form. This method must be called when the user presses inlineKeyboardButtonBuy.
*/
	async getPaymentForm(options: Omit<GetPaymentForm, '@type'>): Promise<PaymentForm> {
		return this._request({
			...options,
			'@type': 'getPaymentForm',
		});
	}

	/**
Validates the order information provided by a user and returns the available shipping options for a flexible invoice.
*/
	async validateOrderInfo(options: Omit<ValidateOrderInfo, '@type'>): Promise<ValidatedOrderInfo> {
		return this._request({
			...options,
			'@type': 'validateOrderInfo',
		});
	}

	/**
Sends a filled-out payment form to the bot for final verification.
*/
	async sendPaymentForm(options: Omit<SendPaymentForm, '@type'>): Promise<PaymentResult> {
		return this._request({
			...options,
			'@type': 'sendPaymentForm',
		});
	}

	/**
Returns information about a successful payment.
*/
	async getPaymentReceipt(options: Omit<GetPaymentReceipt, '@type'>): Promise<PaymentReceipt> {
		return this._request({
			...options,
			'@type': 'getPaymentReceipt',
		});
	}

	/**
Returns saved order information. Returns a 404 error if there is no saved order information.
*/
	async getSavedOrderInfo(): Promise<OrderInfo> {
		return this._request({
			'@type': 'getSavedOrderInfo',
		});
	}

	/**
Deletes saved order information.
*/
	async deleteSavedOrderInfo(): Promise<Ok> {
		return this._request({
			'@type': 'deleteSavedOrderInfo',
		});
	}

	/**
Deletes saved credentials for all payment provider bots.
*/
	async deleteSavedCredentials(): Promise<Ok> {
		return this._request({
			'@type': 'deleteSavedCredentials',
		});
	}

	/**
Creates a link for the given invoice; for bots only.
*/
	async createInvoiceLink(options: Omit<CreateInvoiceLink, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'createInvoiceLink',
		});
	}

	/**
Returns a user that can be contacted to get support.
*/
	async getSupportUser(): Promise<User> {
		return this._request({
			'@type': 'getSupportUser',
		});
	}

	/**
Returns backgrounds installed by the user.
*/
	async getBackgrounds(options: Omit<GetBackgrounds, '@type'>): Promise<Backgrounds> {
		return this._request({
			...options,
			'@type': 'getBackgrounds',
		});
	}

	/**
Constructs a persistent HTTP URL for a background.
*/
	async getBackgroundUrl(options: Omit<GetBackgroundUrl, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getBackgroundUrl',
		});
	}

	/**
Searches for a background by its name.
*/
	async searchBackground(options: Omit<SearchBackground, '@type'>): Promise<Background> {
		return this._request({
			...options,
			'@type': 'searchBackground',
		});
	}

	/**
Changes the background selected by the user; adds background to the list of installed backgrounds.
*/
	async setBackground(options: Omit<SetBackground, '@type'>): Promise<Background> {
		return this._request({
			...options,
			'@type': 'setBackground',
		});
	}

	/**
Removes background from the list of installed backgrounds.
*/
	async removeBackground(options: Omit<RemoveBackground, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeBackground',
		});
	}

	/**
Resets list of installed backgrounds to its default value.
*/
	async resetBackgrounds(): Promise<Ok> {
		return this._request({
			'@type': 'resetBackgrounds',
		});
	}

	/**
Returns information about the current localization target. This is an offline request if only_local is true. Can be
called before authorization.
*/
	async getLocalizationTargetInfo(options: Omit<GetLocalizationTargetInfo, '@type'>): Promise<LocalizationTargetInfo> {
		return this._request({
			...options,
			'@type': 'getLocalizationTargetInfo',
		});
	}

	/**
Returns information about a language pack. Returned language pack identifier may be different from a provided one. Can
be called before authorization.
*/
	async getLanguagePackInfo(options: Omit<GetLanguagePackInfo, '@type'>): Promise<LanguagePackInfo> {
		return this._request({
			...options,
			'@type': 'getLanguagePackInfo',
		});
	}

	/**
Returns strings from a language pack in the current localization target by their keys. Can be called before
authorization.
*/
	async getLanguagePackStrings(options: Omit<GetLanguagePackStrings, '@type'>): Promise<LanguagePackStrings> {
		return this._request({
			...options,
			'@type': 'getLanguagePackStrings',
		});
	}

	/**
Fetches the latest versions of all strings from a language pack in the current localization target from the server. This
method doesn't need to be called explicitly for the current used/base language packs. Can be called before
authorization.
*/
	async synchronizeLanguagePack(options: Omit<SynchronizeLanguagePack, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'synchronizeLanguagePack',
		});
	}

	/**
Adds a custom server language pack to the list of installed language packs in current localization target. Can be called
before authorization.
*/
	async addCustomServerLanguagePack(options: Omit<AddCustomServerLanguagePack, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addCustomServerLanguagePack',
		});
	}

	/**
Adds or changes a custom local language pack to the current localization target.
*/
	async setCustomLanguagePack(options: Omit<SetCustomLanguagePack, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setCustomLanguagePack',
		});
	}

	/**
Edits information about a custom local language pack in the current localization target. Can be called before
authorization.
*/
	async editCustomLanguagePackInfo(options: Omit<EditCustomLanguagePackInfo, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'editCustomLanguagePackInfo',
		});
	}

	/**
Adds, edits or deletes a string in a custom local language pack. Can be called before authorization.
*/
	async setCustomLanguagePackString(options: Omit<SetCustomLanguagePackString, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setCustomLanguagePackString',
		});
	}

	/**
Deletes all information about a language pack in the current localization target. The language pack which is currently
in use (including base language pack) or is being synchronized can't be deleted. Can be called before authorization.
*/
	async deleteLanguagePack(options: Omit<DeleteLanguagePack, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteLanguagePack',
		});
	}

	/**
Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push
notification subscription.
*/
	async registerDevice(options: Omit<RegisterDevice, '@type'>): Promise<PushReceiverId> {
		return this._request({
			...options,
			'@type': 'registerDevice',
		});
	}

	/**
Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the
server is required to fetch new data. Can be called before authorization.
*/
	async processPushNotification(options: Omit<ProcessPushNotification, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'processPushNotification',
		});
	}

	/**
Returns a globally unique push notification subscription identifier for identification of an account, which has received
a push notification. Can be called synchronously.
*/
	async getPushReceiverId(options: Omit<GetPushReceiverId, '@type'>): Promise<PushReceiverId> {
		return this._request({
			...options,
			'@type': 'getPushReceiverId',
		});
	}

	/**
Returns t.me URLs recently visited by a newly registered user.
*/
	async getRecentlyVisitedTMeUrls(options: Omit<GetRecentlyVisitedTMeUrls, '@type'>): Promise<TMeUrls> {
		return this._request({
			...options,
			'@type': 'getRecentlyVisitedTMeUrls',
		});
	}

	/**
Changes user privacy settings.
*/
	async setUserPrivacySettingRules(options: Omit<SetUserPrivacySettingRules, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setUserPrivacySettingRules',
		});
	}

	/**
Returns the current privacy settings.
*/
	async getUserPrivacySettingRules(options: Omit<GetUserPrivacySettingRules, '@type'>): Promise<UserPrivacySettingRules> {
		return this._request({
			...options,
			'@type': 'getUserPrivacySettingRules',
		});
	}

	/**
Returns the value of an option by its name. (Check the list of available options on
https://core.telegram.org/tdlib/options.) Can be called before authorization. Can be called synchronously for options
"version" and "commit_hash".
*/
	async getOption(options: Omit<GetOption, '@type'>): Promise<OptionValue> {
		return this._request({
			...options,
			'@type': 'getOption',
		});
	}

	/**
Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only
writable options can be set. Can be called before authorization.
*/
	async setOption(options: Omit<SetOption, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setOption',
		});
	}

	/**
Changes the period of inactivity after which the account of the current user will automatically be deleted.
*/
	async setAccountTtl(options: Omit<SetAccountTtl, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setAccountTtl',
		});
	}

	/**
Returns the period of inactivity after which the account of the current user will automatically be deleted.
*/
	async getAccountTtl(): Promise<AccountTtl> {
		return this._request({
			'@type': 'getAccountTtl',
		});
	}

	/**
Deletes the account of the current user, deleting all information associated with the user from the server. The phone
number of the account can be used to create a new account. Can be called before authorization when the current
authorization state is authorizationStateWaitPassword.
*/
	async deleteAccount(options: Omit<DeleteAccount, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deleteAccount',
		});
	}

	/**
Removes a chat action bar without any other action.
*/
	async removeChatActionBar(options: Omit<RemoveChatActionBar, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeChatActionBar',
		});
	}

	/**
Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if
chat.can_be_reported.
*/
	async reportChat(options: Omit<ReportChat, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'reportChat',
		});
	}

	/**
Reports a chat photo to the Telegram moderators. A chat photo can be reported only if chat.can_be_reported.
*/
	async reportChatPhoto(options: Omit<ReportChatPhoto, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'reportChatPhoto',
		});
	}

	/**
Reports reactions set on a message to the Telegram moderators. Reactions on a message can be reported only if
message.can_report_reactions.
*/
	async reportMessageReactions(options: Omit<ReportMessageReactions, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'reportMessageReactions',
		});
	}

	/**
Returns detailed statistics about a chat. Currently, this method can be used only for supergroups and channels. Can be
used only if supergroupFullInfo.can_get_statistics == true.
*/
	async getChatStatistics(options: Omit<GetChatStatistics, '@type'>): Promise<ChatStatistics> {
		return this._request({
			...options,
			'@type': 'getChatStatistics',
		});
	}

	/**
Returns detailed statistics about a message. Can be used only if message.can_get_statistics == true.
*/
	async getMessageStatistics(options: Omit<GetMessageStatistics, '@type'>): Promise<MessageStatistics> {
		return this._request({
			...options,
			'@type': 'getMessageStatistics',
		});
	}

	/**
Loads an asynchronous or a zoomed in statistical graph.
*/
	async getStatisticalGraph(options: Omit<GetStatisticalGraph, '@type'>): Promise<StatisticalGraph> {
		return this._request({
			...options,
			'@type': 'getStatisticalGraph',
		});
	}

	/**
Returns storage usage statistics. Can be called before authorization.
*/
	async getStorageStatistics(options: Omit<GetStorageStatistics, '@type'>): Promise<StorageStatistics> {
		return this._request({
			...options,
			'@type': 'getStorageStatistics',
		});
	}

	/**
Quickly returns approximate storage usage statistics. Can be called before authorization.
*/
	async getStorageStatisticsFast(): Promise<StorageStatisticsFast> {
		return this._request({
			'@type': 'getStorageStatisticsFast',
		});
	}

	/**
Returns database statistics.
*/
	async getDatabaseStatistics(): Promise<DatabaseStatistics> {
		return this._request({
			'@type': 'getDatabaseStatistics',
		});
	}

	/**
Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be
deleted.
*/
	async optimizeStorage(options: Omit<OptimizeStorage, '@type'>): Promise<StorageStatistics> {
		return this._request({
			...options,
			'@type': 'optimizeStorage',
		});
	}

	/**
Sets the current network type. Can be called before authorization. Calling this method forces all network connections to
reopen, mitigating the delay in switching between different networks, so it must be called whenever the network is
changed, even if the network type remains the same. Network type is used to check whether the library can use the
network at all and also for collecting detailed network data usage statistics.
*/
	async setNetworkType(options: Omit<SetNetworkType, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setNetworkType',
		});
	}

	/**
Returns network data usage statistics. Can be called before authorization.
*/
	async getNetworkStatistics(options: Omit<GetNetworkStatistics, '@type'>): Promise<NetworkStatistics> {
		return this._request({
			...options,
			'@type': 'getNetworkStatistics',
		});
	}

	/**
Adds the specified data to data usage statistics. Can be called before authorization.
*/
	async addNetworkStatistics(options: Omit<AddNetworkStatistics, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addNetworkStatistics',
		});
	}

	/**
Resets all network data usage statistics to zero. Can be called before authorization.
*/
	async resetNetworkStatistics(): Promise<Ok> {
		return this._request({
			'@type': 'resetNetworkStatistics',
		});
	}

	/**
Returns auto-download settings presets for the current user.
*/
	async getAutoDownloadSettingsPresets(): Promise<AutoDownloadSettingsPresets> {
		return this._request({
			'@type': 'getAutoDownloadSettingsPresets',
		});
	}

	/**
Sets auto-download settings.
*/
	async setAutoDownloadSettings(options: Omit<SetAutoDownloadSettings, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setAutoDownloadSettings',
		});
	}

	/**
Returns information about a bank card.
*/
	async getBankCardInfo(options: Omit<GetBankCardInfo, '@type'>): Promise<BankCardInfo> {
		return this._request({
			...options,
			'@type': 'getBankCardInfo',
		});
	}

	/**
Returns one of the available Telegram Passport elements.
*/
	async getPassportElement(options: Omit<GetPassportElement, '@type'>): Promise<PassportElement> {
		return this._request({
			...options,
			'@type': 'getPassportElement',
		});
	}

	/**
Returns all available Telegram Passport elements.
*/
	async getAllPassportElements(options: Omit<GetAllPassportElements, '@type'>): Promise<PassportElements> {
		return this._request({
			...options,
			'@type': 'getAllPassportElements',
		});
	}

	/**
Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or
"EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first.
*/
	async setPassportElement(options: Omit<SetPassportElement, '@type'>): Promise<PassportElement> {
		return this._request({
			...options,
			'@type': 'setPassportElement',
		});
	}

	/**
Deletes a Telegram Passport element.
*/
	async deletePassportElement(options: Omit<DeletePassportElement, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'deletePassportElement',
		});
	}

	/**
Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not
be able to resend the elements, until the errors are fixed.
*/
	async setPassportElementErrors(options: Omit<SetPassportElementErrors, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setPassportElementErrors',
		});
	}

	/**
Returns an IETF language tag of the language preferred in the country, which must be used to fill native fields in
Telegram Passport personal details. Returns a 404 error if unknown.
*/
	async getPreferredCountryLanguage(options: Omit<GetPreferredCountryLanguage, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getPreferredCountryLanguage',
		});
	}

	/**
Sends a code to verify a phone number to be added to a user's Telegram Passport.
*/
	async sendPhoneNumberVerificationCode(options: Omit<SendPhoneNumberVerificationCode, '@type'>): Promise<AuthenticationCodeInfo> {
		return this._request({
			...options,
			'@type': 'sendPhoneNumberVerificationCode',
		});
	}

	/**
Resends the code to verify a phone number to be added to a user's Telegram Passport.
*/
	async resendPhoneNumberVerificationCode(): Promise<AuthenticationCodeInfo> {
		return this._request({
			'@type': 'resendPhoneNumberVerificationCode',
		});
	}

	/**
Checks the phone number verification code for Telegram Passport.
*/
	async checkPhoneNumberVerificationCode(options: Omit<CheckPhoneNumberVerificationCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkPhoneNumberVerificationCode',
		});
	}

	/**
Sends a code to verify an email address to be added to a user's Telegram Passport.
*/
	async sendEmailAddressVerificationCode(options: Omit<SendEmailAddressVerificationCode, '@type'>): Promise<EmailAddressAuthenticationCodeInfo> {
		return this._request({
			...options,
			'@type': 'sendEmailAddressVerificationCode',
		});
	}

	/**
Resends the code to verify an email address to be added to a user's Telegram Passport.
*/
	async resendEmailAddressVerificationCode(): Promise<EmailAddressAuthenticationCodeInfo> {
		return this._request({
			'@type': 'resendEmailAddressVerificationCode',
		});
	}

	/**
Checks the email address verification code for Telegram Passport.
*/
	async checkEmailAddressVerificationCode(options: Omit<CheckEmailAddressVerificationCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkEmailAddressVerificationCode',
		});
	}

	/**
Returns a Telegram Passport authorization form for sharing data with a service.
*/
	async getPassportAuthorizationForm(options: Omit<GetPassportAuthorizationForm, '@type'>): Promise<PassportAuthorizationForm> {
		return this._request({
			...options,
			'@type': 'getPassportAuthorizationForm',
		});
	}

	/**
Returns already available Telegram Passport elements suitable for completing a Telegram Passport authorization form.
Result can be received only once for each authorization form.
*/
	async getPassportAuthorizationFormAvailableElements(options: Omit<GetPassportAuthorizationFormAvailableElements, '@type'>): Promise<PassportElementsWithErrors> {
		return this._request({
			...options,
			'@type': 'getPassportAuthorizationFormAvailableElements',
		});
	}

	/**
Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called
after getPassportAuthorizationFormAvailableElements if some previously available elements are going to be reused.
*/
	async sendPassportAuthorizationForm(options: Omit<SendPassportAuthorizationForm, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'sendPassportAuthorizationForm',
		});
	}

	/**
Sends phone number confirmation code to handle links of the type internalLinkTypePhoneNumberConfirmation.
*/
	async sendPhoneNumberConfirmationCode(options: Omit<SendPhoneNumberConfirmationCode, '@type'>): Promise<AuthenticationCodeInfo> {
		return this._request({
			...options,
			'@type': 'sendPhoneNumberConfirmationCode',
		});
	}

	/**
Resends phone number confirmation code.
*/
	async resendPhoneNumberConfirmationCode(): Promise<AuthenticationCodeInfo> {
		return this._request({
			'@type': 'resendPhoneNumberConfirmationCode',
		});
	}

	/**
Checks phone number confirmation code.
*/
	async checkPhoneNumberConfirmationCode(options: Omit<CheckPhoneNumberConfirmationCode, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'checkPhoneNumberConfirmationCode',
		});
	}

	/**
Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots
only.
*/
	async setBotUpdatesStatus(options: Omit<SetBotUpdatesStatus, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setBotUpdatesStatus',
		});
	}

	/**
Uploads a file with a sticker; returns the uploaded file.
*/
	async uploadStickerFile(options: Omit<UploadStickerFile, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'uploadStickerFile',
		});
	}

	/**
Returns a suggested name for a new sticker set with a given title.
*/
	async getSuggestedStickerSetName(options: Omit<GetSuggestedStickerSetName, '@type'>): Promise<Text> {
		return this._request({
			...options,
			'@type': 'getSuggestedStickerSetName',
		});
	}

	/**
Checks whether a name can be used for a new sticker set.
*/
	async checkStickerSetName(options: Omit<CheckStickerSetName, '@type'>): Promise<CheckStickerSetNameResult> {
		return this._request({
			...options,
			'@type': 'checkStickerSetName',
		});
	}

	/**
Creates a new sticker set. Returns the newly created sticker set.
*/
	async createNewStickerSet(options: Omit<CreateNewStickerSet, '@type'>): Promise<StickerSet> {
		return this._request({
			...options,
			'@type': 'createNewStickerSet',
		});
	}

	/**
Adds a new sticker to a set; for bots only. Returns the sticker set.
*/
	async addStickerToSet(options: Omit<AddStickerToSet, '@type'>): Promise<StickerSet> {
		return this._request({
			...options,
			'@type': 'addStickerToSet',
		});
	}

	/**
Sets a sticker set thumbnail; for bots only. Returns the sticker set.
*/
	async setStickerSetThumbnail(options: Omit<SetStickerSetThumbnail, '@type'>): Promise<StickerSet> {
		return this._request({
			...options,
			'@type': 'setStickerSetThumbnail',
		});
	}

	/**
Changes the position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created
by the bot.
*/
	async setStickerPositionInSet(options: Omit<SetStickerPositionInSet, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setStickerPositionInSet',
		});
	}

	/**
Removes a sticker from the set to which it belongs; for bots only. The sticker set must have been created by the bot.
*/
	async removeStickerFromSet(options: Omit<RemoveStickerFromSet, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeStickerFromSet',
		});
	}

	/**
Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB
can be downloaded.
*/
	async getMapThumbnailFile(options: Omit<GetMapThumbnailFile, '@type'>): Promise<File> {
		return this._request({
			...options,
			'@type': 'getMapThumbnailFile',
		});
	}

	/**
Returns information about a limit, increased for Premium users. Returns a 404 error if the limit is unknown.
*/
	async getPremiumLimit(options: Omit<GetPremiumLimit, '@type'>): Promise<PremiumLimit> {
		return this._request({
			...options,
			'@type': 'getPremiumLimit',
		});
	}

	/**
Returns information about features, available to Premium users.
*/
	async getPremiumFeatures(options: Omit<GetPremiumFeatures, '@type'>): Promise<PremiumFeatures> {
		return this._request({
			...options,
			'@type': 'getPremiumFeatures',
		});
	}

	/**
Returns examples of premium stickers for demonstration purposes.
*/
	async getPremiumStickerExamples(): Promise<Stickers> {
		return this._request({
			'@type': 'getPremiumStickerExamples',
		});
	}

	/**
Informs TDLib that the user viewed detailed information about a Premium feature on the Premium features screen.
*/
	async viewPremiumFeature(options: Omit<ViewPremiumFeature, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'viewPremiumFeature',
		});
	}

	/**
Informs TDLib that the user clicked Premium subscription button on the Premium features screen.
*/
	async clickPremiumSubscriptionButton(): Promise<Ok> {
		return this._request({
			'@type': 'clickPremiumSubscriptionButton',
		});
	}

	/**
Returns state of Telegram Premium subscription and promotion videos for Premium features.
*/
	async getPremiumState(): Promise<PremiumState> {
		return this._request({
			'@type': 'getPremiumState',
		});
	}

	/**
Checks whether Telegram Premium purchase is possible. Must be called before in-store Premium purchase.
*/
	async canPurchasePremium(options: Omit<CanPurchasePremium, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'canPurchasePremium',
		});
	}

	/**
Informs server about a purchase through App Store. For official applications only.
*/
	async assignAppStoreTransaction(options: Omit<AssignAppStoreTransaction, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'assignAppStoreTransaction',
		});
	}

	/**
Informs server about a purchase through Google Play. For official applications only.
*/
	async assignGooglePlayTransaction(options: Omit<AssignGooglePlayTransaction, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'assignGooglePlayTransaction',
		});
	}

	/**
Accepts Telegram terms of services.
*/
	async acceptTermsOfService(options: Omit<AcceptTermsOfService, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'acceptTermsOfService',
		});
	}

	/**
Sends a custom request; for bots only.
*/
	async sendCustomRequest(options: Omit<SendCustomRequest, '@type'>): Promise<CustomRequestResult> {
		return this._request({
			...options,
			'@type': 'sendCustomRequest',
		});
	}

	/**
Answers a custom query; for bots only.
*/
	async answerCustomQuery(options: Omit<AnswerCustomQuery, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'answerCustomQuery',
		});
	}

	/**
Succeeds after a specified amount of time has passed. Can be called before initialization.
*/
	async setAlarm(options: Omit<SetAlarm, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setAlarm',
		});
	}

	/**
Returns information about existing countries. Can be called before authorization.
*/
	async getCountries(): Promise<Countries> {
		return this._request({
			'@type': 'getCountries',
		});
	}

	/**
Uses the current IP address to find the current country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be
called before authorization.
*/
	async getCountryCode(): Promise<Text> {
		return this._request({
			'@type': 'getCountryCode',
		});
	}

	/**
Returns information about a phone number by its prefix. Can be called before authorization.
*/
	async getPhoneNumberInfo(options: Omit<GetPhoneNumberInfo, '@type'>): Promise<PhoneNumberInfo> {
		return this._request({
			...options,
			'@type': 'getPhoneNumberInfo',
		});
	}

	/**
Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after
changing localization to the specified language if properly localized country information is expected. Can be called
synchronously.
*/
	async getPhoneNumberInfoSync(options: Omit<GetPhoneNumberInfoSync, '@type'>): Promise<PhoneNumberInfo> {
		return this._request({
			...options,
			'@type': 'getPhoneNumberInfoSync',
		});
	}

	/**
Returns the link for downloading official Telegram application to be used when the current user invites friends to
Telegram.
*/
	async getApplicationDownloadLink(): Promise<HttpUrl> {
		return this._request({
			'@type': 'getApplicationDownloadLink',
		});
	}

	/**
Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature"
for testing. Returns a 404 error for unknown links. Can be called before authorization.
*/
	async getDeepLinkInfo(options: Omit<GetDeepLinkInfo, '@type'>): Promise<DeepLinkInfo> {
		return this._request({
			...options,
			'@type': 'getDeepLinkInfo',
		});
	}

	/**
Returns application config, provided by the server. Can be called before authorization.
*/
	async getApplicationConfig(): Promise<JsonValue> {
		return this._request({
			'@type': 'getApplicationConfig',
		});
	}

	/**
Saves application log event on the server. Can be called before authorization.
*/
	async saveApplicationLogEvent(options: Omit<SaveAppLogEvent, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'saveApplicationLogEvent',
		});
	}

	/**
Adds a proxy server for network requests. Can be called before authorization.
*/
	async addProxy(options: Omit<AddProxy, '@type'>): Promise<Proxy> {
		return this._request({
			...options,
			'@type': 'addProxy',
		});
	}

	/**
Edits an existing proxy server for network requests. Can be called before authorization.
*/
	async editProxy(options: Omit<EditProxy, '@type'>): Promise<Proxy> {
		return this._request({
			...options,
			'@type': 'editProxy',
		});
	}

	/**
Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization.
*/
	async enableProxy(options: Omit<EnableProxy, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'enableProxy',
		});
	}

	/**
Disables the currently enabled proxy. Can be called before authorization.
*/
	async disableProxy(): Promise<Ok> {
		return this._request({
			'@type': 'disableProxy',
		});
	}

	/**
Removes a proxy server. Can be called before authorization.
*/
	async removeProxy(options: Omit<RemoveProxy, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'removeProxy',
		});
	}

	/**
Returns list of proxies that are currently set up. Can be called before authorization.
*/
	async getProxies(): Promise<Proxies> {
		return this._request({
			'@type': 'getProxies',
		});
	}

	/**
Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called
before authorization.
*/
	async getProxyLink(options: Omit<GetProxyLink, '@type'>): Promise<HttpUrl> {
		return this._request({
			...options,
			'@type': 'getProxyLink',
		});
	}

	/**
Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization.
*/
	async pingProxy(options: Omit<PingProxy, '@type'>): Promise<Seconds> {
		return this._request({
			...options,
			'@type': 'pingProxy',
		});
	}

	/**
Sets new log stream for internal logging of TDLib. Can be called synchronously.
*/
	async setLogStream(options: Omit<SetLogStream, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setLogStream',
		});
	}

	/**
Returns information about currently used log stream for internal logging of TDLib. Can be called synchronously.
*/
	async getLogStream(): Promise<LogStream> {
		return this._request({
			'@type': 'getLogStream',
		});
	}

	/**
Sets the verbosity level of the internal logging of TDLib. Can be called synchronously.
*/
	async setLogVerbosityLevel(options: Omit<SetLogVerbosityLevel, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setLogVerbosityLevel',
		});
	}

	/**
Returns current verbosity level of the internal logging of TDLib. Can be called synchronously.
*/
	async getLogVerbosityLevel(): Promise<LogVerbosityLevel> {
		return this._request({
			'@type': 'getLogVerbosityLevel',
		});
	}

	/**
Returns list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications",
"proxy"]. Can be called synchronously.
*/
	async getLogTags(): Promise<LogTags> {
		return this._request({
			'@type': 'getLogTags',
		});
	}

	/**
Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously.
*/
	async setLogTagVerbosityLevel(options: Omit<SetLogTagVerbosityLevel, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'setLogTagVerbosityLevel',
		});
	}

	/**
Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously.
*/
	async getLogTagVerbosityLevel(options: Omit<GetLogTagVerbosityLevel, '@type'>): Promise<LogVerbosityLevel> {
		return this._request({
			...options,
			'@type': 'getLogTagVerbosityLevel',
		});
	}

	/**
Adds a message to TDLib internal log. Can be called synchronously.
*/
	async addLogMessage(options: Omit<AddLogMessage, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'addLogMessage',
		});
	}

	/**
Returns support information for the given user; for Telegram support only.
*/
	async getUserSupportInfo(options: Omit<GetUserSupportInfo, '@type'>): Promise<UserSupportInfo> {
		return this._request({
			...options,
			'@type': 'getUserSupportInfo',
		});
	}

	/**
Sets support information for the given user; for Telegram support only.
*/
	async setUserSupportInfo(options: Omit<SetUserSupportInfo, '@type'>): Promise<UserSupportInfo> {
		return this._request({
			...options,
			'@type': 'setUserSupportInfo',
		});
	}

	/**
Does nothing; for testing only. This is an offline method. Can be called before authorization.
*/
	async testCallEmpty(): Promise<Ok> {
		return this._request({
			'@type': 'testCallEmpty',
		});
	}

	/**
Returns the received string; for testing only. This is an offline method. Can be called before authorization.
*/
	async testCallString(options: Omit<TestCallString, '@type'>): Promise<TestString> {
		return this._request({
			...options,
			'@type': 'testCallString',
		});
	}

	/**
Returns the received bytes; for testing only. This is an offline method. Can be called before authorization.
*/
	async testCallBytes(options: Omit<TestCallBytes, '@type'>): Promise<TestBytes> {
		return this._request({
			...options,
			'@type': 'testCallBytes',
		});
	}

	/**
Returns the received vector of numbers; for testing only. This is an offline method. Can be called before authorization.
*/
	async testCallVectorInt(options: Omit<TestCallVectorInt, '@type'>): Promise<TestVectorInt> {
		return this._request({
			...options,
			'@type': 'testCallVectorInt',
		});
	}

	/**
Returns the received vector of objects containing a number; for testing only. This is an offline method. Can be called
before authorization.
*/
	async testCallVectorIntObject(options: Omit<TestCallVectorIntObject, '@type'>): Promise<TestVectorIntObject> {
		return this._request({
			...options,
			'@type': 'testCallVectorIntObject',
		});
	}

	/**
Returns the received vector of strings; for testing only. This is an offline method. Can be called before authorization.
*/
	async testCallVectorString(options: Omit<TestCallVectorString, '@type'>): Promise<TestVectorString> {
		return this._request({
			...options,
			'@type': 'testCallVectorString',
		});
	}

	/**
Returns the received vector of objects containing a string; for testing only. This is an offline method. Can be called
before authorization.
*/
	async testCallVectorStringObject(options: Omit<TestCallVectorStringObject, '@type'>): Promise<TestVectorStringObject> {
		return this._request({
			...options,
			'@type': 'testCallVectorStringObject',
		});
	}

	/**
Returns the squared received number; for testing only. This is an offline method. Can be called before authorization.
*/
	async testSquareInt(options: Omit<TestSquareInt, '@type'>): Promise<TestInt> {
		return this._request({
			...options,
			'@type': 'testSquareInt',
		});
	}

	/**
Sends a simple network request to the Telegram servers; for testing only. Can be called before authorization.
*/
	async testNetwork(): Promise<Ok> {
		return this._request({
			'@type': 'testNetwork',
		});
	}

	/**
Sends a simple network request to the Telegram servers via proxy; for testing only. Can be called before authorization.
*/
	async testProxy(options: Omit<TestProxy, '@type'>): Promise<Ok> {
		return this._request({
			...options,
			'@type': 'testProxy',
		});
	}

	/**
Forces an updates.getDifference call to the Telegram servers; for testing only.
*/
	async testGetDifference(): Promise<Ok> {
		return this._request({
			'@type': 'testGetDifference',
		});
	}

	/**
Does nothing and ensures that the Update object is used; for testing only. This is an offline method. Can be called
before authorization.
*/
	async testUseUpdate(): Promise<Update> {
		return this._request({
			'@type': 'testUseUpdate',
		});
	}

	/**
Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously.
*/
	async testReturnError(options: Omit<TestReturnError, '@type'>): Promise<Error> {
		return this._request({
			...options,
			'@type': 'testReturnError',
		});
	}

	/**
	Send a request to the actual libtdjson.so here. Do not forget to handle {@link Error} responses and timeouts.
	*/
	protected abstract _request<R extends Request>(message: R): Promise<any>;
}
